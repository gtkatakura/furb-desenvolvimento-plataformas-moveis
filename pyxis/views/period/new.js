import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import Components from './../../components';

const style = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
  },
  header: {
    marginBottom: 16
  },
  title: {
    fontSize: 24
  }
});

class NewPeriodScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Novo período'
  };

  get graduationSemester() {
    return this.props.navigation.state.params.graduationSemester;
  }

  constructor(props) {
    super(props);

    this.state = {
      start: '',
      end: '',
      discipline: { name: '', id: '' },
      disciplines: [] 
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  onSelectChange(value, index) {
    const discipline = this.state.disciplines[index];
    this.setState({ discipline });
  }

  async createPeriod() {
    try {
      const instructor = await this.services.instructorsRepository.save({
        user_id: this.services.currentUser.id
      });

      const periodDiscipline = {
        graduation_semester_id: this.graduationSemester.id,
        discipline_id: this.state.discipline.id,
        instructor_id: instructor.id,
        period: {
          start: this.state.start,
          end: this.state.end
        },
      };

      await this.services.periodDisciplinesRepository.save(periodDiscipline);

      Alert.alert('Registro efetuado com sucesso!');
      this.goBack();
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  async componentDidMount() {
    const disciplines = await this.services.disciplinesRepository.all();

    this.setState({ disciplines });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Novo período</Text>
        </View>
        <ScrollView>
          <Components.TextField name="start" placeholder="Inicio de periodo" value={this.state.start} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.TextField name="end" placeholder="Fim de periodo" value={this.state.end} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.Select displayField="name" valueField="id" value={this.state.discipline} onValueChange={this.onSelectChange.bind(this)} items={this.state.disciplines}></Components.Select>
          
          <Components.PButton title="Salvar" onPress={() => this.createPeriod()}></Components.PButton>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default NewPeriodScreen;
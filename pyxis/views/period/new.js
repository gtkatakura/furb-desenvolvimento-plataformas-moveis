import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Components from './../../components';

const style = StyleSheet.create({
  base: {
    padding: 24
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

  get classz() {
    return this.props.navigation.state.params.classz;
  }

  get period() {
    return this.props.navigation.state.params.period;
  }

  get semester() {
    return this.props.navigation.state.params.semester;
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
    const discipline = { 
      name: value,
      id: value
    }

    this.setState({
      discipline
    })
  }

  async createPeriod() {
    try {
      const model = {
        graduation_semester_id: this.semester.id,
        discipline_id: this.state.discipline.id,
        period: {
          start: this.state.start,
          end: this.state.end
        },
        instructor_id: 1
      };

      const periodDiscipline = await periodDisciplinesRepository.save(model);

      Alert('Sucesso!');
      
      this.navigate('Semester', {
        semester: this.semester
      });
    } catch (err) {
      Alert('Oops', err);
    }
  }

  async componentDidMount() {
    const disciplines = await this.services.disciplinesRepository.all({
      course_id: this.classz.course_id
    });

    this.setState({
      disciplines
    });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Novo período</Text>
        </View>
        <View style={style.content}>
          <Components.TextField name="start" placeholder="Inicio de periodo" value={this.state.start} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.TextField name="end" placeholder="Fim de periodo" value={this.state.end} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.Select value={this.state.discipline} displayField="name" valueField="id" items={this.state.disciplines}></Components.Select>
          
          <Button title="Salvar" onPress={() => this.createPeriod()}></Button>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default NewPeriodScreen;
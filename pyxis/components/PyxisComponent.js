import _ from 'lodash';
import { Component } from 'react';

export default class PyxisComponent extends Component {
  get services() {
    return _.get(this.props.navigation, 'state.params.services');
  }

  navigate(routeName, params = {}) {
    this.props.navigation.navigate(routeName, Object.assign({
      services: this.services
    }, params))
  }
}
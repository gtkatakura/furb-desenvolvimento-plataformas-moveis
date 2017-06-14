import _ from 'lodash';
import { Component } from 'react';

export default class PyxisComponent extends Component {
  get services() {
    return _.get(this.props.navigation, 'state.params.services');
  }

  navigate(routeName, params = {}) {
    const newParams = Object.assign({
      services: this.services
    }, params);

    this.props.navigation.navigate(routeName, _.assign(params, {
      navigateOldParams: [routeName, newParams]
    }));
  }

  goBack() {
    const navigateOldParams = _.get(this.props.navigation, 'state.params.navigateOldParams');
    this.navigate(...navigateOldParams);
  }
}
import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const {tripName, from, to} = this.props;
    return(
      <li>{tripName + ': ' + from.stop_name + ' at ' + from.sch_dep_dt + ' ~ ' +
      to.stop_name + ' at ' + from.sch_dep_dt}</li>
    );
  }
}
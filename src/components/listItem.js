import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const {fromStopId, toStopId, tripId, fromDepartureTime, toArrivalTime} = this.props.data;
    return(
      <li>{tripId + ': ' + fromStopId + ' at ' + fromDepartureTime + ' ~ ' +
      toStopId + ' at ' + toArrivalTime}</li>
    );
  }
}
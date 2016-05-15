import React, { Component } from 'react';

const style = {
  marginBottom: '30px'
}

const titleStyle = {
  fontSize: '14px',
  color: '#2db7f5',
  fontFamily: '"Hiragino Sans GB","Microsoft YaHei"'
}

function timeFormat(str) {
  const timestamp = parseInt(str);
  return new Date(timestamp).toLocaleTimeString();
}

export default class ListItem extends Component {
  render() {
    const {tripName, from, to} = this.props.data;
    return(
        <div style={style}>
          <h1 style={titleStyle}>{tripName}</h1>
          <p>{'Leave ' + from.stop_name + ' at ' + timeFormat(from.sch_dep_dt)}</p>
          <p>{'Arrive ' + to.stop_name + ' at ' + timeFormat(to.sch_arr_dt)}</p>
        </div>
    );
  }
}
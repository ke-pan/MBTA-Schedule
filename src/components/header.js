import React, { Component } from 'react';

const style = {
  padding: '20px',
  marginBottom: '20px',
  background: '#ECECEC',
  fontSize: '14px',
  color: '#2db7f5',
  fontFamily: '"Hiragino Sans GB","Microsoft YaHei"'
}

export default class Header extends Component {
  render() {
    return (
      <header style={style}>
        MBTA SCHEDULE
      </header>
    );
  }
}
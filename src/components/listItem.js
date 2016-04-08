import { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const {departure, arrival} = this.props;
    return(
      <li>{departure + ' ~ ' + arrival}</li>
    );
  }
}
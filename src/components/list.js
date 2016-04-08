import React from 'react';
import ListItem from './listItem';

class List extends React.Component {
  render() {
    const {from, to, departure_time} = this.props;
    const departure = departure_time.map( time => {
      <ListItem departure={time[0]} arrival={time[1]}/>
    });
    return (
      <div>
        <h1>{"From " + from + " To " + to}</h1>
        <ul>
          { departure }
        </ul>
      </div>
    );
  }
}

export default List;
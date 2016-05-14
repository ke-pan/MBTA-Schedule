import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/listItem';

const style = {
  margin: "40px",
}

class List extends React.Component {
  listItem() {
    if(this.props.trips.length === 0) {
      return 'No transportation found'
    } else {
      return this.props.trips.map( (trip, i) => {
        return <ListItem key={i} data={trip}/>
      })
    }
  }
  render() {
    return (
      <div style={style}>
        { this.listItem() }
      </div>
    );
  }
}

List.propTypes = {
  trips: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps)(List);
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/listItem';

class List extends React.Component {
  listItem() {
    // if(this.props.data.length === 0) {
      return 'No Trains'
    // } else {
    //   return this.props.data.map( (info, i) => {
    //     return <ListItem key={i} data={info}/>
    //   })
    // }
  }
  render() {
    const {from, to, date} = this.props;
    return (
      <div>
        <h1>{"From " + from + " To " + to + ' At ' + date}</h1>
        <ul>
          { this.listItem() }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  //day: PropTypes.object.isRequired,
  // data: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    from: state.from,
    to: state.to,
    date: state.date,
    data: state.data
  };
}

export default connect(mapStateToProps)(List);
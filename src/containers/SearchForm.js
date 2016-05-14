import React from 'react';
import { connect } from 'react-redux';
import { Form, Select, Button, DatePicker } from 'antd';
const Option = Select.Option;
import { loadFrom, loadTo, findSchedule } from '../actions';
import StopData from '../data/stops.json';

const FormItem = Form.Item;

const formStyle = {
  margin: '0 auto',
  width: '90%',
}

class RailwayForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromChange(from) {
    this.props.loadFrom(from);
  }

  handleToChange(to) {
    this.props.loadTo(to);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.findSchedule();
  }

  render() {
    return(
      <Form inline style={formStyle}>
        <FormItem>
          <Select showSearch
                  placeholder="From"
                  style={{ width: 240 }}
                  onChange={this.handleFromChange} >
            {StopData.stops.map((stop, idx) => {
              return <Option key={idx} value={stop.stopId}>{stop.stopName}</Option>
            })}
          </Select>
        </FormItem>
        <FormItem >
          <Select showSearch
                  placeholder="To"
                  style={{ width: 240 }}
                  onChange={this.handleToChange} >
            {StopData.stops.map((stop, idx) => {
              return <Option key={idx} value={stop.stopId}>{stop.stopName}</Option>
            })}
          </Select>
        </FormItem>
        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>SEARCH</Button>
      </Form>
    );
  }
}

RailwayForm.propTypes = {
  loadFrom: React.PropTypes.func.isRequired,
  loadTo: React.PropTypes.func.isRequired,
  findSchedule: React.PropTypes.func.isRequired
}


export default connect(null, {
  loadFrom,
  loadTo,
  findSchedule
})(RailwayForm);
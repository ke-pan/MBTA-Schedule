import React from 'react';
import { connect } from 'react-redux';
import { Form, Select, Button, DatePicker } from 'antd';
const Option = Select.Option;
import enUS from '../../node_modules/antd/lib/date-picker/locale/en_US';
import { loadFrom, loadTo, findSchedule } from '../actions';

const FormItem = Form.Item;

class RailwayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '10000',
      to: '10003',
      date: new Date()
    }
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromChange(from) {
    this.setState({from});
    this.props.loadFrom(from);
  }

  handleToChange(to) {
    this.setState({to});
    this.props.loadTo(to);
  }

  handleDateChange(date) {
    this.setState({date});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.findSchedule(this.state.from, this.state.to, this.state.date);
  }

  render() {
    return(
      <Form inline>
        <FormItem label="From: ">
          <Select value={this.state.from} style={{ width: 120 }} onChange={this.handleFromChange}>
            <Option value="10000">10000</Option>
            <Option value="10003">10003</Option>
            <Option value="10005">10005</Option>
          </Select>
        </FormItem>
        <FormItem label="To: ">
          <Select value={this.state.to} style={{ width: 120 }} onChange={this.handleToChange}>
            <Option value="10000">10000</Option>
            <Option value="10003">10003</Option>
            <Option value="10005">10005</Option>
          </Select>
        </FormItem>
        <FormItem label="Date: ">
          <DatePicker locale={enUS} value={this.state.date} onChange={this.handleDateChange}/>
        </FormItem>
        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>FIND TRAINS</Button>
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
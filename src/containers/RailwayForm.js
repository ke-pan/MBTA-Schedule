import React from 'react';
import { connect } from 'react-redux';
import { Form, Select, Button, DatePicker } from 'antd';
const Option = Select.Option;
import enUS from '../../node_modules/antd/lib/date-picker/locale/en_US';
import { loadFare } from '../actions';

const FormItem = Form.Item;

class RailwayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 'LAFY',
      to: '12TH',
      date: new Date()
    }
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromChange(from) {
    this.setState({from});
  }

  handleToChange(to) {
    this.setState({to});
  }

  handleDateChange(date) {
    this.setState({date});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.from, this.state.to, this.state.date);
  }

  render() {
    return(
      <Form inline>
        <FormItem label="From: ">
          <Select value={this.state.from} style={{ width: 120 }} onChange={this.handleFromChange}>
            <Option value="LAFY">LAFY</Option>
            <Option value="19TH">19TH</Option>
            <Option value="12TH">12TH</Option>
          </Select>
        </FormItem>
        <FormItem label="To: ">
          <Select value={this.state.to} style={{ width: 120 }} onChange={this.handleToChange}>
            <Option value="LAFY">LAFY</Option>
            <Option value="19TH">19TH</Option>
            <Option value="12TH">12TH</Option>
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
  handleSubmit: React.PropTypes.func.isRequired
}



export default connect(null, {handleSubmit: loadFare})(RailwayForm);
import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class RailwayForm extends React.Component {
  render() {
    return(
      <Form inline>
        <FormItem label="From: ">
          <Input placeholder="Beijing"/>
        </FormItem>
        <FormItem label="To: ">
          <Input placeholder="Shanghai"/>
        </FormItem>
        <Button type="primary" htmlType="submit">FIND TRAINS</Button>
      </Form>
    );
  }
}

export default RailwayForm;
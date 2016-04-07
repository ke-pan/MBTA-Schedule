import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

const RailwayForm = () => {
  return(
    <Form inline>
      <FormItem label="from: ">
        <Input placeholder="Beijing"/>
      </FormItem>
      <FormItem label="to: ">
        <Input placeholder="Shanghai"/>
      </FormItem>
      <Button type="primary" htmlType="submit">lookup</Button>
    </Form>
  );
}

export default RailwayForm;
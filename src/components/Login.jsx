import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

class Login extends Component {
	constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
	}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
		const { formLayout } = this.state;
		const { getFieldDecorator, validateFields } = this.props.form
		
    return (
      <Form layout={formLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
					{getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

Login.propTypes = {
	form: PropTypes.object.isRequired
}

// export default Login;
export default Form.create()(Login)
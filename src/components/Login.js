import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: "horizontal"
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const { formLayout } = this.state;
        const { getFieldDecorator } = this.props.form;

        return (
            <div id="components-form-login">
                <Form
                    layout={formLayout}
                    onSubmit={this.handleSubmit}
                    className="login-form"
                >
                    <h1>Login Form</h1>
                    <Form.Item>
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your email!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Email"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your Password!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Link className="login-form-register" to={"/register"}>
                            Register
                        </Link>
                        <Link className="login-form-forgot" to={"/forgot"}>
                            Forgot password
                        </Link>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <style>
                    {`
        #components-form-login .login-form {
          max-width: 300px;
          margin: 0 auto;
        }
        #components-form-login .login-form h1 {
          text-align: center;
        }
        #components-form-login .login-form-forgot {
          float: right;
        }
        #components-form-login .login-form-button {
          width: 100%;
        }
        `}
                </style>
            </div>
        );
    }
}

Login.propTypes = {
    form: PropTypes.object.isRequired
};

// export default Login;
export default Form.create()(Login);

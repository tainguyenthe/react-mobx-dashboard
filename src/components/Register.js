import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Checkbox, Button } from "antd";

const { Option } = Select;
const FormItem = Form.Item;
const { TextArea } = Input;

class Register extends Component {
    constructor() {
        super();
        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = [".com", ".org", ".net"].map(
                domain => `${value}${domain}`
            );
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };
        const prefixSelector = getFieldDecorator("prefix", {
            initialValue: "86"
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <div id="components-form-register">
                <Form onSubmit={this.handleSubmit} className="register-form">
                    <h1>Register Form</h1>
                    <FormItem {...formItemLayout} label="Owner name">
                        {getFieldDecorator("ownername", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your ownername!",
                                    whitespace: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Hospital / Clinic name"
                    >
                        {getFieldDecorator("nickname", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your nickname!",
                                    whitespace: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>
										<FormItem {...formItemLayout} label="Address">
                        {getFieldDecorator("address", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your address!",
                                    whitespace: true
                                }
                            ]
                        })(
												<TextArea autosize={{ minRows: 4, maxRows: 8 }} />
												)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Phone">
                        {getFieldDecorator("phone", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your phone number!"
                                }
                            ]
                        })(
                            <Input
                                addonBefore={prefixSelector}
                                style={{ width: "100%" }}
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Email">
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    type: "email",
                                    message: "The input is not valid Email!"
                                },
                                {
                                    required: true,
                                    message: "Please input your Email!"
                                }
                            ]
                        })(<Input />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Password">
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your password!"
                                },
                                {
                                    validator: this.validateToNextPassword
                                }
                            ]
                        })(<Input type="password" />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Confirm Password">
                        {getFieldDecorator("confirm", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please confirm your password!"
                                },
                                {
                                    validator: this.compareToFirstPassword
                                }
                            ]
                        })(
                            <Input
                                type="password"
                                onBlur={this.handleConfirmBlur}
                            />
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        {getFieldDecorator("agreement", {
                            valuePropName: "checked"
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </FormItem>
                </Form>
                <style>
                    {`
        #components-form-register .register-form {
          max-width: 600px;
					margin: 0 auto;
				}
				#components-form-register .register-form h1 {
					text-align: center;
        }
        #components-form-register .register-form-forgot {
          float: right;
        }
        #components-form-register .register-form-button {
          width: 100%;
        }
        `}
                </style>
            </div>
        );
    }
}

Register.propTypes = {
    form: PropTypes.object.isRequired
};

export default Form.create()(Register);

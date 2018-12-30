import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

class Forgot extends Component {
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
            <div id="components-form-forgot">
                <Form
                    layout={formLayout}
                    onSubmit={this.handleSubmit}
                    className="forgot-form"
                >
                    <h1>Forgot Form</h1>
                    <FormItem>
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
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="forgot-form-button"
                        >
                            Reset password
                        </Button>
                    </FormItem>
                </Form>
                <style>
                    {`
        #components-form-forgot .forgot-form {
          max-width: 300px;
          margin: 0 auto;
				}
				#components-form-forgot .forgot-form h1{
          text-align: center;
        }
        #components-form-forgot .forgot-form-button {
          width: 100%;
        }
        `}
                </style>
            </div>
        );
    }
}

Forgot.propTypes = {
    form: PropTypes.object.isRequired
};

export default Form.create()(Forgot);

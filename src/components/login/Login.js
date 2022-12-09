import React from "react";

import "./Login.scss";
import logo from "../../assets/imgs/Done.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isValid, errors },
    control,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const handleSubmitlogin = (data) => {
    console.log("aa");
    navigate("/dashbroard");
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="" />
      </div>
      <div className="login-title">
        <p>Welcome back to</p>
        <h2>OUR REMINDER</h2>
      </div>
      <div className="login-form">
        <Form onFinish={handleSubmit(handleSubmitlogin)}>
          <Form.Item>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  placeholder="Enter your email"
                  {...field}
                  status={errors.email ? "error" : ""}
                />
              )}
            />
            <span className="errors">{errors?.email?.message}</span>
          </Form.Item>
          <Form.Item>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input.Password
                  placeholder="Enter your password"
                  {...field}
                  status={errors.password ? "error" : ""}
                />
              )}
            />
            <span className="errors">{errors?.password?.message}</span>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Sign In</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="login-nav">
        <p>Don’t have an account ?</p>
        <Link to="/registration">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;

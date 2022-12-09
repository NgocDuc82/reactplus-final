import React, { useState, useEffect } from "react";

import "./Registration.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/imgs/Done.svg";

import { useForm, Controller } from "react-hook-form";
import { Input, Button, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { postRegister } from "../../service/User";

import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
});

const Registration = () => {
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState(true);
  const [dataTasks, setDataTasks] = useState();
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

  const getTaskList = async () => {
    if (dataTasks) {
      const res = await postRegister({
        email: dataTasks?.email,
        password: dataTasks?.password,
        name: dataTasks?.name,
      });
      if (res) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    getTaskList();
  }, [dataTasks]);
  const handleSubmitRegister = (data) => {
    if (data.password === data.confirmPassword) {
      setCheckPassword(true);
      setDataTasks(data);
    } else {
      setCheckPassword(false);
    }
  };

  return (
    <div className="register">
      <div className="register-logo">
        <img src={logo} alt="" />
      </div>
      <div className="register-title">
        <h2>Get’s things done with TODO</h2>
        <p>Let’s help you meet up your tasks</p>
      </div>
      <div className="register-form">
        <Form onFinish={handleSubmit(handleSubmitRegister)}>
          <Form.Item>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  placeholder="Enter your full name"
                  {...field}
                  status={errors.name ? "error" : ""}
                />
              )}
            />
            <span className="errors">{errors?.name?.message}</span>
          </Form.Item>

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
                  placeholder="Enter password"
                  {...field}
                  status={errors.password ? "error" : ""}
                />
              )}
            />
            <span className="errors">{errors?.password?.message}</span>
          </Form.Item>
          <Form.Item>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Input.Password placeholder="Confirm Password" {...field} />
              )}
            />
            <span className="errors">
              {!checkPassword && "passwords do not match"}
            </span>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
        <div className="register-nav">
          <p>Already have an account ?</p>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;

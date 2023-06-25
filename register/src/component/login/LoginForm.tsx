import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import FormInput from "../inputFields/FormInput";
import Button from "../button";
import { loginUserService } from "../../services/user";

import { useDispatch } from "react-redux";
import { userSliceActions } from "../../redux/slice/user";

type FormValueType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    control,
    watch,
    reset,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValueType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValueType> = async (formData) => {
    try {
      const { email, password } = formData;
      const userData = {
        email,
        password,
      };
      const data = await loginUserService(userData);

      reset();
      localStorage.setItem("authentcation_token", data);
      dispatch(userSliceActions.login(data));
      navigate("/allProducts", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-container column-flexBox">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container column-flexBox"
      >
        {/* username */}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className=" column-flexBox">
                <FormInput
                  value={value}
                  label="Email"
                  onChange={onChange}
                  type="email"
                  name="email"
                  className="input-field"
                />
              </div>
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="column-flexBox">
                <FormInput
                  value={value}
                  label="Password"
                  onChange={onChange}
                  type="password"
                  name="password"
                  className="input-field"
                />
              </div>
            );
          }}
        />
        <Button
          disabled={false}
          type="submit"
          label="Log In"
          className="login-btn"
        ></Button>
      </form>
    </div>
  );
};

export default LoginForm;

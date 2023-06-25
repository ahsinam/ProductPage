import React, { useState } from "react";
import FormInput from "../inputFields/FormInput";
import Button from "../button";
import Dropdown from "../dropdown";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { resgiterUser } from "../../services/user";

type FormValueType = {
  username: string;
  email: string;
  address: string;
  phone: string;
  gender: string;
  password: string;
};

const RegistrationForm = () => {
  const {
    control,
    reset,
    watch,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValueType>({
    defaultValues: {
      username: "",
      email: "",
      address: "",
      phone: "",
      gender: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValueType> = async (formData) => {
    try {
      const { username, email, password, address, phone, gender } = formData;
      const userData = {
        username,
        email,
        password,
        address,
        phone,
        gender,
      };
      await resgiterUser(userData);
      reset();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register-container column-flexBox">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container column-flexBox"
      >
        {/* username */}
        <Controller
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="column-flexBox">
                <FormInput
                  value={value}
                  label="Username"
                  onChange={onChange}
                  type="text"
                  name="username"
                  className="input-field"
                />
              </div>
            );
          }}
        />
        {/* Email  */}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
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
        {/* password  */}
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
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
        {/* Address  */}
        <Controller
          name="address"
          control={control}
          rules={{ required: "Address is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Address"
                  onChange={onChange}
                  type="string"
                  name="address"
                  className="input-field"
                />
              </div>
            );
          }}
        />
        {/* PhoneNumber  */}
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone Number is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Phone"
                  onChange={onChange}
                  type="string"
                  name="phone"
                  className="input-field"
                />
              </div>
            );
          }}
        />

        {/* Gender  */}
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <Dropdown
                onChange={onChange}
                value={value}
                className="dropdown-container"
              />
            );
          }}
        />

        <Button
          disabled={false}
          type="submit"
          label="Register"
          className="column-flexBox register-btn"
        ></Button>
      </form>
    </div>
  );
};

export default RegistrationForm;

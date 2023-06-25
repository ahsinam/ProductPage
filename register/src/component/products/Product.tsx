import React, { Fragment } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FormInput from "../inputFields";
import Button from "../button";
import { addProduct } from "../../services/product";

type FormValueType = {
  prod_name: string;
  quantity: string;
  price: string;
  remark: string;
  description: string;
};

const Product = () => {
  const {
    control,
    watch,
    reset,
    handleSubmit,
    trigger,

    formState: { errors },
  } = useForm<FormValueType>({
    defaultValues: {
      prod_name: "",
      quantity: "",
      price: "",
      remark: "",
      description: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValueType> = async (formData) => {
    try {
      const { prod_name, quantity, price, remark, description } = formData;

      const productData = {
        prod_name,
        quantity,
        price,
        remark,
        description,
      };

      await addProduct(productData);
      reset();
      navigate("/allProducts", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-product-container column-flexBox">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-box column-flexBox"
      >
        {/* prodict name */}
        <Controller
          name="prod_name"
          control={control}
          rules={{ required: "Product name is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Product Name"
                  onChange={onChange}
                  type="text"
                  name="prod_name"
                  className="product-field"
                />
              </div>
            );
          }}
        />
        {/* Quantity */}
        <Controller
          name="quantity"
          control={control}
          rules={{ required: "Product name is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Quantity"
                  onChange={onChange}
                  type="text"
                  name="quantity"
                  className="product-field"
                />
              </div>
            );
          }}
        />
        {/* Price */}
        <Controller
          name="price"
          control={control}
          rules={{ required: "Price is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Price"
                  onChange={onChange}
                  type="text"
                  name="price"
                  className="product-field"
                />
              </div>
            );
          }}
        />
        {/* Remark */}
        <Controller
          name="remark"
          control={control}
          rules={{ required: "Remark is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Remark"
                  onChange={onChange}
                  type="text"
                  name="remark"
                  className="product-field"
                />
              </div>
            );
          }}
        />
        {/* Description */}
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field: { name, onChange, value } }) => {
            return (
              <div className="main-container column-flexBox">
                <FormInput
                  value={value}
                  label="Description"
                  onChange={onChange}
                  type="text"
                  name="description"
                  className="product-field"
                />
              </div>
            );
          }}
        />
        <Button
          disabled={false}
          type="submit"
          label="Add Product"
          className="product-button"
        ></Button>
      </form>
    </div>
  );
};

export default Product;

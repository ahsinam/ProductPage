import React from "react";

interface FormInputProps {
  label?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value: string;
  className?: string;
}

const FormInput = (props: FormInputProps) => {
  const { label, type, onChange, name, value, className } = props;
  return (
    <div className="group">
      <label className="label">{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
      />
    </div>
  );
};

export default FormInput;

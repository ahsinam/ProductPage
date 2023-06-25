import React from "react";

interface DropDownProps {
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = (props: DropDownProps) => {
  const { onChange, value, className } = props;
  return (
    <select onChange={onChange} value={value} className={className}>
      <option value="">Select gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default Dropdown;

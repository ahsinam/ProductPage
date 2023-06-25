interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { label, type = "button", disabled, className, onClick } = props;

  return (
    <button
      disabled={disabled}
      type={type === "button" ? "button" : "submit"}
      className={className}
      onClick={type === "button" ? onClick : () => {}}
    >
      {label}
    </button>
  );
};

export default Button;

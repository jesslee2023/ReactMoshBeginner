interface ButtonProps {
  children: string;
  ifBtnClicked: () => void;
}

const Button = ({ children, ifBtnClicked }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-danger " onClick={ifBtnClicked}>
      {children}
    </button>
  );
};

export default Button;

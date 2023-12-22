import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  clickClose: () => void;
}

const Alert = ({ children, clickClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={clickClose}
      ></button>
    </div>
  );
};

export default Alert;

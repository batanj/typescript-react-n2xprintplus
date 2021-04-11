import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ToastProps {
  content: string;
  error?: boolean;
  success?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  content,
  error = false,
  success = false,
}) => {
  useEffect(() => {
    const message = () => {
      if (error) return toast.error(content, { autoClose: 3000 });
      return toast.success(content, { autoClose: 3000 });
    };
    message();
  }, [content, error, success]);

  return <ToastContainer position="top-center" style={{ width: 550 }} />;
};

export default Toast;

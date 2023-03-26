import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



function Toast({level, text, isShown}) {
    useEffect(() => {
      if (isShown && text) {
        toast.success(`${text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    }, [isShown, text])
    
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Toast
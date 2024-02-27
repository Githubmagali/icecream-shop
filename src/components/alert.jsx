"use client"
import { useEffect } from "react";


function CustomAlert ({ message, onClose, alertType }) {
        useEffect(() => {
          const timeout = setTimeout(() => {
            onClose();
          }, 5000);
      
          return () => clearTimeout(timeout);
        }, [onClose]);
      
        const alertColor = alertType === "success" ? "bg-green-500" : "bg-red-500";
      
      
      
        return (
          <div className={`fixed top-0 mb-4 mr-4 ${alertColor} text-white p-4 rounded-md`}>
            {message}
          </div>
        );
      };
      


export default CustomAlert


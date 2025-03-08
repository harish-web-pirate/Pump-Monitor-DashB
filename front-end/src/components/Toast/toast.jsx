import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, type = "info") => {
  toast[type](message, {
    position: "top-right", 
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    icon: getIcon(type), 
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "8px",
      padding: "12px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
  });
};


const getIcon = (type) => {
  switch (type) {
    case "success":
      return "✅"; 
    case "error":
      return "❌"; 
    case "warning":
      return "⚠️"; 
    default:
      return "ℹ️"; 
  }
};

import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckActiveMenu = (menu: string) => {
    switch (menu) {
      case "main":
        return location.pathname === "/";
      case "auth":
        return location.pathname === "/auth";
      default:
        return false;
    }
  };
  return (
    <div className="row header">
      <div
        onClick={() => navigate("/")}
        className="col-md-10 d-flex flex-row align-items-center"
      >Logo</div>
      <div className="col-md-2">
        <div
          color="inherit"
          onClick={() => navigate("/auth")}
          className="d-flex flex-row align-items-center justify-content-center"
        >
          Login/ Register
          {handleCheckActiveMenu("auth") && <div className="underline"></div>}
        </div>
      </div>
    </div>
  );
};
export default Header;

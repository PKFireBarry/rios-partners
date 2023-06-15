import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({ style, styleOverride }) => {
  return <div className={`logo ${style}`} style={styleOverride} />;
};

Logo.propTypes = {
  style: PropTypes.oneOf(["white", "normal"]),
};

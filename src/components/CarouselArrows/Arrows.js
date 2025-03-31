import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; 
import "./Arrows.css";

export const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <FaArrowRight /> 
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

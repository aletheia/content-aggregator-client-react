import React, { ReactNode } from "react";
import "./Animation.scss";

export const BoxAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container">{children}</div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

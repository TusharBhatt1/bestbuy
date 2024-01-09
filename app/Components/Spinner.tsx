import React from "react";
import { BiLoader } from "react-icons/bi";
export default function Spinner() {
  return (
    <div>
      <div className="animate-spin">
        <BiLoader />
      </div>
    </div>
  );
}

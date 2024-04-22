"use client";

import React from "react";

interface Props {
  name: string;
  action: () => void;
}
const AddButton = ({ name, action }: Props) => {
  return (
    <button className="btn btn-success" onClick={() => action()}>
      {name}
    </button>
  );
};

export default AddButton;

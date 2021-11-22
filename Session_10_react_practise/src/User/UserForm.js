import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./UserForm.css";
import { useState } from "react";
export default function UserForm() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    imageUrl: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
  };
  const onchange = (e) => {
    const newValue = e.target.value;
    const field = e.target.name;
    setValue((prev) => {
      return {
        ...prev,
        [field]: newValue
      };
    });
  };
  return (
    <Card className="user-form">
      <form onSubmit={handleSubmit}>
        <div className="user-from__control">
          <label className="user-from__lable">Name</label>
          <input
            type="text"
            className="user-name__input"
            value={value.name}
            onChange={onchange}
            name="name"
          />
        </div>
        <div className="user-from__control">
          <label className="user-from__lable">Phone</label>
          <input
            type="text"
            className="user-name__input"
            value={value.phone}
            onChange={onchange}
            name="phone"
          />
        </div>
        <div className="user-from__control">
          <label className="user-from__lable">Image URL</label>
          <input
            type="text"
            className="user-name__input"
            value={value.imageUrl}
            onChange={onchange}
            name="imageUrl"
          />
        </div>
        <div className="user-from__control">
          {/* <button>Add</button> */}
          <Button>Add</Button>
        </div>
      </form>
    </Card>
  );
}

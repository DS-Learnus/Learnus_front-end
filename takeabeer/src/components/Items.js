import React from "react";
import "../css/Items.css";
import { Form } from "react-bootstrap";
const Items = () => {
  return (
    <div className="ItemInfo">
      <Form.Control type="text" placeholder="재료명" className="itemName" />
      <Form.Control
        type="number"
        placeholder="재료의 양"
        className="itemAmount"
        min="1"
      />
      <Form.Select aria-label="Default select example">
        <option>단위</option>
        <option value="1">맥주잔</option>
        <option value="2">소주잔</option>
        <option value="3">개</option>
        <option value="3">조각</option>
      </Form.Select>
    </div>
  );
};

export default Items;

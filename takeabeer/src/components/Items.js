import React, { useState } from "react";
import "../css/Items.css";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const DetailDiv = styled.div`
  div {
    margin-bottom: 2em;
    width: 320px;
  }
`
const Items = (props) => {
  const [itemName, setItemName] = useState('');
  const [ itemCount, setItemCount ] = useState('');
  const [itemUnit, setItemUnit ] = useState('');
  return (
    <DetailDiv>

    {props.countList && props.countList.map((item, i) => (


    <div key={i} className="ItemInfo"
    style={{
      width: "50vh",
      marginBottom: "0.5em",
    }}>
      <Form.Control
      type="text"
      placeholder="재료명"
      className="itemName"
      required
      value={itemName}
      onChange={e => setItemName(e.target.value)}
      />
      <Form.Control
        type="number"
        placeholder="재료의 양"
        className="itemAmount"
        min="1"
        required
        value={itemCount}
        onChange={e=> setItemCount(e.target.value)}
      />
      <Form.Select
      aria-label="Default select example"
      value={itemUnit}
      onChange={e=>setItemUnit(e.target.value)}
      >
        <option>단위</option>
        <option value="1">맥주잔</option>
        <option value="2">소주잔</option>
        <option value="3">개</option>
        <option value="3">조각</option>
      </Form.Select>
    </div>
        ))}
    </DetailDiv>
  );
};

export default Items;

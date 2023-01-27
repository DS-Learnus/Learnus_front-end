import React from "react";
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
  return (
    <DetailDiv>

    {props.countList && props.countList.map((item, i) => (


    <div key={i} className="ItemInfo"
    style={{
      width: "50vh",
      marginBottom: "0.5em",
    }}>
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
        ))}
    </DetailDiv>
  );
};

export default Items;

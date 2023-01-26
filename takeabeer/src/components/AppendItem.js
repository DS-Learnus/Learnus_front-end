import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Axios from "axios"
import { FaPlusCircle } from 'react-icons/fa'
import Items from "./Items"

const CreateListDiv = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const AppendItem = () => {
  const [countList, setCountList] = useState([0])

  const onAddDetailDiv = () => {
    let countArr = [...countList]
    let counter = countArr.slice(-1)[0]
    counter += 1
    countArr.push(counter)	// index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
    setCountList(countArr)
  }

  return (
    <CreateListDiv>
      <Items countList={countList} />
      <button onClick={onAddDetailDiv} className="addBtn"
      style={{
        backgroundColor: "#B9A690",
        border: "none",
        borderRadius: "50%",
        color: "white",
        width: "35px",
        height: "35px",
        cursor: "pointer",
        paddingTop: "-1px",
      }}>
        <FaPlusCircle className="plus"
        style={{

        }}/>
      </button>
    </CreateListDiv>
  )
}
export default AppendItem
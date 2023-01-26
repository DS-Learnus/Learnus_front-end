import { useState } from 'react'
import React from 'react'
import './AddRecipe.css'
import { Form } from 'react-bootstrap'
import { FaPlusCircle } from 'react-icons/fa'
import Items from '../components/Items'
import ImageUpload from '../components/ImageUpload'
import AppendItem from '../components/AppendItem'



const AddRecipe = () => {
  return (
    <div id="addrecipebody">
        <h1 className="listTitle" style={{color: '#B9A690'}}>Add New Recipe</h1>
        <p className="listText">맥주를 활용한 당신만의 주류 제조 레시피를 다른 사용자들과 공유하세요</p>
        <table className="recipeTable">
          <thead>
            <tr>
              <th>레시피 이름을 알려주세요</th>
              <td><Form.Control type="text" placeholder="레시피 이름" /></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>레시피대로 제조했을 경우, <br/>완성된 음료의 사진을 보여주세요</th>
              <td><ImageUpload /></td>
              
            </tr>
            <tr>
              <th>제조 시 준비물을 작성해주세요</th>
              <td>
                <Items />
                <AppendItem />
                <FaPlusCircle />
              </td>
              
            </tr>

            <tr>
              <th>레시피를 설명해주세요</th>
              <td><Form.Control as="textarea" rows={5} /></td>
            </tr>
          </tbody>
        </table>
        <button className="saveBtn">SAVE</button>
    </div>
  )
}
export default AddRecipe


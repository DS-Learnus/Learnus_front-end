import { useState } from 'react';
import React from 'react';
import '../css/AddRecipe.css';
import { Form } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import Items from '../components/Items';
import AppendItem from '../components/AppendItem';
import ImageUpload from '../components/ImageUpload';

const AddRecipe = () => {
  const [name, setName] = useState('');

  const [content, setContent] = useState('');

  return (
    <div id="addrecipebody">
      <h1 className="listTitle" style={{ color: '#B9A690' }}>
        Add New Recipe
      </h1>
      <p className="listText">
        맥주를 활용한 당신만의 주류 제조 레시피를 다른 사용자들과 공유하세요
      </p>
      <table className="recipeTable">
        <thead>
          <tr>
            <th>레시피 이름을 알려주세요</th>
            <td>
              <Form.Control
                type="text"
                placeholder="레시피 이름"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              레시피대로 제조했을 경우, <br />
              완성된 음료의 사진을 보여주세요
            </th>
            <td>
              <ImageUpload />
            </td>
          </tr>
          <tr>
            <th>제조 시 준비물을 작성해주세요</th>
            <td>
              <AppendItem />
            </td>
          </tr>

          <tr>
            <th>레시피를 설명해주세요</th>
            <td>
              <Form.Control
                as="textarea"
                placeholder="음료 제조 레시피를 순서대로 자세히 작성해주세요.
              예)
              1. 수박을 원하는 크기로 썰어 잔에 넣어주세요.
              2. 맥주를 부어주세요.
              3. 완성입니다!"
                rows={5}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="saveBtn">SAVE</button>
    </div>
  );
};
export default AddRecipe;

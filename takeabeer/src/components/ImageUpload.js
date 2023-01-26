import React from "react";
import { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState('');

  const saveImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const deleteImage = () => {
    URL.revokeObjectURL(image);
    setImage("");
  }

  /*
  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.file[0]) 
  }
  function handleApi() {
    const formData = new FormData()
    formData.append('image', image)
    axios.post('url', formData).then((res) => {
      console.log(res)
    })
  }

  onChange={handleImage}
  onClick={handleApi}
  */

  return(
    <div>
      {image && (
        <img
          alt="sample"
          src={image}
          style={{
            margin: "center",
            width: "40vh",
            height: "40vh",
            marginBottom: "1em",
          }}
        />
      )}
      
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        >
          <input
            name="imgUpload"
            type="file"
            accept="image/*"
            onChange={saveImage}
          />

          <button
            style={{
              backgroundColor: "#B9A690",
              border: "none",
              borderRadius: "5%",
              color: "white",
              width: "130px",
              height: "35px",
              cursor: "pointer",
            }}
            onClick={() => deleteImage()}
            >
              사진 숨기기
            </button>
        </div>
          
    </div>

  )
}

export default ImageUpload
import React from "react";
import { useState, useEffect } from "react";
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

  const clearImage = () => {
    setImage(null)
    setImage("")
  }



  const [attachment, setAttachment] = useState() 
  const [file, setFile] = useState('')
  
  const onFileChange = (event) => {
    const {target:{files, value}} = event;
    const theFile = files[0];
    const reader = new FileReader();
    setFile(value)
    reader.onloadend = (finishedEvent) => {
      const { currentTarget: {result}} = finishedEvent
      setAttachment(result)
    }
    reader.readAsDataURL(theFile);
  }
  const onClearAttachment = () => {
    setAttachment(null)
    setFile('')
  };
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
              marginRight: "1em",
            }}
            onClick={() => deleteImage()}
            >
              사진 숨기기
            </button>

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
            onClick={clearImage}
            >
              사진 삭제
            </button>



            <form>
        <input type="file" accept="image/*" onChange={onFileChange} value={file}/>
        <input type="submit" value="제출하기" />
        {attachment && (
          <div>

            <img
          alt="sample"
          src={attachment}
          style={{
            margin: "center",
            width: "40vh",
            height: "40vh",
            marginTop: "1em",
            marginRight: "1em",
          }}
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
              marginRight: "1em",
            }}
            onClick={() => deleteImage()}
            >
              사진 숨기기
            </button>
            
            <button
            onClick={onClearAttachment}
            style={{
              backgroundColor: "#B9A690",
              border: "none",
              borderRadius: "5%",
              color: "white",
              width: "130px",
              height: "35px",
              cursor: "pointer",
            }}
            >사진 삭제</button>
          </div>
        )}
      </form>
        </div>
          

    </div>

  )
}

export default ImageUpload
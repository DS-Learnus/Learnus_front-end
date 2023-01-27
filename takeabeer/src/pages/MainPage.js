import React, { useState } from 'react';
import "../css/main-page.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };
  const closeModal = () => {
      setModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: "#faf7e7" }}>
      <div className="introContainer">
        <img src={require("../img/takeabeer-logo.png")} />
        <div className="introTitle">
          T A K E&nbsp;&nbsp; A&nbsp;&nbsp; B E E R
        </div>
        <div className="introContent">
          우리 웹 페이지는 한국에서 유통되는 맥주를 소개하고 <br /> 사용자의
          주량과 맞는 맥주를 추천해줍니다.
          <br /> 또한, 여러 사용자들과 맥주 레시피를 공유하여 다양한 방법으로
          맥주를 즐길 수 있습니다.
        </div>
      </div>
      <div className="menuContainer">
        <div className="menuTitle">M E N U</div>
        <div className="menuBox">
          <div style={{ fontFamily: "NanumSquareNeoRegular" }}>
            <div className="menuBoxTitle">Let's Beer !</div>
            <div className="menuBtn" style={{ backgroundColor: "#e2d1bd" }}>
              <img
                style={{ width: "250px", marginTop: "30px" }}
                src={require("../img/beer-list.png")}
              ></img>
              <div className="menuBoxContent">
                한국에서 유통하는 여러 가지 <br />
                맥주에 대한 정보를 확인할 수 <br />
                있습니다.
                <br />
                <br />
                <Link className="gotoPage" to={`/beer/list`}>
                  &gt; BeerList 바로 가기
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="menuBoxTitle">Share Beer</div>
            <div className="menuBtn" style={{ backgroundColor: "#f3ebbf" }}>
              <img
                style={{ width: "230px", marginTop: "80px" }}
                src={require("../img/recipe-list.png")}
              ></img>
              <div className="menuBoxContent">
                맥주를 사용한 레시피를 다른 <br />
                사용자들과 나눔으로써 맥주를 <br />
                다양하게 즐길 수 있습니다.
                <br />
                <br />
                <Link className="gotoPage" to={`/recipe/list`}>
                  &gt; Recipe List 바로 가기
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="menuBoxTitle">Recommend</div>
            <div className="menuBtn" style={{ backgroundColor: "#d4debd" }}>
              <img
                style={{ width: "190px", marginTop: "80px" }}
                src={require("../img/recommend.png")}
              ></img>
              <div className="menuBoxContent">
                사용자의 주량에 맞는 맥주와 <br />
                해당 맥주를 사용한 <br />
                주류 레시피를 추천해줍니다.
                <br />
                <br />
                <button onClick={openModal}  className="btnColor">&gt; 주량에 맞는 맥주 추천받기</button>
              </div>
            </div>
          </div>
          <Modal open={modalOpen} close={closeModal} userId="63d3544d21b56c97a5cbde4a"/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

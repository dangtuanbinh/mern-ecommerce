import React from "react";
import logo from "../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { setView } from "../../store/components/postViewChange/postViewChangeSlices";

export default function LNB() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (route: string) => {
    navigate(route);
  };

  const menuList = [
    {
      id: 1,
      title: "공지사항",
      onclick: () => {},
      pathname: "/main",
    },
    {
      id: 2,
      title: "두드림게시판",
      onClick: () => handleTabClick("/post"),
      pathname: "/post",
    },
    {
      id: 3,
      title: "소리마당",
      onclick: () => {},
      pathname: "/sound-field",
    },
    {
      id: 4,
      title: "신문고",
      onClick: () => handleTabClick("/newspaper"),
      pathname: "/newspaper",
    },
    {
      id: 5,
      title: "바로가기",
      onclick: () => {},
      pathname: "/shortcuts",
    },
  ];

  return (
    <div className="lnb-wrapper">
      <div className="lnb-head">
        <img src={logo} />
        <div className="menu-list">
          {menuList.map((m) => (
            <div
              className={` ${
                location.pathname === m.pathname
                  ? "menu-item-active"
                  : "menu-item"
              } `}
              key={m.id}
              onClick={m.onClick}
            >
              <span>{m.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr />
        <div className="lnb-footer">
          <div className="avatar-group">
            <div className="title">
              <div className="title-big">김삼성</div>
              <div className="title-small">분자생물기술그룹</div>
            </div>
            <div className="avatar-img"></div>
          </div>
          <div className="btn-group">
            <div className="btn-item">설정</div>
            <div className="btn-item">로그아웃</div>
          </div>
        </div>
      </div>
    </div>
  );
}

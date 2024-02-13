import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <Link className="link" to="/ABOUT">
          <li className="topListItem">ABOUT</li>
          </Link>
          <Link className="link" to="/CONTACT">
          <li className="topListItem">CONTACT</li>
          </Link>
          <li className="topListItem">
            <Link className="link" to="/write">
              NEW PROJECT
            </Link>
          </li>
          {user && <li className="topListItem">
            <Link className="link" to="/">
              LOGOUT
            </Link>
          </li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://img.freepik.com/premium-vector/white-man-icon-app-web-isolated-white-background-color-icon_599062-393.jpg?w=740"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

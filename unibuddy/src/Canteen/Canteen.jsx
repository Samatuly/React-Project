import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./canteen.css";
import { ZoomOutMap } from "@mui/icons-material";
import Menu from "./Menu/Menu";

function Canteen() {
  return (
    <>
      <div className="canteen">
        <div className="canteen-wrapper">
          <div className="canteen-left">
            <Menu />
          </div>
          <div className="canteen-right">
            <div className="canteen-container">
              <div className="canteen-top">
                <span className="canteen-text">Menu for today!</span>
              </div>
              <hr />
              <div className="canteen-menu">
                <h4>Breakfast</h4>
                <p>Сырники</p>
                <p className="menu-price">500 тг</p>
                <h4>Lunch</h4>
                <p>Курица по-тайский</p>
                <p className="menu-price">1000 тг</p>
                <h5>Гарнир:</h5>
                <p>Рис</p>
                <p className="menu-price">250 тг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Canteen;

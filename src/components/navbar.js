import { 
  ChatBubbleOutlineOutlined, 
  DarkModeOutlined, 
  FullscreenExitOutlined, 
  LanguageOutlined, 
  ListOutlined, 
  NotificationsNoneOutlined, 
  SearchOutlined } 
from "@mui/icons-material";
import "../styles/navbar.scss";
import avatar from "../assets/unnamed.jpg"
import { useContext } from "react";
import { DarkModeContext } from "../hooks/darkModeContext";

const Navbar = ({user}) => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            {user && <img className="avatar" alt="avatar" src={avatar} /> }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

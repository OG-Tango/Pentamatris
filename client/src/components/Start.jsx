import React from "react";
import { StyledStart } from "./styles/StyledStart";
import LogOut from "./logOut.jsx";

const Start = ({ callback }) => (
  <div>
  <StyledStart onClick={callback}>Start Game</StyledStart>
 </div>
)
  

export default Start;
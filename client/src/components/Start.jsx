import React from "react";
import { StyledStart } from "./styles/StyledStart";


const Start = ({ callback }) => (
  <StyledStart onClick={callback}>Start Game</StyledStart>
)

export default Start;
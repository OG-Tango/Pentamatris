import React from "react";
import { StyledStart } from "./styles/StyledStart";


const Start = ({ cb }) => (
  <StyledStart onClick={cb}>Start Game</StyledStart>
)

export default Start;
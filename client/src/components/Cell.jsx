import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { PENTAMINOS } from "../pentaminos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={PENTAMINOS[type].color} />
)

export default Cell;
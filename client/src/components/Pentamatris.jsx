import React from "react";

import { createStage } from "../helpers.js";
import Stage from "./Stage.jsx";
import Display from "./Display.jsx";
import Start from "./Start.jsx";
import NextPiece from "./NextPiece.jsx";
import { StyledPentamatrisWrapper, StyledPentamatris } from "./styles/StyledPentamatris.js";

const Pentamatris = () => {
  
  return (
    <StyledPentamatrisWrapper>
      <StyledPentamatris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <NextPiece />
            <Display text="Score" />
            <Display text="Reviews"/>
          </div>
          <Start />
        </aside>
      </StyledPentamatris>
    </StyledPentamatrisWrapper>
  )
}

export default Pentamatris;
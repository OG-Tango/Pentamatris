import styled from 'styled-components';
import matrix from '../images/matrix.jpg'

export const StyledPentamatrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${matrix}) #000;
  background-size: cover;
  overflow: hidden;
`
//background: url(${bgImg})
export const StyledPentamatris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`
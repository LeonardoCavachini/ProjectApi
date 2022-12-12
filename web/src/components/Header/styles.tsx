import styled from "styled-components"

export const box = styled.header`
  background: #301860;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  

`
export const title = styled.h1`
    margin-top:4.5rem;
    color: #fafafa;
    font: ${({theme}) => theme.font.default};
    font-size: 3.5rem;
    font-weight: bold;
    @media (min-width: 1045px) and (max-width: 1680px) {
      margin-top: 2rem;
  }
`
export const icon = styled.div`
  position: absolute;
  cursor: pointer;
  margin-left: 185vh;
  margin-top: 5vh;
  color: #fafafa;
  @media (max-width: 768px) {
    margin-left: 75%;
    margin-top: 14%;
  }
`


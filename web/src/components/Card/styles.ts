import styled from "styled-components";

export const Card = styled.div`
  background: #5015bd;
  width: 30rem;
  padding: 1.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  margin: 2rem auto;

  &:hover {
    background: #5b125b;
  }

  h1 {
    font-family: ${({ theme }) => theme.font.default};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #fafafa;
  }
  div {
    display: flex;
    justify-content: space-between;
    p {
      font-family: ${({ theme }) => theme.font.default};
      font-size: 1.7rem;
      font-weight: bold;
      color: #cdbdae;
    }
  }
`;
export const Modal = styled.div`
  min-height: 45vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-family: ${({ theme }) => theme.font.default};
    font-size: 2rem;
    font-weight: bold;
    color: #fafafa;
  }
  div {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    @media (min-width: 1045px) and (max-width: 1680px) {
      margin-left: -10%;
      margin-bottom: 3%;
    }
    button {
      font-family: ${({ theme }) => theme.font.default};
      font-size: 2rem;
      font-weight: bold;
      border-radius: 0.5rem;
      color: #fafafa;
      background: #270a33;
      width: 15vh;
      margin-bottom: -3rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
        width: 10vh;
        margin-left: 5%;
      }
      @media (min-width: 1045px) and (max-width: 1680px) {
        margin-left: 8%;
      }
    }
  }
`;

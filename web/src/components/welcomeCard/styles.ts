import styled from "styled-components";

export const CardWelcome = styled.div`
  min-height: 10vh;
  max-width: 30rem;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: ${({ theme }) => theme.font.default};
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #1f1f1f;
    span {
      color: #fafafa;
    }
  }
  button {
    font-family: ${({ theme }) => theme.font.default};
    font-size: 2rem;
    font-weight: bold;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: #fafafa;
    background: #270a33;
    width: 15vh;

    &:hover {
      background: #71286f;
    }
    @media (max-width: 768px) {
      width: 20vh;
    }
    @media (min-width: 1045px) and (max-width: 1680px) {
      width: 25vh;
    }
  }
`;

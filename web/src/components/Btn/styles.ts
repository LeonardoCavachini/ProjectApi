import styled from "styled-components";

export const Btn = styled.button`
  font-family: ${({ theme }) => theme.font.default};
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  color: #fafafa;
  background: #270a33;
  width: 10vh;
  margin-bottom: -3rem;
  @media (max-width: 768px) {
  }
`;

import styled from "styled-components";

export const Title = styled.div`
  padding-left: 46vh;
  font-family: ${({ theme }) => theme.font.default};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #fafafa;
  @media (min-width: 1045px) and (max-width: 1680px) {
    padding-left: 75vh;
  }
  @media (max-width: 768px) {
    margin-left: 10%;
    font-size: 2.1rem;
    padding-left: 0;
  }
`;

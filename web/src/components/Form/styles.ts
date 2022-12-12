import styled from "styled-components";

export const Main = styled.div`
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    min-height: 85vh;
  }
`;
export const Form = styled.form`
  min-height: 30vh;
  width: 25rem;
  padding: 13rem;
  background: #fafafa;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 5rem;
    min-height: 50vh;
  }
  @media (min-width: 1045px) and (max-width: 1680px) {
    padding: 4rem;
  }
`;
export const Input = styled.input`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-family: ${({ theme }) => theme.font.default};
  color: ${({ theme }) => theme.colors.font};
  font-weight: 700;
  outline: none;
  border: none;
  background: transparent;
  margin-top: 0.2rem;
`;
export const InputLabel = styled.label`
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.font.default};
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  height: 4.5rem;
  border: solid;
  border-width: 0.05rem;
  border-color: #ccc;
  border-radius: 8px;
  padding: 0.5rem;

  transition: 0.5s;

  &:hover {
    background: #ccc;
  }
`;
export const Btn = styled.button`
  margin-top: 3.5rem;
  font-family: ${({ theme }) => theme.font.default};
  font-weight: bold;
  border-radius: 0.4rem;
  height: 3.5rem;
  width: 100%;

  &:hover {
    background: #ccc;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Link = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const inputError = styled.p`
  position: absolute;
  font-size: 1.2rem;
  color: red;
  top: 7.5rem;
  font-family: ${({ theme }) => theme.font.default};
`;

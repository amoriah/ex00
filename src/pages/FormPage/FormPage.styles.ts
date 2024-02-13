import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form<{ color: string }>`
  padding: 2em;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
`;

export const Label = styled.label`
  padding: 0.5em 0px 0.3em 0.5em;
  font-size: 18px;

  &:first-child {
    padding-top: 15px;
  }
`;
export const Input = styled.input`
  width: 300px;
  height: 25px;
  padding: 0.3em;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 1.2em;
  color: grey;

  &::placeholder {
  color: rgba(230, 230, 230);
  font-size: 0.8em;
}
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button<{ color: string }>`
  margin-top: 2em;
  border-radius: 10px;
  padding: 1em 2em;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
  font-size: 1.1em;

  &:active {
    filter: brightness(85%);
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  select {
    border: 1px solid #B4B4B4;
    border-radius: 0.5rem;
    outline: none;
    padding-left: 0.5rem;
  }

  & > input:nth-child(2) {
    border: 1px solid #B4B4B4;
    width: 250px;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    margin: 0 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  flex-shrink: 0;
  padding: 0.8rem;
  background: ${ ({disabled}) => (disabled ? '#a6d9f1' : '#46A7D4') };
  border-radius: 0.5rem;
  outline: 0;
  border: 0;
  font-weight: bold;
  font-size: 1.1rem;
  color: #FFFFFF;
  cursor: pointer;
`;

export {
  Form,
  Button
};

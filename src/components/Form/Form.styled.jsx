import styled from "styled-components";

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
`;

export const SearchFormButton = styled.button`
padding: 6px 22px;
font-weight: 500;
font-size: 16px;
line-height: 1.62;
text-align: center;
letter-spacing: 0.03em;
color: #ffffff;
background: #3f51b5;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
}
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 300px;
  background: #ffffff;
  font: inherit;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 22px;
  margin-right: 10px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  &:focus {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

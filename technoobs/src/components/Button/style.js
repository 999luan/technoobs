import styled, { css } from "styled-components";

export const ButtonComponent = styled.button`
  ${(props) => {
    switch (props.color) {
      case "green":
        return css`
          background-color: #23CE6B;
        `;
      case "orange":
        return css`
          background-color: #dc7d49;
        `;
      case "bug":
        return css`
          background-color: #cd853f;
          `;
          default:
            break
        
    }
  }}
  width: 320px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1px;
  color: white;
  font-family: "VT323";
  font-size: 35px;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 4px 4px 0px #000000;
  transition: transform 200ms ease-in-out;
  :hover {
    ${(props) => {
      switch (props.color) {
        case "green":
          return css`
            background-color: #7fff00;
            box-shadow: 0 0 50px #7fff00;
          `;

        case "orange":
          return css`
            background-color: #ffa500;
            box-shadow: 0 0 50px #ffa500;
          `;
        case "bug":
          return css`
            background-color: #cd853f;

          `;
          default:
            break
      }
    }}
    transform: scale(1.03);

    font-size: 50px;
  }
`;

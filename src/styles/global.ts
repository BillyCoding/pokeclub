import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Poppins';
  }
  :root {
    --primary: #5E1F70;
    --secondary: #90659C;
    --description: #BBBBBB;
    --primary-gradient: linear-gradient(
        170deg,
        #5E1F70,
        #000 80%
      );
    --background-color:  linear-gradient(
        170deg,
        #1b1b1b,
        #000 80%
      );
}

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
}

a{
    text-transform: none;
    text-decoration: none;
    &:focus{
      color: none;
    }
  }
`;

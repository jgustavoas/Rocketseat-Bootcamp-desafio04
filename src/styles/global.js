import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f2f2f2;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

header {
  height: 50px;
  background: #7159c1;
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

header .headerContent {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;            
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

header div.rightCorner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 95px;
}

header div.rightCorner span {
  font-size: 20px;
}

header div.rightCorner img {
  margin: 0 5px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  min-height: calc(100vh - 100px);
}

footer{
  background: #7159c1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 13px;
  font-weight: bold;
}
`;

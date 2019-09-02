import styled from 'styled-components';


export const OutModalDiv = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`;

export const ModalDiv= styled.div`
  height: 80%;
  width: 80%;
  position: fixed;
  z-index: 30;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border: 0px;
  border-radius: 12px;
`;

const titleHeight = 40;
export const ModalTitleDiv = styled.div`
  border-bottom: solid 4px black;
  height: ${titleHeight}px;
  line-height: ${titleHeight}px;
  margin-left: 1%;
  margin-right: 1%;
  padding-left: 15px;
  text-align: left;
`;


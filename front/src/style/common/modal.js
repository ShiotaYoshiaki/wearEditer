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
  height: 66%;
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
  display: flex;
  height: ${titleHeight}px;
  line-height: ${titleHeight}px;
  margin-left: 1%;
  margin-right: 1%;
  padding-left: 15px;
  text-align: left;
`;

const Padding = '8px';
export const DivModalContent = styled.div`
  padding-left: ${Padding};
  padding-right: ${Padding};
`;

export const DivModalImagePrev = styled.div`
  position: absolute;
  height: 43%;
  width: 80%;
  line-height: 10;
  border:solid 1px #000000;
`;

export const ImgModalImagePrev = styled.img`
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;



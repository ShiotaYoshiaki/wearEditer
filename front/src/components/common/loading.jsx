import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = styled.div`
  height: 100vh;
  position: relative;
`;

const RoleBall = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #fff;
`;

const Ball = styled.span`
  width: 50%;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  transform-origin: 100% 50%;
  left: 0;
::before{
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
    }
`;

const roleBallAnime = keyframes`
  0% {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
  100% {
    width: 6px;
    height: 6px;
    opacity: .2;
    margin-left: 7px;
  }
`;



const One = styled(Ball)`
  ::before{
    animation: ${roleBallAnime} 1s linear 0s infinite;
  }
`;

const Two = styled(Ball)`
  transform: rotate(45deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.125s infinite;
  }
`;

const Three = styled(Ball)`
  transform: rotate(90deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.25s infinite;
  }
`;

const Four = styled(Ball)`
  transform: rotate(135deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.375s infinite;
  }
`;

const Five = styled(Ball)`
  transform: rotate(180deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.5s infinite;
  }
`;

const Six = styled(Ball)`
  transform: rotate(225deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.625s infinite;
  }
`;

const Seven = styled(Ball)`
  transform: rotate(270deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.75s infinite;
  }
`;

const Eight = styled(Ball)`
  transform: rotate(315deg);
  ::before{
    animation: ${roleBallAnime} 1s linear -0.875s infinite;
  }
`;



export default class LoadingImage extends React.Component {
  render() {
    console.log('==============');  
    return (
      <Loading>
        {/* <roleBallAnime> */}
          <RoleBall>
            <One ></One>
            <Two class="ball ball-2"></Two>
            <Three ></Three>
            <Four ></Four>
            <Five></Five>
            <Six ></Six>
            <Seven ></Seven>
            <Eight ></Eight>
          </RoleBall>
        {/* </roleBallAnime> */}
      </Loading>
    );
  }
}
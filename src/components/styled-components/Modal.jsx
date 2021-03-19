import styled, { keyframes } from 'styled-components';

export const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid black;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 25px;
  position: fixed;
  width: 600px;
  border-radius: 15px;
  border: 1px solid red;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  font-size: 25px;
  margin: 40px 0;
  text-align: left;
`;

export const ButtonList = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 100%;
  
  > button {
    margin-left: 10px;
  }
`;


export const DataListContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: auto;
`;


export const LoaderFrames = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid #3498db;
  width: 45px;
  height: 45px;
  animation: ${LoaderFrames} 2s linear infinite;
`;

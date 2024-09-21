import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 50px;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 7px 10px 7px 20px;
  font-size: 18px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 20px;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #a73ffd;
  color: white;
  border: none;
  padding: 8px 30px;
  margin: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;

  &:hover {
    background-color: #7501d5;
  }
`;

export const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 550px;
  height: 100px;
  margin-top: 10px;
  padding-top: 18px;
  box-shadow: 4px 4px 4px #d8d8d8;
`;

export const Content = styled.div`
  margin-top: 20px;
  font-size: 23px;
  text-align: center;
`;

export const NoResults = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #888;
  text-align: center;
`;

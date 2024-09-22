import styled from 'styled-components';

// 다크 모드 버튼 스타일
export const DarkModeButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

// 월간/주간 보기 버튼 스타일 
export const ViewModeButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: #ffa726;
    color: white;
  }
`;

// 캘린더 컨테이너 스타일
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  color: ${(props) => props.theme.textColor}; 
`;

// 캘린더 스타일
export const StyledCalendar = styled.div`
  .react-calendar {
    width: 100%;
    max-width: 700px;
    background-color: ${(props) => props.theme.bodyBackground}; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 10px;
    color: ${(props) => props.theme.textColor}; 
  }

  .react-calendar__tile--now {
    background-color: #ffa726 !important; 
    color: white !important;
  }

  .react-calendar__tile--active {
    background-color: #f0ad4e !important; 
    color: white !important;
  }

 
  .weekday {
    color: ${(props) => props.theme.textColor}; 
  }


  .saturday {
    color: blue !important; 
  }

 
  .sunday {
    color: red !important; 
  }
`;

// Modal 스타일 추가
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.modalBackground};
  color: ${(props) => props.theme.modalColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// 이벤트 리스트 스타일
export const EventList = styled.div`
  margin-top: 20px;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background-color: ${(props) => props.theme.eventBackground};
    color: ${(props) => props.theme.eventColor};
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
  }
`;

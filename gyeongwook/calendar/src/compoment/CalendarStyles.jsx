import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  font-family: "Lora", serif;
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: 2px solid #3a3a3a;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background-color: #2b2b2b;
  font-family: "Lora", serif;

  // 요일
  .react-calendar__month-view__weekdays {
    font-size: 15px;
    padding-bottom: 18px;
    margin-top: 30px;
    color: #e0e0e0;

    abbr {
      text-decoration: none;
      cursor: default;
    }
  }

  // 각각의 날짜
  .react-calendar__tile {
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 50px;
    justify-content: center;
    background: #3b3b3b;
    border: 1px solid #3a3a3a;
    border-radius: 10px;
    color: #e0e0e0;
    font-family: "Lora", serif;
  }

  // 오늘 날짜
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:focus {
    color: #ffffff;
    abbr {
      border: 1px solid #ff5252;
      background-color: #ff5252;
      border-radius: 10px;
      padding: 2px 13px;
    }
  }

  // 현재 날짜가 선택된 날짜일 때
  .react-calendar__tile--active.react-calendar__tile--now {
    color: #ffffff;
    border: none;
  }

  // 날짜에 접근했을 때
  .react-calendar__tile:enabled:focus {
    background-color: #4a4a4a;
    border: 1px solid #ff5252;
    border-radius: 10px;
  }

  // 선택된 날짜
  .react-calendar__tile--active {
    background-color: #ff5252;
    color: #ffffff;
    border-radius: 10px;
  }

  // 날짜에 마우스를 올렸을 때
  .react-calendar__tile:hover {
    background: #555555;
    border: 1px solid #555555;
    border-radius: 10px;
    cursor: pointer;
  }

  // 상단 네비게이션 비활성화
  .react-calendar__navigation__label {
    pointer-events: none;
    margin-top: 30px;
    color: #e0e0e0;
  }

  // 이웃된 달로 이동하는 버튼
  .react-calendar__navigation button {
    font-size: 18px;
    color: #e0e0e0;
    margin-top: 30px;
    background: none;
  }

  .react-calendar__navigation button:focus,
  .react-calendar__navigation button:active,
  .react-calendar__navigation button:hover {
    background-color: #444444;
  }
`;

export const SelectedWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 8px;
`;

export const Emoji = styled.span`
  font-size: 35px;
`;

export const SelectedTile = styled.div`
  display: flex;
  position: relative;
`;

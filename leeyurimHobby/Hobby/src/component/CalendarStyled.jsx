// src/component/CalendarStyled.jsx
import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  display: flex;
  justify-content: center; /* 캘린더를 가운데로 정렬 */
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: 2px solid #ff99cc; /* 핑크색 테두리 */
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;

  // 요일
  .react-calendar__month-view__weekdays {
    font-size: 15px;
    padding-bottom: 18px;
    margin-top: 30px;
    color: #ff66b2; /* 요일 텍스트 핑크색 */

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
    background: #ffe6f2; /* 핑크 배경 */
    border: 1px solid #ffffff;
    border-radius: 10px;
  }

  // 오늘 날짜
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:focus {
    color: #ffffff;

    abbr {
      border: 1px solid #ff66b2; /* 핑크 테두리 */
      background-color: #ff66b2; /* 핑크색 오늘 표시 */
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
    background-color: #ffe6f2;
    border: 1px solid #ff99cc; /* 선택 시 핑크 테두리 */
    border-radius: 10px;
  }

  // 선택된 날짜
  .react-calendar__tile--active {
    background-color: #ffe6f2;
    border: 1px solid #ff99cc; /* 선택된 날짜 테두리 */
    border-radius: 10px;
    color: #ff66b2;
  }

  // 날짜에 마우스를 올렸을 때
  .react-calendar__tile:hover {
    background: #ffccdd;
    border: 1px solid #ffccdd; /* 핑크 마우스 오버 */
    border-radius: 10px;
    cursor: pointer;
  }

  // 상단 네비게이션 비활성화
  .react-calendar__navigation__label {
    pointer-events: none;
    margin-top: 30px;
    color: #ff66b2; /* 네비게이션 텍스트 핑크색 */
  }

  // 이웃된 달로 이동하는 버튼
  .react-calendar__navigation button {
    font-size: 18px;
    color: #ff66b2; /* 버튼 핑크색 */
    margin-top: 30px;
  }

  .react-calendar__navigation button:focus,
  .react-calendar__navigation button:active,
  .react-calendar__navigation button:hover {
    background-color: #ffe6f2; /* 버튼 hover 핑크 배경 */
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
  color: #ff66b2; /* 핑크색 하트 */
`;

export const SelectedTile = styled.div`
  display: flex;
  position: relative;
`;

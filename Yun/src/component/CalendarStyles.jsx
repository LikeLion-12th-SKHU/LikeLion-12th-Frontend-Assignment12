//CalendarStyles.jsx
import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
`;

export const StyledCalendar = styled(Calendar)`
  width: 30rem;
  border: 2px solid #b4b4b4;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;

  // 요일
  .react-calendar__month-view__weekdays {
    font-size: 15px;
    padding-bottom: 18px;
    margin-top: 30px;

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
    background: #fff;
    border: 1px solid #ffffff;
    border-radius: 10px;
  }

  // 오늘 날짜
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:focus {
    color: #ffffff;

    abbr {
      border: 1px solid #000000;
      background-color: #000000;
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
    background-color: #ffffff;
    border: 1px solid #7d7d7db4;
    border-radius: 10px;
  }

  // 선택된 날짜
  .react-calendar__tile--active {
    background-color: #ffffff;
    border: 1px solid #7d7d7db4;
    border-radius: 10px;
    color: #000000;
  }

  // 날짜에 마우스를 올렸을 때
  .react-calendar__tile:hover {
    background: #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    cursor: pointer;
  }

  // 상단 네비게이션 비활성화
  .react-calendar__navigation__label {
    pointer-events: none;
    margin-top: 30px;
  }

  // 이웃된 달로 이동하는 버튼
  .react-calendar__navigation button {
    font-size: 18px;
    color: #000000;
    margin-top: 30px;
  }

  .react-calendar__navigation button:focus,
  .react-calendar__navigation button:active,
  .react-calendar__navigation button:hover {
    background-color: #ffffff;
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

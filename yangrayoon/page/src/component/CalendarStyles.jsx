import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: auto;
  background-color: #f0f9f0;
  border-radius: 15px;
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: 2px solid #a4d4a4;
  border-radius: 15px;
  padding: 10px;
  background-color: #ffffff;

  // 요일
  .react-calendar__month-view__weekdays {
    font-size: 13px;
    padding-bottom: 10px;
    margin-top: 20px;
    color: #73c472;

    abbr {
      text-decoration: none;
      cursor: default;
    }
  }

  // 각각의 날짜
  .react-calendar__tile {
    font-size: 13px;
    height: 60px;
    width: 60px;
    justify-content: center;
    background: #f5faf5;
    border: 1px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      background: #d9f2d9;
      cursor: pointer;
    }
  }

  // 오늘 날짜
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:focus {
    color: #ffffff;
    font-weight: bold;

    abbr {
      background-color: #63ac67;
      border-radius: 50%;
      padding: 10px;
    }
  }

  // 선택된 날짜
  .react-calendar__tile--active {
    background-color: #63ac67;
    color: #ffffff;
    border: none;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  // 상단 네비게이션 비활성화
  .react-calendar__navigation__label {
    pointer-events: none;
    margin-top: 20px;
    font-size: 16px;
    color: #63ac67;
  }

  // 이웃된 달로 이동하는 버튼
  .react-calendar__navigation button {
    font-size: 20px;
    color: #63ac67;
    border: none;

    &:hover {
      color: #4a924a;
    }
  }

  .react-calendar__navigation button:focus,
  .react-calendar__navigation button:active,
  .react-calendar__navigation button:hover {
    background-color: #fff;
  }
`;

export const SelectedWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 8px;
`;

export const Emoji = styled.span`
  text-align: center;
  font-size: 15px;
`;

export const SelectedTile = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

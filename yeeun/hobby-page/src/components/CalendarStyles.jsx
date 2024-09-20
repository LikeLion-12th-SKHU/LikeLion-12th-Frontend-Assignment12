import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  background-color: #f4f8fc;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  padding: 10px;

  // 요일
  .react-calendar__month-view__weekdays {
    font-size: 15px;
    color: #4a4a4a;
    padding-bottom: 18px;
    margin-top: 20px;

    abbr {
      text-decoration: none;
      cursor: default;
    }
  }

  // 각각의 날짜
  .react-calendar__tile {
    font-size: 16px;
    padding: 20px;
    justify-content: center;
    background: #ffffff;
    border: none;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #e1efff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  // 오늘 날짜
  .react-calendar__tile--now {
    background-color: #7db5f4;
    color: #ffffff;
    border-radius: 12px;

    abbr {
      padding: 5px 12px;
      border-radius: 10px;
    }
  }

  // 선택된 날짜
  .react-calendar__tile--active {
    background-color: #d1e9ff;
    color: #000000;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  // 날짜에 마우스를 올렸을 때
  .react-calendar__tile:hover {
    background: #e1efff;
  }

  // 상단 네비게이션 버튼
  .react-calendar__navigation button {
    font-size: 18px;
    color: #4a4a4a;
    margin-top: 20px;
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
  top: 12px;
  right: 8px;
`;

export const Emoji = styled.span`
  font-size: 30px;
`;

export const SelectedTile = styled.div`
  display: flex;
  position: relative;
`;

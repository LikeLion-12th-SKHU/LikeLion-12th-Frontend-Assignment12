import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: 3px solid #000000;
  border-radius: 15px;
  padding: 20px;
  background-color: #fff;

  .react-calendar__month-view__weekdays {
    font-size: 1.2rem;
    padding-bottom: 20px;
    color: #333;
    abbr {
      text-decoration: none;
      cursor: default;
    }
  }

  .react-calendar__tile {
    font-size: 1.2rem;
    padding: 15px 0;
    justify-content: center;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: background-color 0.3s, transform 0.3s;
    position: relative;
  }

  .react-calendar__tile--now {
    background: #f11ece;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
  }

  .react-calendar__tile--active {
    background-color: transparent;
    color: #000;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    font-weight: bold;
  }

  .react-calendar__tile:enabled:focus {
    background-color: #000;
    outline: none;
  }

  .react-calendar__tile:hover {
    background-color: #000000;
    border: 1px solid #dee2e6;
    cursor: pointer;
  }

  .react-calendar__navigation button {
    font-size: 1.75rem;
    color: #000000;
    background: none;
    border: none;
    cursor: pointer;
  }

  .react-calendar__navigation__label {
    font-size: 1.5rem;
    color: #292121;
    font-weight: bold;
  }

  /* 선택된 날짜의 스타일 */
  .selected-tile {
    background-color: #bababa;
    color: white;
    border-radius: 10px;
  }
`;

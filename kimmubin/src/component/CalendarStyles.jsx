import styled from 'styled-components';
import Calendar from 'react-calendar';

export const StyledCalendarWrapper = styled.div`
    padding-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    max-width: 1000px;
    background-image: linear-gradient(
        to right,
        rgb(207, 145, 75),
        rgb(200, 150, 110)
    );
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
`;
export const Calendar_title = styled.div`
    font-size: 50px;
    margin-bottom: 40px;
    font-weight: bold;
    color: #000000;
`;
export const StyledCalendar = styled(Calendar)`
    width: 100%;
    border: none;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    padding: 15px;
    background: #fdfcfb;

    // 요일
    .react-calendar__month-view__weekdays {
        font-size: 16px;
        padding-bottom: 18px;
        margin-top: 30px;
        font-weight: bold;
        color: #5c5c5c;

        abbr {
            text-decoration: none;
            cursor: default;
            color: #8a8a8a;
        }
    }

    // 각각의 날짜
    .react-calendar__tile {
        font-size: 15px;
        padding: 10px 0;
        justify-content: center;
        background: #fefefe;
        border: 1px solid #e6e6e6;
        border-radius: 12px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #ffefd5; // 마우스 오버 시 부드러운 베이지 색상
        }
    }

    // 오늘 날짜
    .react-calendar__tile--now,
    .react-calendar__tile--now:enabled:focus {
        color: #ffffff;

        abbr {
            background-color: #ff8c00;
            color: #ffffff;
            border-radius: 50%;
            padding: 10px;
        }
    }

    // 선택된 날짜
    .react-calendar__tile--active {
        background-color: #ffe4b5;
        border: 1px solid #ffa07a;
        color: #000;
    }

    // 선택된 오늘 날짜
    .react-calendar__tile--active.react-calendar__tile--now {
        background-color: #ff8c00;
        border: none;
        color: #ffffff;
    }

    // 상단 네비게이션 비활성화
    .react-calendar__navigation__label {
        pointer-events: none;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
        color: #5c5c5c;
    }

    // 이웃된 달로 이동하는 버튼
    .react-calendar__navigation button {
        font-size: 30px;
        color: #5c5c5c;
        margin-top: 13px;
        background: none;
        border: none;
    }

    .react-calendar__navigation button:focus,
    .react-calendar__navigation button:active,
    .react-calendar__navigation button:hover {
        background-color: transparent;
        color: #ff8c00;
    }
`;

export const SelectedWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 6px;
    height: 40px;
`;

export const Emoji = styled.span`
    font-size: 35px;
    height: 50px;
`;

export const SelectedTile = styled.div`
    display: flex;
    position: relative;
    height: 50px;
`;

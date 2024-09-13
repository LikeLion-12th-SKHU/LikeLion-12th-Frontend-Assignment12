import styled from "styled-components";
import Calendar from "react-calendar";

// 전체 캘린더 감싸는 컨테이너 스타일
export const StyledCalendarWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: linear-gradient(135deg, #ff69b4, #00bfff); // 네온 그라데이션 배경
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25); // 깊이감 추가
`;

// 캘린더 스타일
export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px); // 유리 같은 효과

  .react-calendar__month-view__weekdays {
    font-size: 16px;
    font-weight: bold;
    color: #00ffcc; // 네온 그린 텍스트
    padding-bottom: 18px;
    margin-top: 20px;

    abbr {
      text-decoration: none;
      cursor: default;
    }
  }

  .react-calendar__tile {
    font-size: 18px;
    color: #fff;
    padding: 20px;
    justify-content: center;
    background: #333; // 어두운 배경
    border: 1px solid #00ffcc; // 네온 그린 테두리
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(
        135deg,
        #ff69b4,
        #00bfff
      ); // 네온 그라데이션 호버
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
  }

  .react-calendar__tile--now {
    background: linear-gradient(135deg, #ff69b4, #00bfff);
    color: #fff;

    abbr {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .react-calendar__tile--active {
    background-color: #ff69b4; // 핑크 메탈릭 효과
    color: #fff;
    border: 2px solid #00ffcc;
  }

  .react-calendar__navigation button {
    font-size: 20px;
    color: #00ffcc;
    background: none;
    border: none;
    transition: transform 0.3s ease;

    &:hover {
      color: #ff69b4;
      transform: scale(1.2); // 커지면서 네온 효과
    }
  }
`;

// 선택된 날짜에 표시될 이모지와 스타일
export const SelectedWrapper = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  top: 15px;
  right: 8px;
`;

export const Emoji = styled.span`
  font-size: 35px;
  filter: drop-shadow(0px 0px 5px #ff69b4); // 네온 그림자
`;

export const SelectedTile = styled.div`
  display: flex;
  position: relative;
`;

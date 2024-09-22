import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Modal, EventList, DarkModeButton, ViewModeButton } from './CalendarStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

const MyApp = () => {
  const [value, onChange] = useState(new Date());
  const [events, setEvents] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [rangeValue, setRangeValue] = useState(null); 
  const [view, setView] = useState('month'); 

  // 주간 보기에서 해당 날짜의 주 시작일과 끝일을 계산
  const handleViewChange = (newView) => {
    if (newView === 'week') {
      const startOfWeek = new Date(value);
      startOfWeek.setDate(value.getDate() - value.getDay()); 
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); 
      setRangeValue([startOfWeek, endOfWeek]); 
    } else {
      setView('month');
      setRangeValue(null); 
    }
  };

  const getTileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay(); 
      if (day === 0) {
        return 'sunday'; 
      } else if (day === 6) {
        return 'saturday'; 
      } else {
        return 'weekday'; 
      }
    }
  };

  const handleDayClick = (value) => {
    setSelectedDate(value);
    setShowModal(true); 
  };

  const handleEventAdd = (event) => {
    event.preventDefault();
    const eventDescription = event.target.elements.event.value;
    setEvents({
      ...events,
      [selectedDate.toDateString()]: eventDescription,
    });
    setShowModal(false); 
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div>
        {/* 다크 모드 버튼 */}
        <DarkModeButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '라이트 모드' : '다크 모드'}
        </DarkModeButton>

        {/* 월간/주간 보기 버튼 */}
        <ViewModeButton onClick={() => handleViewChange('month')}>월간 보기</ViewModeButton>
        <ViewModeButton onClick={() => handleViewChange('week')}>주간 보기</ViewModeButton>

        <Calendar
          onChange={onChange}
          value={rangeValue || value} 
          view={view}
          selectRange={!!rangeValue} 
          tileClassName={getTileClassName} 
          onClickDay={handleDayClick}
        />

        {showModal && (
          <Modal>
            <h2>{selectedDate?.toDateString()}에 이벤트 추가</h2>
            <form onSubmit={handleEventAdd}>
              <input name="event" placeholder="이벤트 입력" />
              <button type="submit">추가</button>
            </form>
            <button onClick={() => setShowModal(false)}>닫기</button>
          </Modal>
        )}

        <EventList>
          <h3>이벤트 목록</h3>
          <ul>
            {Object.entries(events).map(([date, description], index) => (
              <li key={index}>
                {date}: {description}
              </li>
            ))}
          </ul>
        </EventList>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;

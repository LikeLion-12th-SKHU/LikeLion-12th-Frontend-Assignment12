import React from 'react';
import MyApp from './component/Calendar';
import { CalendarContainer, StyledCalendar } from './component/CalendarStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './component/themes'; 
import { useState } from 'react'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CalendarContainer>
        <h1>멋사 캘린더 과제</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '캘린더 라이트 모드' : '캘린더 다크 모드'}
        </button>
        <StyledCalendar>
          <MyApp />
        </StyledCalendar>
      </CalendarContainer>
    </ThemeProvider>
  );
}

export default App;

// src/component/Calendar.jsx
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  StyledCalendarWrapper,
  StyledCalendar,
  SelectedWrapper,
  Emoji,
  SelectedTile,
} from "./CalendarStyled";
import moment from "moment";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDaySelected = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");

    if (selectedDates.includes(formattedDate)) {
      setSelectedDates(selectedDates.filter((d) => d !== formattedDate));
    } else {
      setSelectedDates([...selectedDates, formattedDate]);
    }
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={value}
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("D")}
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
        tileContent={({ date }) => {
          const formattedDate = moment(date).format("YYYY-MM-DD");
          return (
            <SelectedTile>
              {selectedDates.includes(formattedDate) && (
                <SelectedWrapper>
                  <Emoji role="img" aria-label="heart">
                    &#128147; {/* 핑크색 하트 이모지 */}
                  </Emoji>
                </SelectedWrapper>
              )}
            </SelectedTile>
          );
        }}
        onClickDay={handleDaySelected}
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;

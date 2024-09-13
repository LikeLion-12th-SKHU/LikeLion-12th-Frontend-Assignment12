import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  StyledCalendarWrapper,
  StyledCalendar,
  SelectedWrapper,
  Emoji,
  SelectedTile,
} from "./CalendarStyles";
import moment from "moment";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const tileDisabled = ({ date }) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const tileContent = ({ date, view }) => {
    return date.getDate() === 16 ? <p>추석</p> : null;
  };

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
        formatShortWeekday={(locale, date) => moment(date).format("ddd")}
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
        tileContent={({ date }) => {
          const formattedDate = moment(date).format("YYYY-MM-DD");
          return (
            <SelectedTile>
              {selectedDates.includes(formattedDate) && (
                <SelectedWrapper>
                  <Emoji role="img" aria-label="celebration">
                    &#127775;
                  </Emoji>
                </SelectedWrapper>
              )}
            </SelectedTile>
          );
        }}
        onClickDay={handleDaySelected}
        tileDisabled={tileDisabled}
        locale="en-US"
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;

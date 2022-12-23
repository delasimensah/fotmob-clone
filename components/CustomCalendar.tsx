import { FC } from "react";

import { Calendar } from "@mantine/dates";
import { createStyles } from "@mantine/core";

type CalendarProps = {
  date: Date;
  handleChange: (date: Date) => void;
};

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.dark[6]} !important`,
  },

  selected: {
    backgroundColor: `${theme.colors.dark[6]} !important`,
    color: `${theme.white} !important`,
    borderRadius: "100%",

    "&:hover": {
      backgroundColor: `${theme.colors.dark[6]} !important`,
      color: `${theme.white} !important`,
    },
  },
}));

const CustomCalendar: FC<CalendarProps> = ({ date: curDate, handleChange }) => {
  const { classes, cx } = useStyles();

  return (
    <Calendar
      value={curDate}
      onChange={handleChange}
      allowLevelChange={false}
      dayClassName={(_, modifiers) =>
        cx({
          [classes.outside]: modifiers.outside,
          [classes.weekend]: modifiers.weekend,
          [classes.selected]: modifiers.selected,
        })
      }
      classNames={{
        calendarHeaderLevel: "font-nunito font-semibold text-base",
        calendarHeaderControl: "hover:rounded-full",
        weekday: "font-nunito",
        day: "hover:rounded-full font-nunito",
      }}
      hideWeekdays={false}
    />
  );
};

export default CustomCalendar;

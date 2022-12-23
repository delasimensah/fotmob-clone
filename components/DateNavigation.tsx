import { FC, useState } from "react";
import moment from "moment";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCaretDown,
} from "@tabler/icons";

import { Popover, Indicator, useMantineTheme } from "@mantine/core";

import { Calendar } from "@mantine/dates";

import { IconButton, Heading } from ".";

type DateNavProps = {
  date: Date;
  getPreviousDay: () => void;
  getNextDay: () => void;
  setDate: (date: Date) => void;
};

const DateNavigation: FC<DateNavProps> = ({
  date,
  getPreviousDay,
  getNextDay,
  setDate,
}) => {
  // const [value, setValue] = useState<Date>(date);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const today = new Date().getDate();
  const tomorrow = today + 1;
  const yesterday = today - 1;
  const currentDate = date.getDate();

  let dateFormat = moment(date).format("dddd, MMMM D");

  if (
    today === currentDate ||
    tomorrow === currentDate ||
    yesterday === currentDate
  ) {
    dateFormat = moment(date).calendar(null, {
      lastDay: "[Yesterday]",
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
    });
  }

  return (
    <div className="h-[80px] border-b border-slate-100 px-[20px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <IconButton handleClick={getPreviousDay}>
          <IconChevronLeft size={18} className="text-black" />
        </IconButton>

        <Popover
          position="bottom"
          classNames={{
            dropdown: "border-transparent rounded-2xl",
          }}
          shadow="xl"
          opened={opened}
          onChange={setOpened}
        >
          <Popover.Target>
            <span
              className="flex items-center cursor-pointer group "
              onClick={() => setOpened((o) => !o)}
            >
              <Heading
                text={dateFormat}
                className="group-hover:text-slate-600"
              />

              <IconCaretDown className="group-hover:text-slate-600" />
            </span>
          </Popover.Target>
          <Popover.Dropdown>
            <Calendar
              value={date}
              onChange={(value) => {
                setDate(value as Date);
                setOpened((o) => !o);
              }}
              allowLevelChange={false}
            />
          </Popover.Dropdown>
        </Popover>

        <IconButton handleClick={getNextDay}>
          <IconChevronRight size={18} className="text-black" />
        </IconButton>
      </div>
    </div>
  );
};

export default DateNavigation;

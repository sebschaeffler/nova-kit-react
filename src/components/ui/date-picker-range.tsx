import React from "react";
import {
  Button,
  Calendar,
  DEFAULT_DATE_FORMAT,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components";
import { cn } from "@/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { PropsRange } from "react-day-picker";

export type DatePickerRangeProps = Omit<PropsRange, "mode"> & {
  placeholder?: string;
  dateFormat?: string;
  buttonProps?: React.ComponentProps<typeof Button>;
};

const DatePickerRange = ({
                           placeholder = "Pick a date",
                           dateFormat = DEFAULT_DATE_FORMAT,
                           ...props
                         }: DatePickerRangeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !props.selected && "text-muted-foreground",
          )}
          {...props.buttonProps}
        >
          {props.selected?.from && props.selected?.to ? (
            format(props.selected.from, dateFormat) +
            " - " +
            format(props.selected.to, dateFormat)
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          className="rounded-lg border shadow-sm"
          captionLayout="dropdown"
          {...props} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerRange;

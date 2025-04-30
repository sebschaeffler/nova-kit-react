import React from "react";
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/components";
import { cn } from "@/utils";
import { DayPickerRangeProps } from "react-day-picker";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export type DatePickerRangeProps = Omit<DayPickerRangeProps, "mode"> & {
  placeholder?: string;
  dateFormat?: string;
};

const DatePickerRange = ({
  placeholder = "Pick a date",
  dateFormat = "dd MMM YYY",
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
        <Calendar mode="range" {...props} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerRange;

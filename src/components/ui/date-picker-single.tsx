import React from "react";
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/components";
import { cn } from "@/utils";
import { format } from "date-fns";
import { DayPickerSingleProps } from "react-day-picker";
import { CalendarIcon } from "lucide-react";

export type DatePickerSingleProps = Omit<DayPickerSingleProps, "mode"> & {
  placeholder?: string;
  dateFormat?: string;
  buttonProps?: React.ComponentProps<typeof Button>;
};

const DatePickerSingle = ({
                            placeholder = "Pick a date",
                            dateFormat = "dd MMM YYY",
                            ...props
                          }: DatePickerSingleProps) => {
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
          {props.selected ? (
            format(props.selected, dateFormat)
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" {...props} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerSingle;

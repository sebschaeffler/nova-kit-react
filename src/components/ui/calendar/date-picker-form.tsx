import React from "react";
import { Calendar, CalendarProps } from "@nova/components/ui/calendar/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nova/components/ui/popover/popover";
import { FormControl } from "@nova/components/ui/form/form";
import { Button } from "@nova/components/ui/button/button";
import { cn } from "@nova/utils/style-utils";
import { CalendarRange } from "lucide-react";
import { addDays, format, subDays } from "date-fns";
import { ControllerRenderProps } from "react-hook-form";
import {
  DEFAULT_INPUT_BORDER,
  DEFAULT_READ_ONLY_INPUT,
} from "@nova/components/ui/constants";
import { DEFAULT_DATE_FORMAT } from "@nova/components/ui/calendar/constants";
import { DateRange, DaySelectionMode, DropdownProps } from "react-day-picker";
import { Input } from "@nova/components/ui/input/input";

type Props = CalendarProps &
  DropdownProps & {
  field: Partial<ControllerRenderProps>;
  mode?: DaySelectionMode;
  fieldClassName?: string;
  dateFormat?: string;
  placeholder?: string;
  isFormDisabled?: boolean;
};

const DEFAULT_PLACEHOLDER = "Pick a date";
const DEFAULT_PLACEHOLDER_RANGE = "Pick a date range";

const DatePickerForm: React.FC<Props> = ({
                                           field,
                                           mode = "single",
                                           fieldClassName,
                                           dateFormat = DEFAULT_DATE_FORMAT,
                                           placeholder,
                                           isFormDisabled = true,
                                           ...props
                                         }) => {
  const [rangeDate, setRangeDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: subDays(new Date(), 31),
  });

  // Guard - throw error if mode is not supported
  if (mode !== "range" && mode !== "single") {
    throw new Error("Invalid mode - not supported");
  }

  const valueToRender =
    mode === "range"
      ? rangeDate?.from
        ? rangeDate.to
          ? `${format(rangeDate.from, dateFormat)} - ${format(rangeDate.to, dateFormat)}`
          : format(rangeDate.from, dateFormat)
        : (placeholder ?? DEFAULT_PLACEHOLDER_RANGE)
      : field.value
        ? format(field.value, dateFormat)
        : (placeholder ?? DEFAULT_PLACEHOLDER);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          {isFormDisabled ? (
            <Input value={valueToRender} readOnly className="text-left" />
          ) : (
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] pl-3 text-left font-normal",
                !field.value && "text-muted-foreground",
                DEFAULT_INPUT_BORDER,
                props.disabled && DEFAULT_READ_ONLY_INPUT,
                fieldClassName,
              )}
              disabled={isFormDisabled}
              aria-readonly={isFormDisabled}
            >
              {valueToRender}
              <CalendarRange size={20} className="ml-auto opacity-80" />
            </Button>
          )}
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {mode === "range" ? (
          <Calendar
            mode="range"
            selected={rangeDate}
            // @ts-ignore
            onSelect={setRangeDate}
            disabled={field.disabled}
            defaultMonth={mode === "range" ? rangeDate?.from : undefined}
            initialFocus
            {...props}
          />
        ) : (
          <Calendar
            mode="single"
            selected={field.value}
            // @ts-ignore
            onSelect={field.onChange}
            disabled={field.disabled}
            initialFocus
            {...props}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerForm;

export { addDays, subDays };

import { FC, useEffect, useState } from "react";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import { CalendarRange } from "lucide-react";
import { addDays, format, subDays } from "date-fns";
import { ControllerRenderProps } from "react-hook-form";
import { DEFAULT_INPUT_BORDER } from "@/components/ui/constants";
import { DEFAULT_DATE_FORMAT } from "@/components/ui/calendar-constants";
import {
  DateRange,
  DaySelectionMode,
  DropdownProps,
  SelectRangeEventHandler,
} from "react-day-picker";
import { Input } from "@/components/ui/input";

type Props = Partial<CalendarProps> &
  Partial<DropdownProps> & {
  field: Partial<ControllerRenderProps>;
  mode?: DaySelectionMode;
  fieldClassName?: string;
  dateFormat?: string;
  placeholder?: string;
  isFormDisabled?: boolean;
};

const DEFAULT_PLACEHOLDER = "Pick a date";
const DEFAULT_PLACEHOLDER_RANGE = "Pick a date range";

/**
 * IMPORTANT CONSIDERATION:
 *
 * This component has been tailored so that when a date range is selected, clicking on
 * a new date will reset the current selection.
 * As a side effect, this prevents the component from being programmatically reset.
 *
 * Consider using DatePickerRange instead if you need to reset the selection.
 *
 * @param field
 * @param mode
 * @param fieldClassName
 * @param dateFormat
 * @param placeholder
 * @param isFormDisabled
 * @param props
 * @constructor
 */

/**
 * @deprecated This component is deprecated for range selection.
 * Please use DatePickerRange instead.
 */

export const DatePickerForm: FC<Props> = ({
                                            field,
                                            mode = "single",
                                            fieldClassName,
                                            dateFormat = DEFAULT_DATE_FORMAT,
                                            placeholder,
                                            isFormDisabled = true,
                                            ...props
                                          }) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: field.value?.from,
    to: field.value?.to,
  });

  const handleSelect: SelectRangeEventHandler = (nextRange, selectedDay) => {
    setDateRange((range) => {
      if (range?.from && range?.to) return { from: selectedDay };
      return nextRange as DateRange;
    });
  };

  useEffect(() => {
    if (dateRange?.from) {
      field?.onChange?.(dateRange);
    }
  }, [dateRange]); // eslint-disable-line react-hooks/exhaustive-deps

  // Guard - throw error if mode is not supported
  if (mode !== "range" && mode !== "single") {
    throw new Error("Invalid mode - not supported");
  }

  const valueToRender =
    mode === "range"
      ? dateRange?.from || dateRange?.to
        ? (dateRange?.from ? format(dateRange.from, dateFormat) : "Select start date") +
        " - " +
        (dateRange?.to ? format(dateRange.to, dateFormat) : "Select end date")
        : DEFAULT_PLACEHOLDER_RANGE
      : field.value
        ? format(field.value, dateFormat)
        : (placeholder ?? DEFAULT_PLACEHOLDER);

  return (
    <Popover>
      <PopoverTrigger asChild>
        {isFormDisabled ? (
          <Input value={valueToRender} readOnly className="text-left" />
        ) : (
          <Button
            variant={"outline"}
            className={cn(
              "flex w-[240px] justify-between pl-3 text-left font-normal",
              !field.value && "text-muted-foreground",
              DEFAULT_INPUT_BORDER,
              fieldClassName,
            )}
            disabled={isFormDisabled}
            aria-readonly={isFormDisabled}
          >
            {valueToRender}
            <CalendarRange size={20} className="ml-2 opacity-80" />
          </Button>
        )}
      </PopoverTrigger>
      {!isFormDisabled && (
        <PopoverContent className="w-auto p-0" align="start">
          {mode === "range" ? (
            <Calendar
              mode="range"
              selected={dateRange}
              // @ts-ignore for some reasons TSC does not resolve this correctly
              onSelect={handleSelect}
              disabled={field.disabled}
              defaultMonth={dateRange?.from}
              initialFocus
              {...props}
            />
          ) : (
            <Calendar
              mode="single"
              selected={field.value}
              // @ts-ignore for some reasons TSC does not resolve this correctly
              onSelect={field.onChange}
              disabled={field.disabled}
              initialFocus
              {...props}
            />
          )}
        </PopoverContent>
      )}
    </Popover>
  );
};

export { addDays, subDays };
export type { DateRange };

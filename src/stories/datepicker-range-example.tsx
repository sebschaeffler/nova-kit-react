"use client";

import { Label } from "@/components";
import React from "react";
import DatePickerRange from "../components/ui/date-picker-range";
import { DateRange } from "react-day-picker";
import { Button } from "../components";

export function DatePickerRangeExample() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(undefined);

  return (
    <div className="flex flex-col space-y-4 pb-4">
      <Label>Example of date range selection with custom placeholder and date
        format:</Label>
      <DatePickerRange
        selected={dateRange}
        onSelect={setDateRange}
        placeholder="Choose a range of days between 2 dates"
        dateFormat="dd MMM yy"
        buttonProps={{ className: "w-[500px]" }} />
      <Button
        className="w-fit"
        onClick={() => setDateRange(undefined)}>
        Reset date
      </Button>
    </div>
  );
}

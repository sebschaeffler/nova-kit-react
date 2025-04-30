"use client";

import { Label } from "@/components";
import DatePickerSingle from "../components/ui/date-picker-single";
import React from "react";
import { Button } from "../components";

export function DatePickerSingleExample() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col space-y-4 pb-4">
      <Label>Example of single day selection with custom placeholder and date
        format:</Label>
      <DatePickerSingle
        selected={date}
        onSelect={setDate}
        placeholder="Choose a day"
        dateFormat="dd MMM yy" />
      <Button
        className="w-fit"
        onClick={() => setDate(undefined)}>
        Reset date
      </Button>
    </div>
  );
}

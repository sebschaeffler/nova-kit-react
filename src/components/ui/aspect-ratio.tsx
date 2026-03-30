"use client"

import * as React from "react"

import { cn } from "@/utils/index"

function AspectRatio({
  ratio = 1,
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative w-full", className)}
      style={{ ...style, aspectRatio: String(ratio) }}
      {...props}
    />
  )
}

export { AspectRatio }

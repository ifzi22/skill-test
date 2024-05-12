"use client";
import { cn } from "@/helpers/utils";
import { OptionsType } from "@/types/form.types";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  containerClass?: string;
  options: OptionsType[];
  selected?: string;
}

export default function Select({
  name,
  label,
  className,
  containerClass,
  options,
  selected,
  ...rest
}: SelectProps) {
  return (
    <div className={cn("mb-5", containerClass)}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          className
        )}
        {...rest}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value} defaultValue={selected}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

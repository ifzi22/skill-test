"use client";
import { cn } from "@/helpers/utils";
import { OptionsType } from "@/types/form.types";
import React, { useId } from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  options: OptionsType[];
  defaultCheck?: string;
}

export default function Radio({
  name,
  label,
  className,
  containerClass,
  options,
  defaultCheck,
  ...rest
}: RadioProps) {
  const id = useId();

  return (
    <div className={cn("mb-5", containerClass)}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="">
        {options.map((opt, i) => (
          <div key={i} className="flex items-center mb-4">
            <input
              id={`${opt.value}-${i}-${id}`}
              type="radio"
              name={name}
              value={opt.value}
              className={cn(
                "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300",
                className
              )}
              defaultChecked={defaultCheck === opt.value}
              {...rest}
            />
            <label
              htmlFor={`${opt.value}-${i}-${id}`}
              className="block ms-2  text-sm font-medium text-gray-900"
            >
              {opt.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

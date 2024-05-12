"use client";
import { cn } from "@/helpers/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
}

export default function Input({
  name,
  label,
  className,
  containerClass,
  ...rest
}: InputProps) {
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
      <input
        name={name}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          className
        )}
        {...rest}
      />
    </div>
  );
}

"use client";

import { cn } from "@/helpers/utils";
import { useToastStore } from "@/store/toast.store";
import Image from "next/image";
import { useEffect } from "react";

export default function Toast() {
  const { isShow, type, title, reset, timeout } = useToastStore(
    (store) => store
  );

  useEffect(() => {
    closeToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const closeToast = () => {
    if (isShow) {
      setTimeout(() => {
        reset();
      }, timeout);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow fixed bottom-5 transition-all",
        isShow ? "visible right-5" : "invisible -right-full"
      )}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
        <Image
          src={type === "SUCCESS" ? "/check.svg" : "/error.svg"}
          width={32}
          height={32}
          alt={type === "SUCCESS" ? "check" : "error"}
        />
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{title}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={reset}
      >
        <span className="sr-only">Close</span>

        <Image src={"/close.svg"} width={10} height={10} alt="close" />
      </button>
    </div>
  );
}

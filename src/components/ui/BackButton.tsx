"use client";

import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  link: string;
}

export default function BackButton({ link }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push(link);
  };

  return (
    <button
      type="button"
      className="rounded-full block bg-white p-2 text-gray-400 hover:text-gray-600 transition-all shadow-lg"
      onClick={handleBack}
    >
      <FaArrowLeft />
    </button>
  );
}

"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-blue-800 h-[100vh] flex justify-center align-center">
      <Link href= "./quiz">
        <div className="flex justify-center align-center text-white bg-slate-800 text-2xl rounded-md p-12 mt-[40%] font-black">Start Quiz</div>
      </Link>
    </div>
  );
}

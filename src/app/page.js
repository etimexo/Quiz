"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-blue-800 h-[100vh] flex justify-center align-center">
      <Link href= "./quiz">
        <div>Start Quiz</div>
      </Link>
    </div>
  );
}

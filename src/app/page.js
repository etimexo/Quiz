"use client"
import React from "react";
import Image from "next/image";
import Quiz from "./Quiz";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href= "./quiz">
        <div>Start Quiz</div>
      </Link>
    </>
  );
}

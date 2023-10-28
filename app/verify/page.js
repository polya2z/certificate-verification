"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Verifier from "../components/Verifier";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  return (
    <>
      <Verifier id={id} />
    </>
  );
};

export default Page;

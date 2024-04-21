"use client"

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  const localToken = useAppSelector((state) => state.auth.token);

  const router = useRouter();

  useEffect(() => {
    if (localToken) {
      router.push("/ourcrew")
    } else {
      router.push("/signup")
    }
  }, [localToken, router])
}

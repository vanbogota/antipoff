"use client"

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

export default function Home() {

  const localToken = useAppSelector((state) => state.auth.token);

  const router = useRouter();

  if (localToken) {
    router.push("/ourcrew")
  } else {
    router.push("/signup")
  }
}

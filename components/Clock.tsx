"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState("--:--");
  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          // The IANA zone for the whole of Bangladesh, so it is Rajshahi's time too.
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);
  return <>{clock}</>;
}

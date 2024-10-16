"use client"

import { useEffect, useState } from "react"
import { toZonedTime } from "date-fns-tz"

export default function TimeDisplay() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const jakartaTime = toZonedTime(new Date(), "Asia/Jakarta").toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      setTime(jakartaTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return <span>{time ? time : "Bending time and space..."}</span>
}

"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

export default function TypedText({
  strings,
  typeSpeed = 60,
  backSpeed = 60,
  loop = true,
  className = "",
}: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    });

    return () => typed.destroy();
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className} />;
}

"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * 슬라이드 인 애니메이션 컴포넌트
 * 뷰포트에 진입하면 슬라이드 효과와 함께 나타납니다.
 */
export function SlideIn({
  children,
  delay = 0,
  direction = "left",
  className,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionOffset = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

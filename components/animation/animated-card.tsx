"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * 애니메이션 카드 컴포넌트
 * 호버 시 scale과 shadow 효과를 제공합니다.
 */
export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.95 }}
      className={cn("transition-shadow hover:shadow-lg", className)}
    >
      {children}
    </motion.div>
  );
}

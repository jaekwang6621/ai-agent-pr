import Link from "next/link";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * 로고 컴포넌트
 * 사이트 로고를 표시합니다.
 */
export function Logo({ size = "md", className }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-bold transition-colors hover:text-primary",
        sizeClasses[size],
        className
      )}
    >
      <Rocket size={iconSizes[size]} className="text-primary" />
      <span>스타터킷</span>
    </Link>
  );
}

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * 메인 컨테이너 컴포넌트
 * 콘텐츠의 최대 너비를 제한하고 중앙 정렬합니다.
 */
export function MainContainer({ children, className }: MainContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

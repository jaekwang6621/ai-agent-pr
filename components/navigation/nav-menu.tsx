import Link from "next/link";
import { MAIN_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * 데스크톱 네비게이션 메뉴 컴포넌트
 * 주요 네비게이션 링크를 표시합니다.
 */
export function NavMenu() {
  return (
    <nav className="hidden items-center gap-6 lg:flex">
      {MAIN_NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            item.disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

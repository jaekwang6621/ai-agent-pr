import { LucideIcon } from "lucide-react";

/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
}

/**
 * 기능 카드 타입
 */
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * 통계 데이터 타입
 */
export interface Stat {
  label: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon?: LucideIcon;
}

/**
 * 활동 로그 타입
 */
export interface Activity {
  id: string;
  type: string;
  message: string;
  timestamp: Date;
  status?: "success" | "warning" | "error";
}

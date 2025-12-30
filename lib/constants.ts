import { NavItem, Feature, Stat } from "@/types";
import { Zap, Shield, Rocket, Users, TrendingUp, TrendingDown } from "lucide-react";

/**
 * 사이트 메타데이터
 */
export const SITE_CONFIG = {
  name: "스타터킷",
  description: "Next.js 기반 범용 스타터킷",
  url: "https://example.com",
} as const;

/**
 * 네비게이션 메뉴
 */
export const MAIN_NAV: NavItem[] = [
  {
    title: "홈",
    href: "/",
  },
  {
    title: "소개",
    href: "/about",
  },
  {
    title: "대시보드",
    href: "/dashboard",
  },
];

/**
 * 홈페이지 기능 목록
 */
export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "빠른 성능",
    description: "Next.js 16과 React 19의 최신 기능으로 최적화된 성능을 제공합니다.",
  },
  {
    icon: Shield,
    title: "타입 안정성",
    description: "TypeScript로 작성되어 안전하고 유지보수하기 쉬운 코드를 보장합니다.",
  },
  {
    icon: Rocket,
    title: "빠른 시작",
    description: "shadcn/ui 컴포넌트로 즉시 프로덕션 준비된 UI를 구축할 수 있습니다.",
  },
  {
    icon: Users,
    title: "확장 가능",
    description: "모듈화된 구조로 프로젝트 요구사항에 맞게 쉽게 확장할 수 있습니다.",
  },
];

/**
 * 대시보드 통계 (샘플)
 */
export const DASHBOARD_STATS: Stat[] = [
  {
    label: "총 사용자",
    value: "2,543",
    change: { value: 12, type: "increase" },
    icon: TrendingUp,
  },
  {
    label: "활성 세션",
    value: "1,234",
    change: { value: 8, type: "increase" },
    icon: TrendingUp,
  },
  {
    label: "전환율",
    value: "3.2%",
    change: { value: 2, type: "decrease" },
    icon: TrendingDown,
  },
  {
    label: "수익",
    value: "₩1,234,567",
    change: { value: 15, type: "increase" },
    icon: TrendingUp,
  },
];

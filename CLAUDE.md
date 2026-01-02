# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소의 코드를 작업할 때 필요한 가이드를 제공합니다.

## 프로젝트 개요

TypeScript, React 19, shadcn/ui, Tailwind CSS 4로 구축된 Next.js 16 스타터 킷입니다. 이 프로젝트는 App Router 아키텍처를 사용하며, 애플리케이션의 다양한 섹션을 구성하기 위해 라우트 그룹을 활용합니다.

## 명령어

### 개발
```bash
npm run dev      # http://localhost:3000에서 개발 서버 시작
npm run build    # Next.js 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

## 아키텍처

### 라우트 그룹
앱은 Next.js 라우트 그룹을 사용하여 서로 다른 레이아웃을 가진 페이지들을 구성합니다:

- `(marketing)/` - 공개 페이지 (홈, 소개) - Header + Footer 레이아웃
- `(dashboard)/` - 인증된 페이지 (대시보드, 설정, 도움말) - Header + Sidebar 레이아웃

라우트 그룹은 디렉토리 이름에 괄호를 사용하며 URL 경로에는 영향을 주지 않습니다.

### Import 별칭
- `@/*` - 루트 레벨 임포트 (tsconfig.json에 설정됨)
  - 예시: `@/components/ui/button`, `@/lib/constants`, `@/types`

### 컴포넌트 구조

```
components/
├── ui/              # shadcn/ui 기본 요소 (Button, Card, Input 등)
├── animation/       # 재사용 가능한 애니메이션 래퍼 (FadeIn, PageTransition, AnimatedCard, SlideIn)
├── common/          # 공유 컴포넌트 (Logo, PageHeader)
├── navigation/      # 네비게이션 컴포넌트 (NavMenu, MobileNav)
└── layout/          # 레이아웃 컴포넌트 (Header, Footer, Sidebar, MainContainer)
```

### 주요 패턴

#### 페이지 구조
대시보드 페이지는 다음 패턴을 따릅니다:
1. `@/components/common/page-header`에서 `PageHeader` 임포트
2. 스크롤 기반 애니메이션을 위해 섹션을 `FadeIn`으로 래핑 (점진적인 `delay` 값 사용)
3. shadcn/ui 컴포넌트 사용 (Card, Badge, Tabs 등)
4. 모든 콘텐츠와 주석은 한국어로 작성

예시:
```tsx
<div className="space-y-8">
  <FadeIn>
    <PageHeader title="제목" description="설명" />
  </FadeIn>

  <FadeIn delay={0.1}>
    <Card>{/* content */}</Card>
  </FadeIn>
</div>
```

#### 애니메이션 컴포넌트
- `FadeIn` - 방향(up/down/left/right)과 지연 시간을 가진 스크롤 기반 페이드인
- `SlideIn` - FadeIn과 유사하지만 더 큰 슬라이드 효과, About 페이지에서 주로 사용
- `PageTransition` - 페이지 전환 래퍼 (레이아웃 파일에 적용됨)
- `AnimatedCard` - 호버 애니메이션 카드 래퍼

#### 상수
전역 상수는 `lib/constants.ts`에 정의되어 있습니다:
- `SITE_CONFIG` - 사이트 메타데이터
- `MAIN_NAV` - 네비게이션 메뉴 항목
- `FEATURES` - 마케팅 페이지용 기능 목록
- `DASHBOARD_STATS` - 대시보드 통계 (샘플 데이터)

#### 타입 정의
TypeScript 타입은 `types/index.ts`에 중앙화되어 있습니다:
- `NavItem` - 네비게이션 항목 구조
- `Feature` - 기능 카드 구조
- `Stat` - 통계 데이터 구조
- `Activity` - 활동 로그 구조

### 스타일링
- **Tailwind CSS 4**: PostCSS 플러그인 방식 사용 (`postcss.config.mjs`에서 설정, 별도의 `tailwind.config.ts` 파일 없음)
- `cn()` 헬퍼를 사용한 유틸리티 우선 접근 방식 (`lib/utils.ts`에서)
- 일관된 간격: 페이지 섹션에는 `space-y-8`, 카드 콘텐츠에는 `space-y-4`

### 상태 관리
- 대부분의 컴포넌트는 기본적으로 Server Components입니다
- 클라이언트 컴포넌트 (훅, 애니메이션 사용)는 `"use client"`로 표시됩니다
- framer-motion이 애니메이션에 사용됩니다 (클라이언트 컴포넌트 필요)

## 새 페이지 추가하기

### 마케팅 페이지 (공개)
1. `app/(marketing)/[page-name]/page.tsx` 생성
2. 페이지는 자동으로 `(marketing)/layout.tsx` 사용 (Header + Footer)

### 대시보드 페이지 (인증된 UI)
1. `app/(dashboard)/[page-name]/page.tsx` 생성
2. 페이지는 자동으로 `(dashboard)/layout.tsx` 사용 (Header + Sidebar)
3. 필요한 경우 `components/layout/sidebar.tsx`에 메뉴 항목 추가

### 사이드바 메뉴 항목 추가
`components/layout/sidebar.tsx` 업데이트:
```tsx
const menuItems = [
  { name: "메뉴명", href: "/path", icon: IconComponent },
];
```

## 기술 스택  

- **프레임워크**: Next.js 16 with App Router
- **React**: Version 19.2.3
- **TypeScript**: Strict mode 활성화
- **UI 라이브러리**: shadcn/ui (Radix UI primitives)
- **스타일링**: Tailwind CSS 4
- **아이콘**: lucide-react
- **애니메이션**: framer-motion
- **훅**: usehooks-ts

## 코드 스타일

- TypeScript strict mode가 활성화되어 있습니다
- 모든 사용자 대면 콘텐츠와 코드 주석은 한국어로 작성해야 합니다
- 컴포넌트 파일은 목적을 설명하는 JSDoc 주석을 포함해야 합니다
- props를 위한 TypeScript 인터페이스와 함께 함수형 컴포넌트를 사용합니다
- 클라이언트 상호작용이 필요하지 않은 경우 Server Components를 선호합니다

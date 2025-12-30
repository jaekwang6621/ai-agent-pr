import { MainContainer } from "@/components/layout/main-container";
import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/fade-in";
import { SlideIn } from "@/components/animation/slide-in";

/**
 * About 페이지
 * 프로젝트 소개와 기술 스택을 표시합니다.
 */
export default function AboutPage() {
  const techStack = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "shadcn/ui",
    "Framer Motion",
    "Lucide Icons",
    "usehooks-ts",
  ];

  return (
    <MainContainer className="py-12">
      <FadeIn direction="up">
        <PageHeader
          title="소개"
          description="모던 웹 개발을 위한 범용 스타터킷에 대해 알아보세요."
        />
      </FadeIn>

      <div className="mt-12 space-y-12">
        <FadeIn delay={0.2}>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">프로젝트 소개</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  이 스타터킷은 Next.js 기반의 범용 웹 애플리케이션 템플릿입니다.
                  최신 기술 스택과 모범 사례를 적용하여 빠르게 프로젝트를 시작할
                  수 있도록 설계되었습니다.
                </p>
                <p>
                  타입 안정성, 반응형 디자인, 애니메이션, 그리고 확장 가능한
                  구조를 갖추고 있어 다양한 프로젝트에 즉시 활용할 수 있습니다.
                </p>
                <p>
                  Server Components를 우선적으로 사용하고, 필요한 경우에만
                  Client Components를 활용하여 성능을 최적화했습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <div>
          <FadeIn delay={0.3}>
            <h2 className="text-2xl font-bold">기술 스택</h2>
            <p className="mt-2 text-muted-foreground">
              최신 기술과 라이브러리로 구성되어 있습니다.
            </p>
          </FadeIn>

          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <SlideIn key={tech} delay={0.05 * index} direction="left">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              </SlideIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">주요 특징</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>타입 안정성:</strong> TypeScript로 작성되어 안전하고
                    유지보수하기 쉬운 코드를 보장합니다.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>반응형 디자인:</strong> 모바일부터 데스크톱까지
                    모든 화면 크기에 최적화되어 있습니다.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>애니메이션:</strong> Framer Motion을 활용한 부드러운
                    애니메이션과 인터랙션을 제공합니다.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>확장 가능:</strong> 모듈화된 구조로 새로운 기능을
                    쉽게 추가할 수 있습니다.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>성능 최적화:</strong> Server Components와 정적
                    생성을 활용하여 뛰어난 성능을 제공합니다.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </MainContainer>
  );
}

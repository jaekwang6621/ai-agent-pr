import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainContainer } from "@/components/layout/main-container";
import { FadeIn } from "@/components/animation/fade-in";
import { AnimatedCard } from "@/components/animation/animated-card";
import { FEATURES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

/**
 * 홈페이지
 * Hero 섹션, Features 섹션, CTA 섹션으로 구성됩니다.
 */
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <MainContainer>
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                모던 웹 개발을 위한
                <br />
                <span className="text-primary">스타터킷</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Next.js 16, TypeScript, Tailwind CSS로 빠르게 시작하세요.
                <br />
                프로덕션 준비된 스타터킷으로 개발 시간을 단축하세요.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    시작하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://github.com" target="_blank">
                    GitHub
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </MainContainer>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-20">
        <MainContainer>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                강력한 기능
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                최신 기술 스택으로 구축된 스타터킷의 주요 기능을 확인하세요.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={0.1 * index}>
                  <AnimatedCard className="h-full">
                    <Card className="h-full border-0 shadow-none">
                      <CardHeader>
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </FadeIn>
              );
            })}
          </div>
        </MainContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <MainContainer>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                지금 바로 시작하세요
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                몇 분 안에 프로젝트를 시작하고 빠르게 개발할 수 있습니다.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    대시보드로 이동
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </MainContainer>
      </section>
    </>
  );
}

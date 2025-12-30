import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { MainContainer } from "./main-container";
import { Separator } from "@/components/ui/separator";

/**
 * 푸터 컴포넌트
 * 사이트 하단에 링크와 저작권 정보를 표시합니다.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "기능", href: "#" },
      { name: "가격", href: "#" },
      { name: "문서", href: "#" },
    ],
    company: [
      { name: "소개", href: "/about" },
      { name: "블로그", href: "#" },
      { name: "채용", href: "#" },
    ],
    support: [
      { name: "도움말", href: "#" },
      { name: "문의", href: "#" },
      { name: "상태", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <MainContainer>
        <div className="py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold">스타터킷</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Next.js 기반 범용 스타터킷으로 빠르게 프로젝트를 시작하세요.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold">제품</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">회사</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">지원</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} 스타터킷. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </footer>
  );
}

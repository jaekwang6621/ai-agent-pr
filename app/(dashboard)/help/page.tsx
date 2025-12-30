import { PageHeader } from "@/components/common/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animation/fade-in";
import { HelpCircle, Mail, Phone } from "lucide-react";

/**
 * 도움말 페이지
 * FAQ, 시작하기 가이드, 문의 정보를 제공합니다.
 */
export default function HelpPage() {
  // FAQ 데이터
  const faqs = [
    {
      id: "1",
      category: "일반",
      question: "서비스는 어떻게 시작하나요?",
      answer:
        "상단의 '시작하기' 탭에서 단계별 가이드를 확인하실 수 있습니다. 회원가입 후 대시보드에서 바로 시작할 수 있습니다.",
    },
    {
      id: "2",
      category: "계정",
      question: "비밀번호를 잊어버렸어요",
      answer:
        "로그인 페이지에서 '비밀번호 찾기'를 클릭하여 등록된 이메일로 재설정 링크를 받으실 수 있습니다.",
    },
    {
      id: "3",
      category: "계정",
      question: "이메일 주소를 변경할 수 있나요?",
      answer:
        "설정 페이지의 프로필 설정에서 이메일 주소를 변경할 수 있습니다. 변경 후 인증 이메일이 발송됩니다.",
    },
    {
      id: "4",
      category: "결제",
      question: "결제 수단은 무엇이 있나요?",
      answer:
        "신용카드, 체크카드, 계좌이체를 지원합니다. 안전한 결제를 위해 PG사를 통한 결제 시스템을 사용합니다.",
    },
    {
      id: "5",
      category: "일반",
      question: "데이터는 안전하게 보관되나요?",
      answer:
        "모든 데이터는 암호화되어 저장되며, 정기적으로 백업됩니다. AWS의 보안 인프라를 사용하여 안전하게 관리됩니다.",
    },
  ];

  // 시작하기 가이드 데이터
  const steps = [
    {
      step: 1,
      title: "계정 생성",
      description:
        "이메일 주소로 간편하게 가입하세요. 소셜 로그인도 지원합니다.",
    },
    {
      step: 2,
      title: "프로필 설정",
      description:
        "설정 페이지에서 프로필 정보를 입력하고 알림 설정을 구성하세요.",
    },
    {
      step: 3,
      title: "대시보드 탐색",
      description:
        "대시보드에서 주요 통계와 최근 활동을 확인할 수 있습니다.",
    },
    {
      step: 4,
      title: "기능 활용",
      description:
        "다양한 기능을 사용하여 프로젝트를 효율적으로 관리하세요.",
    },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <PageHeader
          title="도움말"
          description="자주 묻는 질문과 가이드를 확인하세요."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="getting-started">시작하기</TabsTrigger>
            <TabsTrigger value="contact">문의하기</TabsTrigger>
          </TabsList>

          {/* FAQ 탭 */}
          <TabsContent value="faq" className="mt-6">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <Badge variant="outline">{faq.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 시작하기 탭 */}
          <TabsContent value="getting-started" className="mt-6">
            <div className="space-y-6">
              <Alert>
                <HelpCircle className="h-4 w-4" />
                <AlertDescription>
                  처음 사용하시는 분들을 위한 단계별 가이드입니다.
                </AlertDescription>
              </Alert>

              {steps.map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle>{step.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 문의하기 탭 */}
          <TabsContent value="contact" className="mt-6">
            <div className="space-y-6">
              {/* 연락처 정보 */}
              <Card>
                <CardHeader>
                  <CardTitle>고객 지원 센터</CardTitle>
                  <CardDescription>
                    궁금하신 사항은 언제든지 문의해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">이메일</p>
                      <p className="text-sm text-muted-foreground">
                        support@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">전화</p>
                      <p className="text-sm text-muted-foreground">
                        1588-0000 (평일 09:00 - 18:00)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 문의 폼 */}
              <Card>
                <CardHeader>
                  <CardTitle>문의하기</CardTitle>
                  <CardDescription>
                    문의 내용을 남겨주시면 빠르게 답변드리겠습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">이메일</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">제목</Label>
                    <Input id="subject" placeholder="문의 제목" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">문의 내용</Label>
                    <Input id="message" placeholder="문의 내용을 입력하세요" />
                  </div>

                  <Button className="w-full">문의 제출</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </FadeIn>
    </div>
  );
}

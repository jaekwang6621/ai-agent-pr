import { PageHeader } from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/animation/fade-in";
import { User, Bell, Shield } from "lucide-react";

/**
 * 설정 페이지
 * 사용자 프로필, 알림, 보안 설정을 관리합니다.
 */
export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <FadeIn>
        <PageHeader
          title="설정"
          description="계정 및 애플리케이션 설정을 관리하세요."
        />
      </FadeIn>

      {/* 프로필 설정 */}
      <FadeIn delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              프로필 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 이름 입력 필드 */}
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="홍길동" defaultValue="홍길동" />
            </div>

            {/* 이메일 입력 필드 */}
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                defaultValue="example@email.com"
              />
            </div>

            {/* 소개 입력 필드 */}
            <div className="space-y-2">
              <Label htmlFor="bio">소개</Label>
              <Input id="bio" placeholder="간단한 자기소개를 입력하세요" />
            </div>

            <Separator />

            <Button>변경사항 저장</Button>
          </CardContent>
        </Card>
      </FadeIn>

      {/* 알림 설정 */}
      <FadeIn delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 이메일 알림 */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">이메일 알림</p>
                <p className="text-sm text-muted-foreground">
                  중요한 업데이트를 이메일로 받습니다
                </p>
              </div>
              <Badge>활성화</Badge>
            </div>

            <Separator />

            {/* 푸시 알림 */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">푸시 알림</p>
                <p className="text-sm text-muted-foreground">
                  브라우저 푸시 알림을 받습니다
                </p>
              </div>
              <Badge variant="outline">비활성화</Badge>
            </div>

            <Separator />

            {/* 마케팅 수신 동의 */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">마케팅 수신 동의</p>
                <p className="text-sm text-muted-foreground">
                  프로모션 및 마케팅 정보를 받습니다
                </p>
              </div>
              <Badge>활성화</Badge>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* 보안 설정 */}
      <FadeIn delay={0.3}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              보안 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 비밀번호 변경 */}
            <div className="space-y-2">
              <Label htmlFor="current-password">현재 비밀번호</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">새 비밀번호</Label>
              <Input id="new-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">새 비밀번호 확인</Label>
              <Input id="confirm-password" type="password" />
            </div>

            <Separator />

            {/* 2단계 인증 */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">2단계 인증</p>
                <p className="text-sm text-muted-foreground">
                  추가 보안 계층으로 계정을 보호합니다
                </p>
              </div>
              <Badge variant="outline">비활성화</Badge>
            </div>

            <Separator />

            <Button>비밀번호 변경</Button>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

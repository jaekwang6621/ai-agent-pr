import { PageHeader } from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/animation/fade-in";
import { AnimatedCard } from "@/components/animation/animated-card";
import { DASHBOARD_STATS } from "@/lib/constants";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

/**
 * 대시보드 페이지
 * 통계 카드와 최근 활동을 표시합니다.
 */
export default function DashboardPage() {
  const recentActivities = [
    {
      id: "1",
      type: "성공",
      message: "새로운 사용자가 가입했습니다",
      timestamp: "방금 전",
      status: "success" as const,
    },
    {
      id: "2",
      type: "경고",
      message: "서버 응답 시간이 평소보다 느립니다",
      timestamp: "5분 전",
      status: "warning" as const,
    },
    {
      id: "3",
      type: "성공",
      message: "데이터 백업이 완료되었습니다",
      timestamp: "1시간 전",
      status: "success" as const,
    },
    {
      id: "4",
      type: "성공",
      message: "새로운 결제가 처리되었습니다",
      timestamp: "2시간 전",
      status: "success" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <PageHeader
          title="대시보드"
          description="프로젝트의 주요 지표와 최근 활동을 확인하세요."
        />
      </FadeIn>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat, index) => {
          const Icon = stat.icon;
          const isIncrease = stat.change?.type === "increase";

          return (
            <FadeIn key={stat.label} delay={0.1 * index}>
              <AnimatedCard className="h-full">
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.label}
                    </CardTitle>
                    {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    {stat.change && (
                      <p className="mt-2 flex items-center text-xs text-muted-foreground">
                        {isIncrease ? (
                          <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
                        )}
                        <span
                          className={
                            isIncrease ? "text-green-500" : "text-red-500"
                          }
                        >
                          {stat.change.value}%
                        </span>
                        <span className="ml-1">지난주 대비</span>
                      </p>
                    )}
                  </CardContent>
                </Card>
              </AnimatedCard>
            </FadeIn>
          );
        })}
      </div>

      {/* Recent Activity */}
      <FadeIn delay={0.4}>
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="success">성공</TabsTrigger>
                <TabsTrigger value="warning">경고</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-center gap-4">
                        <Badge
                          variant={
                            activity.status === "success"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {activity.type}
                        </Badge>
                        <div>
                          <p className="text-sm font-medium">
                            {activity.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="success" className="mt-6">
                <div className="space-y-4">
                  {recentActivities
                    .filter((a) => a.status === "success")
                    .map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center gap-4">
                          <Badge>성공</Badge>
                          <div>
                            <p className="text-sm font-medium">
                              {activity.message}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {activity.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="warning" className="mt-6">
                <div className="space-y-4">
                  {recentActivities
                    .filter((a) => a.status === "warning")
                    .map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center gap-4">
                          <Badge variant="destructive">경고</Badge>
                          <div>
                            <p className="text-sm font-medium">
                              {activity.message}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {activity.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

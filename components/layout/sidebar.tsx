"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Settings, HelpCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * 사이드바 컴포넌트
 * 대시보드 페이지에서 사용하는 토글 가능한 사이드바입니다.
 */
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      name: "대시보드",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "설정",
      href: "/settings",
      icon: Settings,
    },
    {
      name: "도움말",
      href: "/help",
      icon: HelpCircle,
    },
  ];

  return (
    <motion.aside
      className="sticky top-16 h-[calc(100vh-4rem)] border-r bg-muted/50"
      animate={{
        width: collapsed ? 64 : 240,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.div>
            <span className="sr-only">사이드바 토글</span>
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}

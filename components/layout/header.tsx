"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/common/logo";
import { NavMenu } from "@/components/navigation/nav-menu";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { MainContainer } from "./main-container";

/**
 * 헤더 컴포넌트
 * 스크롤 시 배경이 나타나는 애니메이션 효과를 제공합니다.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b"
      animate={{
        backgroundColor: scrolled
          ? "hsl(var(--background))"
          : "hsl(var(--background) / 0.8)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
      transition={{ duration: 0.2 }}
    >
      <MainContainer>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <MobileNav />
            <Logo />
          </div>
          <NavMenu />
        </div>
      </MainContainer>
    </motion.header>
  );
}

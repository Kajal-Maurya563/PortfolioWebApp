"use client";
import Link from "next/link";
import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTelegram,
} from "@tabler/icons-react";

export function SocialDock() {
  const socialLinks = [
    {
      title: "Instagram",
      icon: (
        // <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            <img src="/icons/instagram.svg" alt="Instagram"  className="w-full" />
      ),
      href: "https://www.instagram.com/yourusername",
    },
    {
      title: "LinkedIn",
      icon: (
        // <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            <img src="/icons/linkedin.svg" alt="LinkedIn"  className="w-full"/>
      ),
      href: "https://www.linkedin.com/in/yourusername",
    },
    {
      title: "GitHub",
      icon: (
        // <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            <img src="/icons/github.svg" alt="GitHub"  className="w-full"/>
      ),
      href: "https://github.com/yourusername",
    },
    {
      title: "Twitter",
      icon: (
        // <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            <img src="/icons/twitter.svg" alt="Twitter" className="w-full" />
      ),
      href: "https://twitter.com/yourusername",
    },
    {
      title: "Telegram",
      icon: (
        // <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
             <img src="/icons/telegram.svg" alt="Telegram"  className="w-full"/>


      ),
      href: "https://t.me/yourusername",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-10">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={socialLinks}
      />
    </div>
  );
}

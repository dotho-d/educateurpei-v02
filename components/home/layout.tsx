"use client";

import Link from "next/link";
import { ArrowRight, Calendar, FileText, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/home/service-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientSlideshow } from "@/components/ui/client-slideshow";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      {children}
    </div>
  );
}

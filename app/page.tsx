import Header from "@/components/Header";
import type { Metadata } from "next";
import MainBlock from "@/modules/MainBlock";
import ProjectBlock from "@/modules/ProjectBlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Work v3",
  description: "Моя третья версия сайта для домашних заданий IT Step",
};

export default function Home() {
  return (
    <div className="bg-bg-dark space-y-4">
      <Header />
      <MainBlock />
      <ProjectBlock />
      <Footer />
    </div>
  );
}

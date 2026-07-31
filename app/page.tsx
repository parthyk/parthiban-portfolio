import AmbientGlow from "@/components/AmbientGlow";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChapterDesigner from "@/components/ChapterDesigner";
import ChapterLearning from "@/components/ChapterLearning";
import ChapterTurningPoint from "@/components/ChapterTurningPoint";
import ChapterTeamLead from "@/components/ChapterTeamLead";
import ChapterCreativeHead from "@/components/ChapterCreativeHead";
import Dashboard from "@/components/Dashboard";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Future from "@/components/Future";
import Contact from "@/components/Contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <AmbientGlow />
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <ChapterDesigner />
        <ChapterLearning />
        <ChapterTurningPoint />
        <ChapterTeamLead />
        <ChapterCreativeHead />
        <Dashboard />
        <Projects />
        <Philosophy />
        <Future />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}. From Pixel to
            Perspective.
          </span>
          <span className="label">Design · Strategy · Leadership</span>
        </div>
      </footer>
    </>
  );
}

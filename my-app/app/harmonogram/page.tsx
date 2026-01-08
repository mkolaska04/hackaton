'use client'
import Harmonogram from "../components/Harmonogram";
import Divider from "../components/Divider";

export default function HarmonogramPage() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden">
      <h1 className="text-3xl md:text-4xl font-bold mb-8  font-code text-center max-w-5xl mx-auto px-4">
        Harmonogram Hackathonu IDEA2IMPACT 2026
      </h1>
      <Divider />
      <Harmonogram />
    </main>
  );
}

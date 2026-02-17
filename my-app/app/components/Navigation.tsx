"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/dist/client/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./Modal";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registrationStartDate = new Date("2026-01-22T00:00:00");
  const registrationEndDate = new Date("2026-02-27T23:59:59");
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScCTLeXWdAGKHNl0AYy7nWMa6E9Syt_DUJN2kPy_9hn0nZ3fQ/viewform?usp=sharing&ouid=110319299113867414103";

  // Sprawdzamy czy jesteśmy w okresie zapisów
  const now = new Date();
  const isRegistrationOpen =
    now >= registrationStartDate && now <= registrationEndDate;

  const handleRegistrationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const now = new Date();
    if (now < registrationStartDate || now > registrationEndDate) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav
      className={`w-full p-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        heroVisible ? "" : "bg-background/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex justify-between items-center max-w-full overflow-hidden">
        <div className="text-white text-xl md:text-2xl lg:text-3xl font-inter whitespace-nowrap">
          IDEA2IMPACT
        </div>
        <div className="hidden md:flex">
          <div
            onClick={() => router.push("/")}
            className="text-white mx-2 text-xl hover:text-secondary font-inter hover:cursor-pointer"
          >
            O Wydarzeniu
          </div>
          <div
            onClick={() => router.push("/harmonogram")}
            className="text-white mx-2 text-xl hover:text-secondary font-inter hover:cursor-pointer"
          >
            Harmonogram
          </div>

          <div
            onClick={() => router.push("/inicjatorzy-wyzwan")}
             className="text-white mx-2 text-xl hover:text-secondary font-inter hover:cursor-pointer"
          >
            Inicjatorzy Wyzwań
          </div>
          {isRegistrationOpen ? (
            <Link
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 text-xl hover:text-secondary font-inter"
            >
              Zapisy
            </Link>
          ) : (
            <div
              onClick={() => setIsModalOpen(true)}
              className="text-white mx-2 text-xl hover:text-secondary font-inter hover:cursor-pointer"
            >
              Zapisy
            </div>
          )}
          <div
            onClick={() => router.push("/zasady")}
            className="text-white mx-2 text-xl hover:text-secondary font-inter hover:cursor-pointer"
          >
            Zasady
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDrawer}
            className="relative w-8 h-8 flex flex-col justify-center items-center group z-50 focus:outline-none"
          >
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isDrawerOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
              }`}
            ></span>

            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-in-out my-1 ${
                isDrawerOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isDrawerOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            ></span>
          </button>
          <div
            className={`absolute top-16 right-0 bg-background/90 backdrop-blur-md shadow-lg rounded-md p-4 flex flex-col transition-all duration-300 ease-in-out origin-top-right ${
              isDrawerOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div
              onClick={() => router.push("/")}
              className="text-white mx-2 text-xl my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
            >
              O Wydarzeniu
            </div>
            <div
              onClick={() => router.push("/harmonogram")}
              className="text-white mx-2 text-xl my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
            >
              Harmonogram
            </div>
            <div
              onClick={() => router.push("/inicjatorzy-wyzwan")}
              className="text-white mx-2 text-xl my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
            >
              Inicjatorzy Wyzwań
            </div>

            {isRegistrationOpen ? (
              <Link
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2 text-xl my-2 hover:text-secondary font-inter hover:cursor-pointer"
              >
                Zapisy
              </Link>
            ) : (
              <div
                onClick={() => setIsModalOpen(true)}
                className="text-white mx-2 text-xl my-2 hover:text-secondary font-inter hover:cursor-pointer"
              >
                Zapisy
              </div>
            )}
            <div
              onClick={() => router.push("/zasady")}
              className="text-white mx-2 text-xl my-2 hover:text-secondary font-inter hover:cursor-pointer hover:cursor-pointer"
            >
              Zasady
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        startDate="22.01.2026"
        endDate="27.02.2026"
      />
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-scroll-bounce cursor-pointer transition-opacity duration-700 ease-in-out ${heroVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </nav>
  );
}

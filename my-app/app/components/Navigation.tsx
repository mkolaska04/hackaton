"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./Modal";

export default function Navigation() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registrationStartDate = new Date("2026-02-14T00:00:00");
  const registrationEndDate = new Date("2026-02-27T23:59:59");
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScCTLeXWdAGKHNl0AYy7nWMa6E9Syt_DUJN2kPy_9hn0nZ3fQ/viewform?usp=sharing&ouid=110319299113867414103";

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
      // Jeśli nie ma sekcji hero (np. na stronie zasad), ustaw tło
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
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
        <div className="text-white text-xl md:text-2xl lg:text-3xl font-inter whitespace-nowrap">IDEA2IMPACT</div>
        <div className="hidden md:flex">
          <div
            onClick={() => router.push("/")}
            className="text-white mx-2 text-xl hover:text-secondary font-code hover:cursor-pointer"
          >
            O Wydarzeniu
          </div>
<div
            onClick={() => router.push("/harmonogram")}
            className="text-white mx-2 text-xl hover:text-secondary font-code hover:cursor-pointer"
          >
            Harmonogram
          </div>
          <Link
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleRegistrationClick}
            className="text-white mx-2 text-xl hover:text-secondary font-code"
          >
            Zapisy
          </Link>
          <div
            onClick={() => router.push("/zasady")}
            className="text-white mx-2 text-xl hover:text-secondary font-code hover:cursor-pointer"
          >
            Zasady
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className="transition">
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div
            className={`absolute top-16 right-0 bg-background/80 shadow-lg rounded-md p-4 flex flex-col ${
              isDrawerOpen ? "block" : "hidden"
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

            <Link
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleRegistrationClick}
              className="text-white mx-2 text-xl my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer"
            >
              Zapisy
            </Link>
            <div
              onClick={() => router.push("/zasady")}
              className="text-white mx-2 text-xl my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer"
            >
              Zasady
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        startDate="14.02.2026"
        endDate="27.02.2026"
      />
    </nav>
  );
}

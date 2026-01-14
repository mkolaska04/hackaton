"use client";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";
import { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registrationStartDate = new Date("2026-02-14T00:00:00");
  const registrationEndDate = new Date("2026-02-27T23:59:59");
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScCTLeXWdAGKHNl0AYy7nWMa6E9Syt_DUJN2kPy_9hn0nZ3fQ/viewform?usp=sharing&ouid=110319299113867414103";

  // Sprawdzamy czy jesteśmy w okresie zapisów
  const now = new Date();
  const isRegistrationOpen = now >= registrationStartDate && now <= registrationEndDate;

  const handleRegistrationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const now = new Date();
    if (now < registrationStartDate || now > registrationEndDate) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <footer className="w-full p-4 bg-surface shadow-md mt-8">
      <div className="container mx-auto text-center text-white">
        <div className="flex flex-wrap  justify-center items-center mb-4 md:gap-4">
          <div
            onClick={() => router.push("/")}
            className="text-white mx-2 text-md my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
          >
            O Wydarzeniu
          </div>
          <div
            onClick={() => router.push("/harmonogram")}
            className="text-white mx-2 text-md my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
          >
            Harmonogram
          </div>
          {isRegistrationOpen ? (
            <Link
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 text-md my-2 hover:text-secondary font-inter hover:cursor-pointer hover:cursor-pointer"
            >
              Zapisy
            </Link>
          ) : (
            <div
              onClick={() => setIsModalOpen(true)}
              className="text-white mx-2 text-md my-2 hover:text-secondary font-inter hover:cursor-pointer hover:cursor-pointer"
            >
              Zapisy
            </div>
          )}
          <div
            onClick={() => router.push("/zasady")}
            className="text-white mx-2 text-md my-2 hover:text-secondary font-inter hover:cursor-pointer hover:cursor-pointer"
          >
            Zasady
          </div>
        </div>
        <hr className="text-accent" />
        <br />
        &copy; {new Date().getFullYear()} Idea2Impact. Wszelkie prawa
        zastrzeżone.
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        startDate="14.02.2026"
        endDate="27.02.2026"
      />
    </footer>
  );
}

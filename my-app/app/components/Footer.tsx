"use client";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";
import { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registrationStartDate = new Date("2026-01-22T00:00:00");
  const registrationEndDate = new Date("2026-02-27T23:59:59");
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScCTLeXWdAGKHNl0AYy7nWMa6E9Syt_DUJN2kPy_9hn0nZ3fQ/viewform?usp=sharing&ouid=110319299113867414103";

  const now = new Date();
  const isRegistrationOpen = now >= registrationStartDate && now <= registrationEndDate;



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
            onClick={() => router.push("/zwyciezcy")}
            className="text-white mx-2 text-md my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
          >
            Zwycięzcy
          </div>
           <div
            onClick={() => router.push("/inicjatorzy-wyzwan")}
            className="text-white mx-2 text-md my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer"
          >
            Inicjatorzy Wyzwań
          </div>
          {/* {isRegistrationOpen ? (
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
          )} */}
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
        startDate="22.01.2026"
        endDate="27.02.2026"
      />
    </footer>
  );
}

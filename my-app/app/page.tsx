"use client";

import { useEffect, useState } from "react";
import LiquidEther from "./components/LiquidEther";
import Timer from "./components/Timer";
import Divider from "./components/Divider";
import AnimatedContent from "./components/AnimatedContent";
import FadeContent from "./components/FadeContent";
import GroupsIcon from "@mui/icons-material/Groups";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import Organizatorzy from "./components/Organizatorzy";
import Nagrody from "./components/Nagrody";
import Kryteria from "./components/Kryteria";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Link from "next/link";
import Modal from "./components/Modal";
import Image from "next/image";
import LogoLoop from "./components/Logo";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState<number | string>("100vh");
  const [lowPerf, setLowPerf] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventDate = new Date("2026-03-07T18:00:00");

  // Daty zapisów
  const registrationStartDate = new Date("2026-01-22T00:00:00");
  const registrationEndDate = new Date("2026-02-27T23:59:59");
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScCTLeXWdAGKHNl0AYy7nWMa6E9Syt_DUJN2kPy_9hn0nZ3fQ/viewform?usp=sharing&ouid=110319299113867414103";

  const now = new Date();
  const isRegistrationOpen =
    now >= registrationStartDate && now <= registrationEndDate;

  const ChallLogos = [
    {
      src: "Infiro_logo.png",
      alt: "Fundacja Infiro",
      href: "https://infiro.pl",
    },
    { src: "logo_wip.png", 
      alt: "Koło naukowe WIP",
      href: "https://wip-ug.web.app/"},
    {
      src: "pd_logo.png",
      alt: "Stowarzyszenie Pomorski Dom",
      href: "https://pomorskidom.com/o-nas",
    },
    {
      src: "TSK_Logo.png",
      alt: "Stowarzyszenie Trzymaj Się, Kocie!",
      href: "https://trzymajsiekocie.pl",
    },
    {
      src: "dns_logo.png",
      alt: "Stowarzyszenie Dom na Skraju",
      href: "https://domnaskraju.pl",
    },
    {
      src: "PK_Logo.png",
      alt: "Fundacja Psia Krew",
      href: "https://fundacjapsiakrew.pl/",
    },
    {
      src: "AH_Logo.png",
      alt: "Animal Helper",
      href: "https://www.animalhelper.pl/",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      const area = window.innerWidth * window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      setLowPerf(area >= 1_600_000 || dpr > 1.5);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-inter overflow-x-hidden ">
      <div
        id="hero-section"
        style={{
          width: "100%",
          height: windowHeight || "100vh",
          position: "relative",
          backgroundColor: "#5C4D8D",
        }}
      >
        <LiquidEther
          colors={["#746299", "#87C4BB", "#FEDCD4 ", "#87C4BB", "#87C4BB"]}
          mouseForce={lowPerf ? 16 : 20}
          cursorSize={lowPerf ? 90 : 100}
          isViscous={lowPerf ? false : true}
          viscous={30}
          iterationsViscous={lowPerf ? 8 : 24}
          iterationsPoisson={lowPerf ? 16 : 28}
          resolution={lowPerf ? 0.35 : 0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={lowPerf ? 0.25 : 0.3}
          autoIntensity={lowPerf ? 2.2 : 3.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.5}
          dt={0.014}
          BFECC={true}
        />
        <section className=" flex flex-col justify-center w-fit absolute bottom-4 left-4 lg:bottom-8 lg:left-8 lg:bottom-12 lg:left-12">
          <h1 className="text-3xl lg:text-5xl font-inter font-semibold tracking-wide flex flex-col ">
            <div>
              IDEA2IMPACT{" "}
              <span className="text-secondary animate-blink" id="cursor">
                |
              </span>
            </div>
            <span className="text-xl lg:text-3xl font-inter ">
              Hackathon 2026
            </span>
          </h1>
        </section>
        <div className="flex flex-col w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 mt-10 flex justify-center font-inter tracking-wide uppercase text-center">
            Do wydarzenia zostało:
          </h2>

          <Timer eventDate={eventDate} />
          {isRegistrationOpen ? (
            <Link
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-white text-primary font-semibold font-inter rounded-lg text-3xl w-fit mx-auto shadow-md transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
            >
              Zapisz się!
            </Link>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-6 py-3 bg-white text-primary font-semibold font-inter rounded-lg text-3xl w-fit mx-auto shadow-md transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
            >
              Zapisz się!
            </button>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        startDate="22.01.2026"
        endDate="27.02.2026"
      />
      <main className=" w-full mt-16 mb-8 space-y-8">
        <Divider />
        <h2 className="text-4xl font-semibold text-center text-primary font-inter tracking-wide uppercase">
          O wydarzeniu
        </h2>
        <section className="w-full lg:w-3/5 mx-auto px-4 lg:px-8 flex gap-8 flex-col justify-between items-between">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className="">
              <p className="text-justify mb-4 lg:text-xl text-lg lg:mb-6">
                <span className="font-semibold text-primary">
                  Fundacja Infiro
                </span>
                ,{" "}
                <span className="font-semibold text-primary">
                  wydział MFI Uniwersytetu Gdańskiego
                </span>
                ,{" "}
                <span className="font-semibold text-primary">
                  wydział FTiMS Politechniki Gdańskiej
                </span>{" "}
                i{" "}
                <span className="font-semibold text-primary">
                  koło naukowe Work in Progress
                </span>{" "}
                zapraszają Cię na wyjątkowe wydarzenie!
              </p>

              <div className="hidden h-32 md:flex justify-center items-center mb-4  lg:mb-6">
                <div className="flex items-center justify-center h-full py-2 mr-4">
                  <Image
                    src="/Infiro_logo.png"
                    alt="Fundacja Infiro Logo"
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="flex items-center justify-center h-full py-2">
                  <Image
                    src="/logo_mfi.svg"
                    alt="Uniwersytet Gdański MFI Logo"
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="flex items-center justify-center h-full py-8">
                  <Image
                    src="/pg-logotyp.svg"
                    alt="Politechnika Gdańska Logotyp"
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain pl-8"
                  />
                </div>
                <div className="flex items-center justify-center h-full py-8">
                  <Image
                    src="/logo_wip.png"
                    alt="WIP Logotyp"
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain pl-8"
                  />
                </div>
              </div>

              <p className="text-justify">
                Hackathon Idea2Impact to społeczne wydarzenie, którego celem
                jest zebranie studentów z różnych dyscyplin, aby współpracowali
                nad rozwiązaniami realnych wyzwań. Wyzwania te są zgłaszane
                przez fundacje, stowarzyszenia i inne organizacje działające na
                rzecz obszarów ważnych dla społeczeństwa.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
            // className="self-end"
          >
            <h3 className="text-secondary text-lg lg:text-2xl mb-2 flex items-center gap-2 font-semibold">
              <CalendarMonthIcon /> Kiedy? 7-8 marca
            </h3>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
            // className="self-end"
          >
            <div className="">
              <h3 className="text-secondary text-lg lg:text-2xl mb-2 flex items-center gap-2 font-semibold">
                <GpsFixedIcon /> Cel projektu
              </h3>
              <p className="text-justify">
                Uczestnicy mają za zadanie stworzyć w czasie Hackatonu
                innowacyjne i praktyczne rozwiązania, które mają bezpośredni
                wpływ na poprawę jakości życia oraz wspieranie organizacji w ich
                codziennej misji. Wydarzenie to ma na celu z jednej strony
                rozwój umiejętności rozwiązywania problemów i zwiększenie
                kreatywności w środowisku symulującym rzeczywiste opracowywanie
                projektów, a z drugiej strony wsparcie organizacji.{" "}
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div>
              <h3 className="text-secondary text-lg lg:text-2xl mb-2 flex items-center gap-2 font-semibold">
                <RecordVoiceOverIcon /> Inicjatorzy wyzwań
              </h3>
              <ul className=" list-inside space-y-2">
                <li className="text-justify hover:underline">
                  <Link
                    href="https://pomorskidom.com/o-nas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stowarzyszenie Pomorski Dom{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>
                <li className="text-justify hover:underline">
                  <Link
                    href="https://domnaskraju.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stowarzyszenie Dom na Skraju{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>
                <li className="text-justify hover:underline">
                  <Link
                    href="https://trzymajsiekocie.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stowarzyszenie Trzymaj Się, Kocie!{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>
                <li className="text-justify hover:underline">
                  <Link
                    href="https://fundacjapsiakrew.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fundacja Psia Krew{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>

                <li className="text-justify hover:underline">
                  <Link
                    href="https://www.animalhelper.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Animal Helper{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>

                <li className="text-justify hover:underline">
                  <Link
                    href="https://wip-ug.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Koło naukowe WIP{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>

                <li className="text-justify hover:underline">
                  <Link
                    href="https://infiro.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fundacja Infiro{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="inline-block mb-1"
                    />
                  </Link>
                </li>
              </ul>
              <LogoLoop
                logos={ChallLogos}
                speed={80}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#151515"
                ariaLabel="Inicjatorzy wyzwań"
              />
            </div>
          </AnimatedContent>
          <div className="flex justify-center items-center text-white mt-4 text-center mx-auto ">
            <div className="border-r-4 border-primary inline px-3 text-lg lg:text-3xl font-semibold w-full">
              3-5 osobowe zespoły
            </div>
            <div className="inline px-3 text-lg lg:text-3xl font-semibold w-full">
              24h hackathonu
            </div>
          </div>
        </section>
        <Divider />
        <h2 className="text-3xl lg:text-4xl font-semibold  text-center text-primary font-inter tracking-wide uppercase">
          Lokalizacja wydarzenia
        </h2>
        <FadeContent blur={true} duration={1000} initialOpacity={0}>
          <section className="w-full lg:w-3/5 mx-auto bg-surface px-4 lg:p-8 md:border-accent md:border-2 rounded-lg shadow-lg">
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.727289016621!2d18.571985476656067!3d54.39713177261259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd752630cbd85d%3A0x8fc136b01c8dda97!2sBiblioteka%20G%C5%82%C3%B3wna%20Uniwersytetu%20Gda%C5%84skiego!5e0!3m2!1spl!2spl!4v1767037503283!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold mb-2 text-secondary">
                <LocationPinIcon />
                Uniwersytet Gdański - Biblioteka Główna
              </p>
              <p className="text-gray-400">Wita Stwosza 53, 80-308 Gdańsk</p>
            </div>
          </section>
        </FadeContent>
        <Divider />
        <h2 className="text-3xl lg:text-4xl font-semibold  text-center text-primary font-inter tracking-wide uppercase">
          Uczestnictwo i struktury zespołów
        </h2>
        <section className="w-9/10 lg:w-3/5 px-4 lg:px-8 flex  gap-8 flex-col justify-between items-between  w-full lg:w-3/5 mx-auto">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className="  mb-4 mx-auto">
              <h3 className="text-secondary text-lg lg:text-2xl mb-2 flex items-center gap-2 font-semibold">
                <HowToRegIcon /> Rejestracja
              </h3>
              <p className="text-justify">
                Aby wziąć udział w hackathonie, studenci muszą ukończyć proces
                rejestracji. Trwa ona od 22 stycznia do 27 lutego 2026 roku.
                Brak rejestracji w oficjalnym terminie uniemożliwi uczestnictwo
                w wydarzeniu. Wymagana jest również akceptacja regulaminu
                wydarzenia, w tym zgoda na wykorzystanie danych i wizerunku
                uczestników w celach związanych z wydarzeniem.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
            // className="self-end"
          >
            <div className=" mb-4 mx-auto">
              <h3 className="text-secondary text-lg lg:text-2xl mb-2 flex items-center gap-2 font-semibold">
                <GroupsIcon /> Zespoły
              </h3>
              <p className="text-justify">
                Zespoły muszą liczyć od trzech do pięciu osób (studentów).
                Osoby, które zgłoszą się indywidualnie lub w parze, zostaną
                dołączone do innego zespołu. Mogą dokonać tego samodzielnie, a w
                przypadku niepowodzenia przydziału dokona Organizator.
              </p>
            </div>
          </AnimatedContent>
        </section>
        <Divider />
        <Kryteria />
        <Divider />
        <Nagrody />
        <Divider />
        <Organizatorzy />
      </main>
    </div>
  );
}

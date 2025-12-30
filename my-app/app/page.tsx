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
import Harmonogram from "./components/Harmonogram";
import Kryteria from "./components/Kryteria";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Home() {
  const [windowHeight, setWindowHeight] = useState<number | string>("100vh");
  const [lowPerf, setLowPerf] = useState(false);
  const eventDate = new Date("2026-03-06T16:00:00");

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
    <div className="flex flex-col min-h-screen items-center justify-center font-sans ">
      <div
        style={{
          width: "100%",
          height: windowHeight || "100vh",
          position: "relative",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
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
        <section className="flex flex-col justify-center w-fit absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
          <h1 className="text-5xl font-grotesk font-bold flex flex-col ">
            <div>
              Idea2Impact{" "}
              <span className="text-secondary animate-blink" id="cursor">
                |
              </span>
            </div>
            <span className="text-2xl font-grotesk ">Hackathon 2026</span>
          </h1>
        </section>
        <div className="flex flex-col w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-bold text-white mb-4 mt-10 flex justify-center font-grotesk">
            Do wydarzenia zostało:
          </h2>

          <Timer eventDate={eventDate} />
          <button className="mt-8 px-6 py-3 bg-white text-primary font-semibold font-inter rounded-lg hover:bg-gray-300 transition w-fit mx-auto text-2xl">
            Zapisz się!
          </button>
        </div>
      </div>
      <main className=" w-full mt-16 mb-8 space-y-8">
        <Divider />
        <h2 className="text-3xl font-semibold text-center">
          &lt;-- O wydarzeniu --&gt;
        </h2>
        <section className=" max-w-7xl p-8 flex  gap-8 flex-col justify-between items-between  w-full lg:w-3/5 mx-auto">
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
            <div className="max-w-2xl self-start text-lg">
              <p className="text-secondary text-2xl "><HelpCenterIcon /> O co chodzi?</p>
              Hackathon Idea2Impact to społeczne wydarzenie, którego celem jest
              zebranie studentów z różnych dyscyplin, aby współpracowali nad
              rozwiązaniami realnych wyzwań. Wyzwania te są zgłaszane przez
              fundacje, stowarzyszenia i inne organizacje działające na rzecz
              obszarów ważnych dla społeczeństwa.
              <p className="text-tertiary "><CalendarMonthIcon /> Kiedy? 6-7 marca</p>
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
            className="self-end"
          >
            <div className="max-w-2xl text-lg">
              <p className="text-secondary text-2xl "><GpsFixedIcon /> Cel projektu</p>
              Uczestnicy mają za zadanie stworzyć w czasie Hackatonu innowacyjne
              i praktyczne rozwiązania, które mają bezpośredni wpływ na poprawę
              jakości życia oraz wspieranie organizacji w ich codziennej misji.
              Wydarzenie to ma na celu z jednej strony rozwój umiejętności
              rozwiązywania problemów i zwiększenie kreatywności w środowisku
              symulującym rzeczywiste opracowywanie projektów, a z drugiej
              strony wsparcie organizacji.{" "}
              {/* <p className="text-tertiary ">
                Czas trawania? 24 godziny non-stop
              </p> */}
            </div>
          </AnimatedContent>
          <div className="flex justify-center text-white mt-4 text-center">
            <div className="border-r-4 border-secondary inline p-2 text-2xl font-semibold">
              3-5 osobowe zespoły
            </div>
            <div className="inline p-2 text-2xl font-semibold">
              24h programowania
            </div>
          </div>
        </section>
        <Divider />
        <h2 className="text-3xl font-semibold  text-center">
          &lt;-- Lokalizacja wydarzenia --&gt;
        </h2>
        <FadeContent blur={true} duration={1000} initialOpacity={0}>
          <section className="w-full lg:w-3/5 mx-auto p-8 border-surface border-2 rounded-lg shadow-lg">
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
              <p className="text-lg font-semibold mb-2">
                <LocationPinIcon />
                Uniwersytet Gdański - Biblioteka Główna
              </p>
              <p className="text-gray-600">Wita Stwosza 53, 80-308 Gdańsk</p>
            </div>
          </section>
        </FadeContent>
        <Divider />
        <h2 className="text-3xl font-semibold  text-center">
          &lt;-- Uczestnictwo i struktury zespołów --&gt;
        </h2>
        <section className=" max-w-7xl p-8 flex  gap-8 flex-col justify-between items-between  w-full lg:w-3/5 mx-auto">
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
            <div className=" max-w-2xl mb-4">
              <h3 className="text-secondary">
                <HowToRegIcon /> Rejestracja
              </h3>
              <p>
                Aby wziąć udział w hackathonie, studenci muszą ukończyć proces
                rejestracji. Aby zapewnić sobie miejsce, rejestracja musi zostać
                zakończona przed oficjalnym rozpoczęciem wydarzenia. Uczestnicy,
                którzy nie zarejestrują się przed oficjalnym rozpoczęciem, mogą
                zostać zdyskwalifikowani. Wymagana jest również akceptacja
                regulaminu wydarzenia, w tym zgoda na wykorzystanie danych i
                wizerunku uczestników w celach związanych z wydarzeniem.
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
            className="self-end"
          >
            <div className="max-w-2xl mb-4">
              <h3 className="text-secondary">
                <GroupsIcon /> Zespoły
              </h3>
              <p>Zespoły muszą liczyć od trzech do pięciu osób (studentów).</p>
              <p>
                Osoby, które zgłoszą się indywidualnie lub w parze, zostaną
                dołączone do innego zespołu. Będą mogły to zrobić samodzielnie,
                chyba że próba samodzielnego dołączenia się nie powiedzie, wtedy
                zostaną przydzielone przez Organizatorów.
              </p>
            </div>
          </AnimatedContent>
        </section>

        <Divider />
        <Harmonogram />
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

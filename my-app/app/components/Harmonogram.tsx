import { AccessAlarm } from "@mui/icons-material";
import AnimatedContent from "./AnimatedContent";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function Harcodegram() {
  return (
    <>
      <h2 className="my-4 text-3xl lg:text-4xl font-inter font-semibold  text-center text-primary max-w-5xl mx-auto px-4">
        Harmonogram
      </h2>
      <section className="w-full max-w-5xl px-4 md:px-8 lg:px-12 mx-auto overflow-hidden">
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">Faza Wstępna</h3>
            <p>
              Uczestnicy otrzymają szczegółową dokumentację z zasadami,
              wytycznymi i terminami przed właściwym wydarzeniem.
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">
              Etap 1: Sesja startowa
            </h3>
            <p>
              Wyjaśnienie zasad, celów i logistyki. Organizatorzy przedstawią
              wprowadzenie do wydarzenia oraz ujawnią oficjalne wyzwania lub
              tematy. <span className="text-primary">Start: Ok. 17:00.</span>
            </p>
            <h4 className="text-secondary mt-2">Warsztaty/prezentacje</h4>
            <p>
              Na początku przewidziane są warsztaty dotyczące zarządzania
              projektami, prototypowania, pracy zespołowej, elementów design
              thinking oraz mindfulness.
            </p>
            <h4 className="text-secondary mt-2">Prezentacja Problemów</h4>
            <p>
              Prezentacja wyzwań zgłoszonych przez organizacje partnerskie.
              Przedstawiciele Beneficjentów będą obecni na miejscu, aby omówić
              szczegóły problemów, a także pozostaną do dyspozycji telefonicznej
              przez cały czas trwania Hackathonu.
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">
              Etap 2: Faza Rozwoju
            </h3>
            <p>
              Intensywna praca zespołów nad projektami ze wsparciem mentorów.
              Zachęca się zespoły do iteracji pomysłów oraz rozwijania
              innowacyjnych, ale wykonalnych rozwiązań.
            </p>
            <p className="flex items-center mt-2">
              <AccessAlarmIcon />
              Przerwy: Przewidziana jest przerwa na pizzę (ok. 21:00) oraz
              przerwa na śniadanie (ok. 8:00).
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">
              Etap 3: Sesje Kontrolne
            </h3>
            <p>
              Organizatorzy mogą planować punkty kontrolne w celu oceny
              postępów, zapewnienia informacji zwrotnych i utrzymania tempa
              pracy. Są to obowiązkowe aktualizacje postępów.
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">
              Etap 4: Termin składania zgłoszeń
            </h3>
            <p>
              Projekty muszą zostać przesłane przed oficjalnym terminem za
              pośrednictwem wyznaczonej platformy (np. GitHub lub Google Drive).
              Zgłoszenie powinno zawierać jasną reprezentację rozwiązania
              (prototyp, koncepcja, makieta) wraz z krótkim wyjaśnieniem jego
              celu i wpływu. Dotrzymanie terminu jest wymagane, aby pozostać
              uprawnionym do oceny.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">
              Etap 5: Prezentacje Finałowe
            </h3>
            <p>
              Zespoły prezentują swoje projekty Jurorom. Prezentacje powinny
              trwać od pięciu do dziesięciu minut.
              <span className="text-primary">
                {" "}
                Prezentacja prac: Ok. godz. 13:00.{" "}
              </span>
            </p>
            <p className="mt-2 text-tertiary">Wymaganym produktem prac jest:</p>
            <ul className="list-disc list-inside ml-4">
              <li>opis produktu i plan wdrożenia opisany np. w word,</li>
              <li>
                prototyp (Prototyp może być różny w zależności od natury
                rozwiązania, np.: pseudokod, kod programistyczny, aplikacja,
                biznes plan, makieta, plansza, plakat, piosenka, scenka.)
              </li>
              <li>prezentacja.</li>
            </ul>
            <p></p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div className="p-4 border-2 border-accent rounded-md mb-4 break-words">
            <h3 className="text-secondary text-lg lg:text-xl">
              Etap 6: Ocena i Ceremonia Wręczenia Nagród
            </h3>
            <p>
              Jurorzy oceniają projekty zgodnie z określonymi kryteriami.
              <span className="text-primary"> Wyniki, nagrody: Ok. 15:00.</span>
            </p>
          </div>
        </AnimatedContent>
      </section>
    </>
  );
}

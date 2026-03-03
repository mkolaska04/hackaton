import { AccessAlarm } from "@mui/icons-material";
import AnimatedContent from "./AnimatedContent";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function Harcodegram() {
  return (
    <>
      <h2 className="my-8 text-3xl lg:text-4xl font-inter font-semibold  text-center text-primary max-w-5xl mx-auto px-4">
        Harmonogram
      </h2>
      <section className="w-full max-w-5xl px-4 md:px-8 lg:px-12 mx-auto overflow-hidden">
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
              Etap I: Sesja startowa; 18:00-20:30
            </h3>
            <p>
              Podczas sesji startowej przedstawimy zasady i cele wydarzenia. W
              tej części odbędzie się również prezentacja problemów oraz wybór
              tematów przez uczestników. Następnie zaplanowane są warsztaty
              wprowadzające.
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
              Etap II: Faza Rozwoju; 20:30-12:15
            </h3>
            <p>
              W czasie tego etapu zespoły pracują nad projektami. Zaplanowano
              przerwy na posiłek w następujących godzinach:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>ok. 22 – 7 marca,</li>
              <li>8:00 – 8 marca</li>
            </ul>
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
              Etap III: Przygotowanie strategii prezentacji rozwiązania
              12:15-14:15
            </h3>
            <p>
              W trakcie tego etapu odbędzie się warsztat dotyczący przygotowania
              prezentacji produktowej – jest to czas, aby przygotować
              prezentację i przygotować się do wystąpienia.
              <br />O 13:00 odbędzie się przerwa na lunch.
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
              Etap IV: Termin zgłoszeń
            </h3>
            <p>
              Każdy zespół ma obowiązek przesłać <span className=" font-bold">zgłoszenie projektu do godziny
              14:15, 8 marca</span>. Szczegóły dotyczące wymaganego produktu zostały
              przedstawione w sekcji nr 2. Materiały należy przesłać na adres:
              kontakt@infiro.pl
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
              Etap V: Prezentacje Finałowe
            </h3>
            <p>
              Będą one miały miejsce od 14:30 do 17:00. Czas prezentacji jednego
              zespołu nie powinien przekroczyć  <span className=" font-bold">3 minut</span>.
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
              Etap VI: Ocena projektów przez Jury oraz ceremonia wręczenia
              nagród.
            </h3>
            <p>
              Będzie to czas podsumowania projektów i celebracji tych
              najlepszych. W tym czasie odbędzie się również prezentacja
              Fundacji Inicjowania Rozwoju Up Foundation w której zostaną
              przedstawione perspektywy rozwijania swoich inicjatyw. Koniec
              wydarzenia planowany jest na godzinę 18:00.{" "}
            </p>
          </div>
        </AnimatedContent>
      </section>
    </>
  );
}

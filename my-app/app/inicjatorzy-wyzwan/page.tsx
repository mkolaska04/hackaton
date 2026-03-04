import Image from "next/image";
import Divider from "../components/Divider";

export default function InicjatorzyWyzwanPage() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden">
      <h1 className="text-3xl lg:text-4xl text-center font-inter font-semibold py-3 max-w-5xl mx-auto lg:px-4 text-primary">
        Inicjatorzy Wyzwań
      </h1>
      <Divider />
      <section className="w-9/10 mx-auto px-2 max-w-5xl lg:px-12 pb-12 flex flex-col gap-8 mt-6">
        {/* Pomorski Dom */}
        <div className="rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/pd_logo.png"
              alt="Pomorski Dom logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Stowarzyszenie Pomorski Dom
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              <span className="font-semibold">
                Stowarzyszenie Pomorski Dom, to organizacja zajmująca się
                ochroną przyrody, dziedzictwa przyrodniczego i kulturowego
                Pomorza oraz wsparciem lokalnej społeczności.
              </span>{" "}
              Swoje główne działania koncentruje w Łebie i okolicach, gdyż to
              właśnie Łeba jest siedzibą stowarzyszenia. Organizacja sprzeciwia
              się bezpodstawnym wycinkom drzew, dąży do powoływania nowych
              obszarów chronionych, walczy z niekontrolowaną zabudową pasa
              nadmorskiego oraz podejmuje działania wspierające lokalne rodzinne
              firmy.
            </p>
          </div>
        </div>

        {/* Dom na Skraju */}
        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Stowarzyszenie Dom na Skraju
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              Celem stowarzyszenia{" "}
              <span className="font-semibold"> &quot;Dom na Skraju&quot; </span>
              jest{" "}
              <span className="font-semibold">
                wspieranie, odkrywanie i rozwijanie potencjału dzieci i
                młodzieży,{" "}
              </span>{" "}
              zwłaszcza tych pochodzących z rodzin zagrożonych wykluczeniem
              społecznym, z gdańskiej dzielnicy Nowy Port. Popołudniami w dni
              robocze uczymy się, odrabiamy lekcje pod okiem
              wychowawców-wolontariuszy oraz rozmawiamy przy wspólnym posiłku. W
              weekendy, wakacje i ferie organizujemy różnorodne wyjścia i
              warsztaty. Działamy od ponad 30 lat.
            </p>
          </div>
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/dns_logo.png"
              alt="Dom na skraju logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
        </div>

        {/* Trzymaj Się, Kocie! */}
        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/TSK_Logo.png"
              alt="Trzymaj się, Kocie! logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Stowarzyszenie Trzymaj Się, Kocie!
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              Jesteśmy grupą osób z Trójmiasta, które nie potrafią przejść
              obojętnie obok bezdomnych kotów. Każdego dnia uczymy się, jak
              skuteczniej im pomagać.{" "}
              <span className="font-semibold">
                Pod naszą opieką jest ok. 100 kotów,{" "}
              </span>
              głównie w domach tymczasowych, gdzie wracają do zdrowia i uczą się
              ufać ludziom. Ratujemy te najbardziej potrzebujące — chore, ranne,
              zapomniane. Działamy społecznie, po pracy, finansując wszystko z
              darowizn.{" "}
              <span className="font-semibold">
                {" "}
                Wierzymy, że każde kocie życie ma znaczenie.{" "}
              </span>
            </p>
          </div>
        </div>

        {/* Animal Helper */}
        <div className="rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Animal Helper
            </h3>
            <ul className="text-foreground/80 text-justify leading-relaxed list-disc list-inside space-y-1">
              <li>Aplikacja, która działa jak 112 dla zwierząt</li>
              <li>Działająca 24/7 centrala</li>
              <li>Pierwszy w Polsce system ratunkowy dla zwierząt</li>
              <li>Pierwsze ogniwo łańcucha ratunkowego</li>
              <li>
                10 województw, 22,5 tys. zgłoszeń, średnio 4 tys. połączeń
                miesięcznie
              </li>
            </ul>
          </div>
          <div className="w-40 md:w-1/4 flex-shrink-0 flex md:flex-col items-center justify-center gap-4">
            <Image
              src="/AH_Logo.png"
              alt="Animal Helper logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
            <Image
              src="/PK_Logo.png"
              alt="Fundacja Psia Krew logo"
              width={400}
              height={300}
              className="w-full max-w-[100px] object-contain"
            />
          </div>
        </div>
        {/*Instytut Ochrony Krajobrazu Pomorza*/}
        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/iokp_logo.png"
              alt="Instytut Ochrony Krajobrazu Pomorza logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Instytut Ochrony Krajobrazu Pomorza
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              <span className="font-semibold">
                Instytut Ochrony Krajobrazu Pomorza
              </span>{" "}
              to organizacja, która skupia ekspertów z zakresu{" "}
              <span className="font-semibold">
                zagospodarowania przestrzeni i ochrony krajobrazu
                kulturowo-przyrodniczego
              </span>
              , jego badaczy i pasjonatów aktywnych w negocjacjach społecznych.
              Instytut zrzesza osoby zainteresowane
              <span className="font-semibold">
                {" "}
                prowadzeniem czynnej działalności dla dobra i rozwoju
                Pomorza{" "}
              </span>{" "}
              – obejmującego tereny województw pomorskiego, kujawsko-pomorskiego
              i zachodniopomorskiego − oraz obszarów pogranicznych regionu.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Polskie Stowarzyszenie na rzecz Osób z Niepełnosprawnością
              Intelektualną Koło w Gdańsku
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              <span className="font-semibold">
                Zespół Niepublicznych Placówek oświatowych PSONI Koło w Gdańsku{" "}
              </span>
               obejmuje szkołę podstawową specjalną oraz szkołę przysposabiającą
              do pracy, skierowane do dzieci i młodzieży z niepełnosprawnością
              intelektualną. Placówki działają w Gdańsku i są prowadzone przez
              Polskie Stowarzyszenie na rzecz Osób z Niepełnosprawnością
              Intelektualną.{" "}
              <span className="font-semibold">
                Szkoły zapewniają bezpieczne, wspierające środowisko edukacyjne,
                oparte na indywidualnym podejściu do ucznia, małych zespołach
                klasowych oraz ścisłej współpracy z rodzinami.
              </span>{" "}
              Edukacja łączy naukę szkolną z terapią i rozwijaniem kompetencji
              społecznych, a na etapie szkoły przysposabiającej do pracy
              koncentruje się także na przygotowaniu do możliwie samodzielnego,
              dorosłego życia i aktywności zawodowych w lokalnym środowisku.
            </p>
          </div>
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/psoni-wektor.png"
              alt="Dom na skraju logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/zps_logo.jpg"
              alt="Zespół Placówek Specjalistycznych w Gdyni logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Zespół Placówek Specjalistycznych w Gdyni
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              <span className="font-semibold">
                Zespół Placówek Specjalistycznych w Gdyni </span> to miejska jednostka
                pomocy społecznej  <span className="font-semibold"> wspierająca dzieci, młodzież, dorosłych i całe
                rodziny </span> poprzez działania wychowawcze, diagnostyczne, edukacyjne
                i terapeutyczne oraz pomoc w sytuacjach kryzysowych i
                przeciwdziałanie przemocy rodzinnej. Instytucja prowadzi m.in.
                placówki wsparcia dziennego SPOT, Ośrodek Interwencji
                Kryzysowej, Specjalistyczny Ośrodek Wsparcia dla Osób
                Doznających Przemocy Domowej działające całodobowo oraz programy
                reintegracyjne i terapeutyczne, a także współpracuje ze
                specjalistami i organizacjami zewnętrznymi.
             
            </p>
          </div>
        </div>

        {/* Work in Progress */}
        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
         

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Koło naukowe Work in Progress
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed">
              <span className="font-semibold">
                Koło naukowe Work In Progress to grupa chętnych do nauki
                studentów z Uniwersytetu Gdańskiego, których najważniejszymi
                filarami są praktyka i współpraca.
              </span>
            </p>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1 mt-2">
              <li>
                Prowadzenie warsztatów i szkoleń na temat programowania i
                tworzenia gier komputerowych
              </li>
              <li>
                Organizacja spotkań inauguracyjnych dla studentów pierwszych
                roczników
              </li>
              <li>
                Popularyzacja nauki na wydarzeniach takich jak konferencje
                naukowe i dni otwarte Uniwersytetu Gdańskiego
              </li>
            </ul>
          </div>
           <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/logo_wip.png"
              alt="Koło naukowe WIP logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
        </div>

        {/* Fundacja Infiro */}
        <div className="rounded-2xl border border-white/10  p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-colors hover:border-primary/30">
          <div className="w-40 md:w-1/4 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/Infiro_logo.png"
              alt="Fundacja Infiro logo"
              width={400}
              height={300}
              className="w-full max-w-[180px] object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              Fundacja Infiro
            </h3>
            <p className="text-foreground/80 text-justify leading-relaxed mb-2">
              <span className="font-semibold">Fundacja Infiro </span> realizuje
              swoje cele w trzech głównych obszarach:
            </p>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Edukacja:</span> wspieranie
                innowacyjnych metod nauczania, budowanie grup zainteresowań oraz
                popularyzacja kultury, sztuki i sportu.
              </li>
              <li>
                <span className="font-semibold">Ekspertyza:</span> rozwijanie
                kompetencji zawodowych i naukowych oraz wspieranie
                profesjonalistów w zdobywaniu specjalistycznej wiedzy.
              </li>
              <li>
                <span className="font-semibold">Dobroczynność:</span> pomoc
                materialna i niematerialna dla osób potrzebujących, wyrównywanie
                szans społecznych oraz działania na rzecz ochrony zwierząt.
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}

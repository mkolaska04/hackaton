import Image from "next/image";

export default function InicjatorzyWyzwanPage() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden">
      <h1 className="text-3xl lg:text-4xl text-center font-inter font-semibold py-3 max-w-5xl mx-auto lg:px-4 text-primary">
        Inicjatorzy Wyzwań
      </h1>
      <section className=" w-9/10 mx-auto px-2 max-w-5xl lg:px-12 pb-6">
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="md:w-1/4 flex-shrink-0">
            <Image
              src="/pd_logo.png"
              alt="Pomorski Dom logo"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Stowarzyszenie Pomorski Dom
            </h3>
            <p className="mb-4 text-justify">
              Celem stowarzyszenia "Dom na Skraju" jest wspieranie, odkrywanie i
              rozwijanie potencjału dzieci i młodzieży, zwłaszcza tych
              pochodzących z rodzin zagrożonych wykluczeniem społecznym, z
              gdańskiej dzielnicy Nowy Port. Popołudniami w dni robocze uczymy
              się, odrabiamy lekcje pod okiem wychowawców-wolontariuszy oraz
              rozmawiamy przy wspólnym posiłku. W weekendy, wakacje i ferie
              organizujemy różnorodne wyjścia i warsztaty. Działamy od ponad 30
              lat.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Stowarzyszenie Dom na Skraju
            </h3>
            <p className="mb-4 text-justify">
              Celem stowarzyszenia "Dom na Skraju" jest wspieranie, odkrywanie i
              rozwijanie potencjału dzieci i młodzieży, zwłaszcza tych
              pochodzących z rodzin zagrożonych wykluczeniem społecznym, z
              gdańskiej dzielnicy Nowy Port. Popołudniami w dni robocze uczymy
              się, odrabiamy lekcje pod okiem wychowawców-wolontariuszy oraz
              rozmawiamy przy wspólnym posiłku. W weekendy, wakacje i ferie
              organizujemy różnorodne wyjścia i warsztaty. Działamy od ponad 30
              lat.
            </p>
          </div>
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src="/dns_logo.png"
              alt="Dom na skraju logo"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="md:w-1/4 flex-shrink-0">
            <Image
              src="/TSK_Logo.png"
              alt="Trzymaj się, Kocie! logo"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Stowarzyszenie Trzymaj Się, Kocie!
            </h3>
            <p className="mb-4 text-justify">
              Jesteśmy grupą osób z Trójmiasta, które nie potrafią przejść
              obojętnie obok bezdomnych kotów. Każdego dnia uczymy się, jak
              skuteczniej im pomagać. Pod naszą opieką jest ok. 100 kotów,
              głównie w domach tymczasowych, gdzie wracają do zdrowia i uczą się
              ufać ludziom. Ratujemy te najbardziej potrzebujące — chore, ranne,
              zapomniane. Działamy społecznie, po pracy, finansując wszystko z
              darowizn. Wierzymy, że każde kocie życie ma znaczenie.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Animal Helper</h3>
            <p className="mb-4 text-justify">
              - aplikacja, która działa jak 112 dla zwierząt; <br />
              - działająca 24/7 centrala;
              <br />
              - pierwszy w Polsce system ratunkowy dla zwierząt; <br />
              - pierwsze ogniwo łańcucha ratunkowego; <br />- 10 województw,
              22,5 tys. zgłoszeń, średnio 4 tys. połączeń miesięcznie.
            </p>
          </div>
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src="/AH_Logo.png"
              alt="Animal Helper logo"
              width={400}
              height={300}
              className="w-full"
            />
            <Image
              src="/PK_Logo.png"
              alt="Fundacja Psia Krew logo"
              width={400}
              height={300}
              className="w-1/2 m-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="md:w-1/4 flex-shrink-0">
            <Image
              src="/Infiro_Logo.png"
              alt="Fundacja Infiro logo"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Fundacja Infiro</h3>
            <p className="mb-4 text-justify">
              Fundacja Infiro realizuje swoje cele w trzech głównych obszarach: <br />
              - Edukacja: wspieranie innowacyjnych metod nauczania, budowanie grup
              zainteresowań oraz popularyzacja kultury, sztuki i sportu. <br />
              - Ekspertyza: rozwijanie kompetencji zawodowych i naukowych oraz
              wspieranie profesjonalistów w zdobywaniu specjalistycznej wiedzy. <br />
              - Dobroczynność: pomoc materialna i niematerialna dla osób
              potrzebujących, wyrównywanie szans społecznych oraz działania na
              rzecz ochrony zwierząt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";
import Divider from "../components/Divider";

export default function Regulamin() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/file.pdf";
    link.download = "Regulamin_Idea2Impact.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen  pt-20 text-justify  ">
      <h1 className="text-3xl lg:text-4xl text-center font-inter font-semibold py-3 max-w-5xl mx-auto lg:px-4 text-primary">
        Zasady oraz Regulamin
      </h1>
      <h2 className="text-2xl lg:text-3xl text-center font-inter font-semibold pb-6 text-primary">
        Hackathonu Idea2Impact
      </h2>
      <Divider />
      <h3 className="px-2 text-2xl lg:text-3xl text-center font-inter font-semibold py-3 max-w-5xl mx-auto lg:px-4">
        Zasady Rozwoju Projektu i Etyka
      </h3>
      <section className=" w-9/10 mx-auto px-2 max-w-5xl lg:px-12 pb-6">
        <h4 className="  text-xl lg:text-2xl font-inter font-semibold mt-8 mb-2">
          Oryginalność i Zasoby
        </h4>
        <p>
          Cała praca musi być oryginalna i opracowana podczas hackathonu. Zasoby
          zewnętrzne muszą być odpowiednio cytowane.
        </p>
        <h4 className="text-xl lg:text-2xl font-inter font-semibold mt-8 mb-2">
          Etyka i Postępowanie
        </h4>
        <p>
          Wymagane jest profesjonalne i etyczne zachowanie podczas całego
          wydarzenia. Uczestnicy powinni okazywać szacunek wszystkim
          uczestnikom, jurorom i organizatorom. Obowiązuje zakaz plagiatu lub
          oszustwa, a naruszenia skutkują dyskwalifikacją. Wymagana jest pełna
          szacunku komunikacja.
        </p>
        <h4 className=" text-xl lg:text-2xl font-inter font-semibold mt-8 mb-2">
          Akceptacja Regulaminu
        </h4>
        <p>
          Uczestnicy muszą zaakceptować Regulamin wydarzenia, w tym wyrazić
          zgodę na wykorzystywanie wizerunku w celach związanych z wydarzeniem.
        </p>
      </section>
      <Divider />
      <h3 className="px-2 text-2xl lg:text-3xl text-center font-inter font-semibold py-3 max-w-5xl mx-auto lg:px-4">
        REGULAMIN HACKATHONU SPOŁECZNEGO ORGANIZOWANEGO POD NAZWĄ „IDEA2IMPACT
        (I2I)”
      </h3>
      <section className=" w-9/10 mx-auto  max-w-5xl lg:px-4 pb-6">
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §1. Postanowienia ogólne
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Niniejszy dokument określa zasady oraz warunki organizacji i
            uczestnictwa w wydarzeniu zorganizowanym w formule konkursu
            społecznego - hackathonu społecznego pod nazwą „IDEA2IMPACT”, w
            skrócie I2I, zwanego dalej także Hackathonem.
          </li>
          <li>
            Organizatorem I2I są łącznie:
            <ol className="px-2 list-alpha-paren ml-8 mt-2 space-y-2">
              <li>
                Fundacja Infiro (adres: ul. Śląska 53/A403A, 81-304 Gdynia,
                numer KRS: 0001134863, numer NIP: 5862411258, kontakt:
                kontakt@infiro.pl),
              </li>
              <li>
                Uniwersytet Gdański (ul. Jana Bażyńskiego 8, 80-309 Gdańsk, NIP
                : 584-020-32-39, REGON 000001330, kontakt: ……………),
              </li>
              <li>
                Politechnika Gdańska (ul. Gabriela Narutowicza 11/12, 80-233
                Gdańsk, NIP : 584-020-35-93, REGON 000001620, kontakt…………..).
              </li>
            </ol>
          </li>
          <li>
            Przy organizacji Hackathonu wsparcia Organizatorowi udziela Koło
            Naukowe „Work in Progress”, działające na Wydziale Matematyki,
            Fizyki i Informatyki Uniwersytetu Gdańskiego.
          </li>
          <li>
            Hackathon finansowany jest w całości ze środków własnych
            Organizatora.
          </li>
          <li>
            Jury składać się będzie z przedstawicieli Organizatora oraz osób
            wskazanych przez Organizatora.
          </li>
          <li>
            Udział w Hackathonie jest równoznaczny z zapoznaniem się z treścią
            Regulaminu, jego akceptacją, zobowiązaniem do jego przestrzegania, a
            także z wyrażeniem zgody na przetwarzanie danych osobowych i
            wykorzystanie wizerunku Uczestnika na zasadach opisanych w
            Regulaminie.
          </li>
        </ol>

        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 px-4">
          §2. Definicje
        </h4>
        <p className="px-4 space-y-4 mb-6">
          Ilekroć w Regulaminie jest mowa o:
        </p>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          <li>
            Beneficjencie – rozumie się przez to fundację, stowarzyszenie lub
            inną organizację działającą na rzecz obszarów ważnych dla
            społeczeństwa, która zgłosiła Organizatorowi wyzwanie lub problem, z
            którym mierzy się w swojej działalności i która przedstawi wyzwanie
            lub problem Uczestnikom Hackathonu;
          </li>
          <li>
            Hackathonie – rozumie się przez to wydarzenie w formule konkursu
            społecznego - hackathonu społecznego pod nazwą „IDEA2IMPACT”, w
            skrócie I2I organizowane przez Organizatora na zasadach opisanych w
            Regulaminie;
          </li>
          <li>
            I2I - rozumie się przez to wydarzenie w formule konkursu społecznego
            - hackathonu społecznego pod nazwą „IDEA2IMPACT”, organizowane przez
            Organizatora na zasadach opisanych w Regulaminie;
          </li>
          <li>
            Organizatorze – rozumie się przez to łącznie Fundację Infiro z
            siedzibą w Gdyni przy ul. Śląskiej 53/A403A, 81-304 Gdynia, nr KRS:
            0001134863, nr NIP: 5862411258), Uniwersytet Gdański (ul. Jana
            Bażyńskiego 8, 80-309 Gdańsk, NIP : 584-020-32-39, REGON 000001330)
            oraz Politechnikę Gdańską (ul. Gabriela Narutowicza 11/12, 80-233
            Gdańsk, NIP : 584-020-35-93, REGON 000001620);
          </li>
          <li>
            Projekcie - rozumie się przez to efekt pracy Uczestników Hackathonu
            w postaci propozycji rozwiązania wyzwania lub problemu zgłoszonego
            przez Beneficjenta i przydzielonego Uczestnikom przez Organizatora;
          </li>
          <li>
            Regulaminie – rozumie się przez to wyłącznie niniejszy Regulamin
            hackathonu społecznego pod nazwą „IDEA2IMPACT”;
          </li>
          <li>
            Uczestniku – rozumie się przez to osobę pełnoletnią, która posiada
            status studenta i dokonała zgłoszenia do Hackathonu.
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §3. Założenia Hackathonu
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Celem Hackathonu jest zebranie studentów różnych dyscyplin, by
            współpracowali nad rozwiązaniami realnych wyzwań i problemów
            zgłaszanych przez fundacje, stowarzyszenia i inne organizacje
            działające na rzecz obszarów ważnych dla społeczeństwa
            (Beneficjentów). Uczestnicy w czasie Hackathonu mają tworzyć
            innowacyjne i praktyczne rozwiązania, bezpośrednio wpływające na
            poprawę jakości życia oraz wspieranie Beneficjentów w ich codziennej
            misji. Wydarzenie to ma na celu rozwój umiejętności rozwiązywania
            problemów i zwiększenie kreatywności w środowisku symulującym
            rzeczywiste opracowywanie projektów, a także wsparcie Beneficjentów.
          </li>
          <li>
            Efektem pracy Uczestników jest Projekt. Projekt musi składać się z:
            <ul className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>
                opisu Projektu i planu jego wdrożenia (zawarty w pliku
                tekstowym, np. Word),
              </li>
              <li>
                prototypu (może być różny w zależności od natury rozwiązania,
                np. pseudokod, kod programistyczny, aplikacja, biznes plan,
                makieta, plansza, plakat, piosenka, scenka),
              </li>
              <li>prezentacji Projektu.</li>
            </ul>
          </li>
          <li>
            Projekt musi być oryginalny i opracowany w czasie trwania
            Hackathonu. W razie korzystania z zewnętrznych zasobów, muszą one
            być wyraźnie zaznaczone oraz zacytowane z poszanowaniem praw osób
            trzecich.
          </li>
          <li>
            Stworzone przez Uczestników Projekty nie mogą naruszać prawa, etyki,
            dobrych obyczajów, ani praw osób trzecich, w szczególności praw
            własności intelektualnej, nie mogą nawoływać do nienawiści, zawierać
            w sobie wulgaryzmów, naruszać dóbr osobistych innych osób.
            Uczestnicy ponoszą odpowiedzialność za dokonane przez siebie
            naruszenie prawa, etyki, dobrych obyczajów, praw osób trzecich, a
            także za nawoływanie do nienawiści, używanie wulgaryzmów, naruszenie
            dóbr osobistych. Odpowiedzialność Organizatora w wyżej wymienionym
            zakresie jest wyłączona.
          </li>
          <li>Udział w Hackathonie jest bezpłatny i dobrowolny.</li>
          <li>
            Uczestnikiem I2I może być tylko osoba pełnoletnia, która posiada
            status studenta, jest w stanie świadomie i zgodnie z prawem wyrazić
            zgodę na przetwarzanie jej danych osobowych, wykorzystanie wizerunku
            oraz zaakceptować niniejszy Regulamin, a jej stan zdrowia pozwala na
            wzięcie udziału w 24-godzinnym wydarzeniu.
          </li>
          <li>
            Uczestnicy I2I w czasie całego wydarzenia zobowiązani są do
            zachowania profesjonalnego, etycznego i legalnego, a także do
            okazywania szacunku pozostałym Uczestnikom, jurorom i
            Organizatorowi.
          </li>
          <li>
            Uczestnicy są zobowiązani do przestrzegania zasad BHP i ppoż. oraz
            regulaminów obowiązujących na terenie obiektu, w którym odbywa się
            Hackathon.
          </li>
          <li>
            Organizator zastrzega sobie prawo do dyskwalifikacji Uczestnika lub
            całego zespołu Uczestników, jeśli zachowanie Uczestnika jest
            sprzeczne z zasadami opisanymi w Regulaminie, albo Projekt narusza
            zasady opisane w Regulaminie.
          </li>
        </ol>

        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §4. Rejestracja uczestnictwa
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Aby wziąć udział w Hackathonie, Uczestnik musi zarejestrować się
            poprzez formularz dostępny na stronie internetowej idea2impact.pl
            najpóźniej przed rozpoczęciem I2I. Organizator może nie dopuścić do
            udziału w Hackathonie Uczestnika, który ukończył rejestrację już po
            oficjalnym rozpoczęciu I2I.
          </li>
          <li>
            Rejestracja trwa od 22.01.2026 do 27.02.2026, chyba że przed
            terminem zakończenia rejestracji wyczerpie się limit miejsc dla
            Uczestników.
          </li>
          <li>
            Potwierdzeniem zarejestrowania Uczestnika do I2I jest wiadomość
            e-mail od Organizatora. Samo wysłanie formularza rejestracyjnego
            przez Uczestnika nie jest jednoznaczne z zakwalifikowaniem
            Uczestnika do Hackathonu.
          </li>
          <li>
            W Hackathonie może wziąć udział maksymalnie 100 Uczestników. W
            przypadku większej ilości chętnych o dopuszczeniu do uczestnictwa w
            I2I decyduje kolejność zgłoszeń. Organizator zastrzega sobie prawo
            zablokowania lub usunięcia formularza rejestracyjnego po wyczerpaniu
            limitu miejsc. O zablokowaniu lub usunięciu formularza Organizator
            poinformuje w miejscu, w którym formularz rejestracyjny był
            dostępny.
          </li>
          <li>
            Organizator zastrzega sobie prawo zakwalifikowania do I2I
            dodatkowych Uczestników nawet w dniu wydarzenia, jeśli osoby już
            zarejestrowane zrezygnują z udziału.
          </li>
          <li>
            W czasie rejestracji należy podać następujące dane:
            <ul className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>numer telefonu,</li>
              <li>nazwa uczelni, rok i kierunek studiów,</li>
              <li>numer albumu.</li>
            </ul>
          </li>
          <li>
            Uczestnicy mogą zgłosić się do Hackathonu zespołowo lub
            indywidualnie. Każdy zespół może liczyć od trzech do pięciu osób.
            Uczestnicy, którzy zgłoszą się do Hackathonu indywidualnie lub w
            parze mogą dołączyć do istniejącego zespołu (do limitu osób),
            zostaną dołączeni do istniejącego zespołu przez Organizatora, albo
            wraz z innymi Uczestnikami stworzą nowy zespół, o czym zadecyduje
            Organizator.
          </li>
          <li>
            Przed rozpoczęciem I2I Uczestnicy otrzymają od Organizatora
            szczegółową dokumentację z zasadami, wytycznymi i terminami
            dotyczącymi I2I.
          </li>
          <li>
            Przed dokonaniem rejestracji Uczestnik zobowiązany jest zapoznać się
            z treścią Regulaminu, a przesłanie formularza rejestracyjnego
            oznacza akceptację Regulaminu, zgodę na przetwarzanie danych
            osobowych przez Organizatora oraz zgodę na wykorzystanie przez
            Organizatora wizerunku Uczestnika w zakresie opisanym w Regulaminie.
          </li>
          <li>
            Wypełnienie i wysłanie formularza rejestracyjnego przez Uczestnika
            jest jednoznaczne ze złożeniem przez niego oświadczenia o braku
            przeciwwskazań zdrowotnych do wzięcia przez Uczestnika udziału w
            Hackathonie, ze szczególnym uwzględnieniem tego, że trwa on całą
            dobę. Organizator nie ponosi odpowiedzialności z tego tytułu.
          </li>
          <li>
            Uczestnik po rozpoczęciu Hackathonu może zrezygnować z udziału w I2I
            tylko z ważnych przyczyn. Jeśli rezygnacja Uczestnika uniemożliwi
            jego zespołowi wykonanie Projektu, Organizator może przydzielić ten
            zespół do wsparcia Projektu innego zespołu.
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §5. Szczegóły wydarzenia
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Hackathon odbędzie się w terminie 6 – 7 marca 2026 r. i będzie trwał
            24 godziny – od godziny 16:00 w dniu 6 marca 2026 r. do godziny
            16:00 w dniu 7 marca 2026 r.
          </li>
          <li>
            Hackathon odbędzie się w formie stacjonarnej, a miejscem jego
            przeprowadzenia jest Biblioteka Główna Uniwersytetu Gdańskiego przy
            ul. Wita Stwosza 53, 80-308 Gdańsk.
          </li>
          <li>
            Uczestnicy tworząc Projekty korzystają z własnego sprzętu,
            materiałów i narzędzi i ponoszą pełną odpowiedzialność za ich
            właściwe i bezpieczne użytkowanie.Organizator nie ponosi
            odpowiedzialności za szkody powstałe w związku z korzystaniem z nich
            przez uczestników, w tym w szczególności za uszkodzenie, zniszczenie
            lub utratę sprzętu, materiałów lub narzędzi należących do
            uczestników.
          </li>
          <li>
            Organizator zapewnia dostęp do Internetu oraz materiały plastyczne
            pomocne przy tworzeniu Projektu.
          </li>
          <li>
            Organizator nie pokrywa i nie zwraca kosztów dojazdu na wydarzenie,
            ani noclegu.
          </li>
          <li>
            Organizator zapewnia Uczestnikom catering w następującym zakresie:
            kolacja (pizza) w dniu 6 marca 2026 r., śniadanie w dniu 7 marca
            2026 r., woda, kawa i herbata w czasie trwania I2I.
          </li>
          <li>
            Do każdego wyzwania lub problemu wybranego przez zespół w celu
            stworzenia Projektu będzie przydzielony Beneficjent. Przedstawiciel
            Beneficjenta będzie dostępny dla zespołu w celach konsultacji
            stacjonarnie lub telefonicznie.
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §6. Przebieg Hackathonu
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Szczegółowy program Hackathonu z podziałem na planowane godziny
            rozpoczęcia poszczególnych etapów zostanie opublikowany na stronie
            internetowej www.idea2impact.pl.
          </li>
          <li>
            Organizator zakłada następujący przebieg Hackathonu:
            <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
              {" "}
              <li>
                Sesja Startowa (Kickoff) - wyjaśnienie zasad, celów i
                organizacji I2I, ujawnienie listy Beneficjentów oraz wyzwań lub
                problemów do rozwiązania;
              </li>
              <li>
                Warsztaty i prezentacje – warsztaty dla Uczestników dotyczące
                zarządzania projektami, prototypowania, pracy zespołowej,
                elementów design thinking oraz mindfulness;
              </li>
              <li>
                Prezentacja wyzwań – prezentacje wyzwań lub problemów
                zgłoszonych przez Beneficjentów;
              </li>
              <li>
                Faza Rozwoju (Development Phase) - praca zespołów nad Projektami
                ze wsparciem Mentorów; w tej części przewidziane są dwie przerwy
                (ok. 21:00 na kolację i ok. 8:00 na śniadanie);
              </li>
              <li>
                Sesje Kontrolne (Check-in Sessions) - Organizator może ogłosić
                punkty kontrolne w celu oceny postępów, zapewnienia informacji
                zwrotnych i utrzymania tempa pracy;
              </li>
              <li>
                Termin Zgłoszeń (Submission Deadline) – przesłanie Projektów
                przez Uczestników Organizatorowi za pośrednictwem wyznaczonej
                platformy (np. GitHub lub Google Drive); zgłoszenie powinno
                zawierać jasną prezentację rozwiązania (prototyp, koncepcja,
                makieta) wraz z krótkim wyjaśnieniem jego celu i wpływu;
              </li>
              <li>
                Prezentacje Finałowe (Final Presentations) – prezentacja
                Projektów jurorom przez zespoły (każda prezentacja powinna trwać
                od 5 do 10 minut);
              </li>
              <li>
                Ocena i Ceremonia Wręczenia Nagród – ocena Projektów przez
                jurorów, ogłoszenie wyników, wręczenie nagród i zakończenie
                wydarzenia.
              </li>
            </ol>
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §7. Zasady oceniania i nagrody
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Wszystkie Projekty po ich zaprezentowaniu zostaną ocenione przez
            jury, tj. jury przyzna Projektom punkty.
          </li>
          <li>
            Jurorzy szczególną uwagę zwracać będą na realną możliwość wdrożenia
            Projektu w działalności Beneficjentów oraz na podejście
            interdyscyplinarne.
          </li>
          <li>
            Jurorzy oceniają Projekty według następujących kryteriów:
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>innowacyjność i interdyscyplinarność;</li>
              <li>kompletność (opis zasobów potrzebnych do wdrożenia),</li>
              <li>wykonalność i funkcjonalność oraz estetyka prototypu;</li>
              <li>
                dopasowanie i wpływ (realne ułatwienie życia docelowym
                odbiorcom; potencjał użyteczności);
              </li>
              <li>
                sposób prezentacji (jasność przekazu, umiejętność
                zaprezentowania historii problemu oraz rozwiązania).
              </li>
            </ol>
          </li>
          <li>
            Projekt, który uzyskał największą liczbę punktów otrzyma pierwszą
            nagrodę, następny w kolejności – drugą nagrodę, a następny w
            kolejności – trzecią nagrodę.
          </li>
          <li>
            O wynikach Organizator poinformuje niezwłocznie po dokonaniu oceny
            Projektów przez jury w czasie wydarzenia oraz ogłosi je na stronie
            internetowej wydarzenia i w kanałach informujących o wydarzeniu w
            mediach społecznościowych.
          </li>
          <li>
            Nagrodą główną za zajęcie pierwszego miejsca jest: złoty medal dla
            każdego członka zespołu, monitor Philips 27E1N1100A/00 wraz ze
            statywem ART UM-115 13-32" dla każdego członka zespołu.
          </li>
          <li>
            Za zajęcie drugiego miejsca każdy członek zespołu otrzyma srebrny
            medal oraz Słuchawki Marshall Major V.
          </li>
          <li>
            Za zajęcie trzeciego miejsca każdy członek zespołu otrzyma brązowy
            medal oraz Smartwatch Smartwatch XIAOMI Redmi Watch 5 Lite.
          </li>
          <li>
            I2I jest konkursem z dziedziny nauki, a żadna nagroda dla jednego
            Uczestnika nie przekracza wartości 2.000 zł (dwóch tysięcy złotych).
          </li>
          <li>
            Wszyscy Uczestnicy otrzymają Certyfikat Uczestnictwa. Organizator
            może przygotować dla Uczestników dodatkowe gadżety.
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §8. Prawa autorskie oraz wykorzystywanie wizerunku
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Uczestnik oświadcza i gwarantuje, że wykonane przez niego lub przy
            współpracy zespołowej w czasie Hackathonu prace, w tym Projekt, mają
            charakter twórczy i oryginalny i nie naruszają̨ jakichkolwiek praw
            osób trzecich.
          </li>
          <li>
            Wszelkie prawa własności intelektualnej, w tym prawa autorskie, do
            Projektu pozostają przy jego autorach lub współautorach.
          </li>
          <li>
            Uczestnik akceptując Regulamin udziela Organizatorowi oraz
            Beneficjentom niewyłącznej, nieograniczonej czasowo i terytorialnie,
            nieodpłatnej licencji na wykorzystanie Projektu autorstwa lub
            współautorstwa Uczestnika poprzez wdrożenie w działalności
            statutowej Organizatora lub Beneficjenta, a także w celach
            promocyjnych, edukacyjnych i informacyjnych na następujących polach
            eksploatacji:
            <ul className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>
                wielokrotne wykorzystanie Utworu na własny użytek, użytek swoich
                jednostek organizacyjnych oraz użytek osób trzecich w celach
                związanych z realizacją zadań i inwestycji Organizatora.
              </li>
              <li>
                utrwalenie Utworu na wszelkich rodzajach nośników, a w
                szczególności na nośnikach video, taśmie światłoczułej,
                magnetycznej, dyskach komputerowych oraz wszystkich typach
                nośników przeznaczonych do zapisu cyfrowego (np. CD, DVD,
                Blue-ray, pendrive, itd.),
              </li>
              <li>
                zwielokrotnianie Utworu dowolną techniką w dowolnej ilości, w
                tym techniką magnetyczną na kasetach video, techniką
                światłoczułą i cyfrową, techniką zapisu komputerowego na
                wszystkich rodzajach nośników dostosowanych do tej formy zapisu,
                wytwarzanie jakąkolwiek techniką egzemplarzy Utworu, w tym
                techniką drukarską, reprograficzną, zapisu magnetycznego oraz
                techniką cyfrową,
              </li>
              <li>
                wprowadzania Utworu do pamięci komputera na dowolnej liczbie
                stanowisk komputerowych oraz do sieci multimedialnej,
                telekomunikacyjnej, komputerowej, w tym do Internetu,
              </li>
              <li>e. wyświetlanie i publiczne odtwarzanie Utworu,</li>
              <li>
                nadawanie całości lub wybranych fragmentów Utworu za pomocą
                wizji albo fonii przewodowej i bezprzewodowej przez stację
                naziemną,
              </li>
              <li> nadawanie za pośrednictwem satelity,</li>
              <li> reemisja,</li>
              <li> wymiana nośników, na których Utwór utrwalono,</li>
              <li> wykorzystanie w utworach multimedialnych,</li>
              <li>
                wykorzystywanie całości lub fragmentów Utworu co celów
                promocyjnych i reklamy,
              </li>
              <li>
                przetwarzanie, wprowadzanie zmian, poprawek, modyfikacji,
                skrótów,
              </li>
              <li>
                sporządzenie wersji obcojęzycznych, zarówno przy użyciu napisów,
                jak i lektora,
              </li>
              <li>
                publiczne udostępnianie Utworu w taki sposób, aby każdy mógł
                mieć do niego dostęp w miejscu i w czasie przez niego wybranym,
              </li>
              <li>
                w zakresie obrotu oryginałem albo egzemplarzami, na których
                Utwór utrwalono - wprowadzanie do obrotu, użyczenie lub najem
                oryginału albo egzemplarzy,
              </li>
              <li>wielokrotne wykorzystywanie utworu.</li>
            </ul>
          </li>
          <li>
            Uczestnik udziela Organizatorowi zgody na informowanie o Projektach
            stworzonych w czasie Hackathonu, fotografowanie oraz nagrywanie
            Projektów oraz wykorzystanie wszelkich nośników ukazujących Projekty
            dla celów wewnętrznych oraz promocyjnych, w tym na stronach
            internetowych Organizatora i w mediach społecznościowych
            Organizatora.
          </li>
          <li>
            Uczestnik ponosi odpowiedzialność wobec Organizatora za wszelkie
            wady prawne Projektu, w szczególności za ewentualne roszczenia osób
            trzecich, wynikające z naruszenia praw autorskich i innych praw osób
            trzecich. W przypadku skierowania z tego tytułu roszczeń przeciwko
            Organizatorowi, Uczestnik zobowiązuje się do ich całkowitego
            zaspokojenia oraz zwolnienia Organizatora od obowiązku świadczenia.
          </li>
          <li>
            Przebieg Hackathonu będzie rejestrowany (nagranie, fotografie).
            Materiały z Hackathonu będą publikowane na stronach internetowych
            Organizatora oraz w mediach społecznościowych Organizatora.
          </li>
          <li>
            Każdy Uczestnik z chwilą dokonania rejestracji na I2I wyraża -
            zgodnie z art. 81 ust. 1 z dnia 4 lutego 1994 r. o prawie autorskim
            i prawach pokrewnych - zgodę na wykorzystanie wizerunku Uczestnika
            przez Organizatora poprzez:
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>
                utrwalanie wizerunku Uczestnika w formie zdjęć lub materiału
                audiowizualnego z I2I,
              </li>
              <li>
                publikację wizerunku Uczestnika w materiałach zapowiadających i
                promujących I2I,
              </li>
              <li>
                rozpowszechnianie i publikację relacji z I2I w formie zdjęć lub materiału
                audiowizualnego przez Organizatora na potrzeby promocji I2I oraz
                sprawozdania z jego przebiegu na stronach www, w powstałych
                publikacjach oraz za pośrednictwem wszelkich pozostałych
                mediów/kanałów dystrybucji, w kontekście
                promocji I2I oraz sprawozdania z jego przebiegu, jak również w materiałach służących promocji działalności Organizatora.
              </li>
            </ol>
          </li>
          <li>
            Opisana powyżej zgoda:
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>jest nieodpłatna,</li>
              <li>nie jest ograniczona czasowo ani terytorialnie,</li>
              <li>
                dotyczy wszelkich zdjęć oraz materiałów audiowizualnych z
                udziałem Uczestnika wykonanych / zarejestrowanych w czasie
                trwania I2I;
              </li>
              <li>
                obejmuje wykorzystanie wizerunku Uczestnika do różnego rodzaju
                form elektronicznego przetwarzania obrazu, kadrowania i
                kompozycji, bez obowiązku akceptacji produktu końcowego, lecz
                nie w formach obraźliwych lub ogólnie uznanych za nieetyczne;
              </li>
              <li>
                jest jednoznaczna ze zrzeczeniem się przez Uczestnika wszelkich
                roszczeń względem Organizatora z tytułu wykorzystania wizerunku
                Uczestnika zgodnie z niniejszą zgodą.
              </li>
            </ol>
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §9. Przetwarzanie danych osobowych
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Organizator w celu organizacji Hackathonu, współpracy przy tworzeniu
            Projektów, przyznania i przekazania nagród oraz publikacji
            informacji o laureatach przetwarza dane osobowe Uczestnika, wobec
            czego jest Administratorem danych osobowych Uczestnika, zgodnie z
            Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27.04.2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (dalej RODO) (Dz.
            Urz. UE L 119, s. 1).
          </li>
          <li>
            Z administratorem można kontaktować się:
            <ul className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>listownie......</li>
              <li>przez.....</li>
            </ul>
          </li>
          <li>
            Hackathon przeznaczony jest dla osób pełnoletnich, wobec czego
            Administrator nie gromadzi i nie przetwarza danych osobowych osób
            małoletnich.
          </li>
          <li>
            Administrator w ramach organizacji Hackathonu, współpracy przy
            tworzeniu Projektów, przyznania i przekazania nagród oraz publikacji
            informacji o laureatach może gromadzić i przetwarzać następujące
            dane osobowe:
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>Dane identyfikacyjne (imię, nazwisko),</li>
              <li>Dane kontaktowe (adres e-mail, numer telefonu),</li>
              <li>nazwa uczelni, rok i kierunek studiów,</li>
              <li>numer albumu.</li>
            </ol>
          </li>
          <li>
            Podstawą przetwarzania danych osobowych jest:
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>zgoda Uczestnika (art. 6 ust. 1 lit a RODO),</li>
              <li>
                prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit f
                RODO).
              </li>
            </ol>
          </li>
          <li>
            Dane osobowe będą przechowywane przez okres trwania Hackathonu oraz
            czas niezbędny do realizacji / dochodzenia roszczeń związanych z
            organizacją Hackathonu, w tym przez okres przedawnienia ewentualnych
            roszczeń podatkowych, skarbowych lub cywilnych przeciw
            Administratorowi.
          </li>
          <li>
            Uczestnik w każdej chwili może
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>
                zażądać dostępu do własnych danych osobowych, sprostowania ich,
                usunięcia lub ograniczenia przetwarzania,
              </li>
              <li>
                wnieść sprzeciw wobec przetwarzania danych oraz skorzystać z
                prawa do przenoszenia danych,
              </li>
              <li>
                cofnąć zgodę na przetwarzanie danych bez wpływu na zgodność z
                prawem przetwarzania danych osobowych, którego dokonano na
                podstawie zgody przed jej cofnięciem,
              </li>
              <li>
                wnieść skargę do organu nadzorczego - Prezesa Urzędu Ochrony
                Danych Osobowych.
              </li>
            </ol>
          </li>
          <li>
            Dane osobowe powierzone Administratorowi nie będą wykorzystane do
            zautomatyzowanego podejmowania decyzji.
          </li>
          <li>
            Podanie danych jest dobrowolne jednakże jest warunkiem koniecznym
            udziału w Hackathonie, a odmowa ich podania jest równoznaczna z
            brakiem możliwości w nim udziału.
          </li>
        </ol>
        <h4 className="text-2xl text-center font-inter font-semibold mt-8 lg:mt-12 mb-4 lg:px-4">
          §10. Odwołanie wydarzenia, reklamacje i postanowienia końcowe
        </h4>
        <ol className="list-decimal list-outside px-2 ml-4 lg:ml-8 lg:px-8 space-y-4 mb-6">
          {" "}
          <li>
            Organizator zastrzega sobie prawo do odwołania albo zmiany terminu
            lub miejsca wydarzenia. Może to nastąpić:
            <ol className="list-alpha-paren ml-8 mt-2 space-y-2">
              <li>
                z ważnych przyczyn, w szczególności takich, których na dzień
                udostępniania Regulaminu i pierwszego ogłoszenia o I2I nie dało
                się przewidzieć lub
              </li>
              <li>
                w przypadku wycofania się Beneficjentów lub Uczestników w takiej
                ilości, że przeprowadzenie Hackathonu będzie niemożliwe lub z
                wysokim prawdopodobieństwem nie osiągnie się zamierzonego celu
                wydarzenia.
              </li>
            </ol>
          </li>
          <li>
            O odwołaniu albo zmianie terminu lub miejsca wydarzenia Organizator
            niezwłocznie poinformuje Uczestników.
          </li>
          <li>
            Organizator nie ponosi odpowiedzialności z tytułu odwołania albo
            zmiany terminu lub miejsca Hackathonu, a wszelkie roszczenia z tego
            tytułu są wyłączone.
          </li>
          <li>
            Uczestnik ma prawo złożenia reklamacji dotyczącej Hackathonu w
            terminie 21 dni od dnia zakończenia wydarzenia. Reklamacje mogą być
            przesyłane za pośrednictwem poczty elektronicznej na adres
            kontakt@infiro.pl lub pisemnie na adres: Fundacja Infiro, ul. Śląska
            53/A403A, 81-304 Gdynia.
          </li>
          <li>
            Organizator rozpatrzy reklamację i udzieli na nią odpowiedź nie
            później niż w terminie 14 dni od dnia jej otrzymania.
          </li>
          <li>
            Jeśli sposób rozpatrzenia reklamacji nie odpowiada Uczestnikowi może
            on skorzystać z pozasądowego sposobu rozwiązania sporu, informując
            Organizatora o tym, że kwestionuje sposób rozpatrzenia reklamacji.
            Organizator ponownie przystąpi do rozpatrzenia sprawy i w terminie
            14 dni udzieli Uczestnikowi informacji o wyniku tych działań.
          </li>
          <li>Do Regulaminu stosuje się prawo polskie.</li>
          <li>
            Wszelkie spory dotyczące I2I oraz Regulaminu należy starać się
            rozwiązać polubownie, a gdy strony sporu nie dojdą do porozumienia
            właściwy będzie sąd powszechny według przepisów Kodeksu postępowania
            cywilnego.
          </li>
          <li>
            Organizator zastrzega sobie prawo zmiany niniejszego Regulaminu z
            ważnych przyczyn w każdym czasie.
          </li>
          <li>
            Wszelkie zmiany Regulaminu wchodzą w życie z momentem ich publikacji
            na mediach społecznościowych Organizatora albo na stronie
            internetowej www.idea2impact.pl.
          </li>
        </ol>
      </section>

      <div className="w-full flex justify-center lg:pb-8">
        <button
          onClick={() => {
            handleDownload();
          }}
          className="mt-8 px-6 py-3 bg-white text-primary font-semibold font-inter rounded-lg text-2xl w-fit mx-auto shadow-md transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
        >
          Pobierz Regulamin (PDF)
        </button>
      </div>
    </main>
  );
}

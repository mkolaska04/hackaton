import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import EngineeringIcon from "@mui/icons-material/Engineering";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CoPresentIcon from "@mui/icons-material/CoPresent";
export default function Kryteria() {
  return (
    <>
      <h2 className="text-3xl font-semibold  text-center">
        &lt;-- Kryteria Oceny Projektów --&gt;
      </h2>

      <section className="w-full lg:w-3/5 mx-auto px-4">
        <p className="text-lg mb-2">
          Projekty będą oceniane przez Jurorów zgodnie z kartą oceny Idea2Impact
          (maksymalnie 100 punktów).{" "}
        </p>
        <ul className=" px-8 space-y-4 mb-6">
          <li>
            <span className="font-semibold text-secondary">
              <TipsAndUpdatesIcon /> Idea (Innowacyjność i Interdyscyplinarność){" "}
            </span>
            - Nieszablonowe podejście; wkład wiedzy z różnych dziedzin (np.
            psychologia, prawo, socjologia). (25 punktów)
          </li>
          <li>
            <span className="font-semibold text-secondary">
              <EngineeringIcon /> To (Kompletność, Wykonalność i Prototyp){" "}
            </span>
            - Opis zasobów czasowych, finansowych i osobowych potrzebnych do
            wdrożenia. Adekwatność technologii (nieprzekombinowana), optymalny
            czas wdrożenia, uzasadnienie kosztowe (efektywność kosztowa).
            Funkcjonalność prototypu (lub logiczny opis procesu); jakość
            wykonania, estetyka i UX (User Experience). (40 punktów)
          </li>
          <li>
            <span className="font-semibold text-secondary">
              <RocketLaunchIcon /> Impact (Dopasowanie i Wpływ){" "}
            </span>
            - Czy propozycja odpowiada na problem Beneficjenta? Realne
            ułatwienie życia docelowym odbiorcom, potencjał użyteczności. (25
            punktów)
          </li>
          <li>
            <span className="font-semibold text-secondary">
              <CoPresentIcon /> Prezentacja (Pitch), Praca zespołowa{" "}
            </span>
            - Jasność przekazu, umiejętność "sprzedania" historii problemu i
            rozwiązania, odpowiedzi na pytania Jury. (10 punktów)
          </li>
        </ul>
      </section>
    </>
  );
}

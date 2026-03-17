"use client";
import FadeContent from "../components/FadeContent";
export default function Zwyciezcy() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-12 text-center ">Zwycięzcy</h1>
      <FadeContent blur={true} duration={1000} initialOpacity={0}>
        <section className="w-full lg:w-3/5 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* 2 miejsce */}
            <div className="order-2 md:order-1 bg-gradient-to-br from-gray-300/10 to-gray-400/5 border-2 border-gray-400/30 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-300/20 border-2 border-gray-400 mb-3">
                  <span className="text-2xl font-bold text-gray-400">🥈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  2 miejsce
                </h3>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-lg font-bold text-gray-400">Zespół 31</h4>
                <p className="font-semibold">
                  Projekt: "Budowanie stabilnego systemu wolontariatu dla
                  korepetycji"
                </p>
                <p>
                  Członkowie: Zuzanna Warchoł, Antoni Kwiatek, Grzegorz
                  Horbaczewski, Mateusz Dobry
                </p>
              </div>
            </div>

            {/* 1 miejsce */}
            <div className="order-1 md:order-2 bg-gradient-to-br from-yellow-400/20 via-yellow-500/15 to-yellow-600/10 border-2 border-yellow-400/60 rounded-xl p-8 md:scale-110 md:-translate-y-2 transform hover:scale-110 md:hover:scale-[1.14] transition-transform duration-300 shadow-[0_0_35px_rgba(250,204,21,0.35)]">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/30 border-2 border-yellow-400 mb-4 shadow-[0_0_20px_rgba(250,204,21,0.45)]">
                  <span className="text-3xl font-bold text-yellow-400">🥇</span>
                </div>
                <h3 className="text-2xl font-extrabold text-yellow-400 mb-2 tracking-wide">
                  1 miejsce
                </h3>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-lg font-bold text-yellow-400">Zespół 24</h4>
                <p className="font-semibold">Projekt: "Matemocni"</p>
                <p>
                  Członkowie: Piotr Lange, Zuzanna Koszałka, Dominik Kwidzyński,
                  Szymon Drywa, Wiktor Laska
                </p>
              </div>
            </div>

            {/* 3 miejsce */}
            <div className="order-3 md:order-3 bg-gradient-to-br from-orange-600/10 to-orange-700/5 border-2 border-orange-600/30 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600/20 border-2 border-orange-600 mb-3">
                  <span className="text-2xl font-bold text-orange-600">🥉</span>
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  3 miejsce
                </h3>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-lg font-bold text-orange-600">Zespół 9</h4>
                <p className="font-semibold">Projekt: "Skarby Pomorza"</p>
                <p>
                  Członkowie: Konrad Gregorowicz, Michał Czarnecki, Nataniel
                  Piekarski, Mateusz Weltrowski-Knopik
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      <p className="text-lg text-center mb-4 text-secondary">
        Gratulujemy wszystkim uczestnikom za ich niesamowite projekty i
        zaangażowanie! Dziękujemy za udział!
      </p>
    </div>
  );
}

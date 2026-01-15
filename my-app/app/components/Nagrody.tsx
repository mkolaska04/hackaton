import FadeContent from "./FadeContent";
import GroupsIcon from "@mui/icons-material/Groups";
import RedeemIcon from "@mui/icons-material/Redeem";
export default function Nagrody() {
        return (
                <>
                <h2 className="text-3xl lg:text-4xl font-inter font-semibold text-center text-primary tracking-wide uppercase">
          Nagrody
        </h2>
        <FadeContent blur={true} duration={1000} initialOpacity={0}>
          <section className="w-full lg:w-3/5 mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* 1 miejsce */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-500/30 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500 mb-3">
                    <span className="text-3xl font-bold text-yellow-500">
                      🥇
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                    1 miejsce
                  </h3>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-lg">Złote medale</p>
                  <p className="text-sm">Monitory 120 Hz, 27&quot;</p>
                  <p className="text-sm">Statywy na monitory</p>
                 
                </div>
              </div>

              {/* 2 miejsce */}
              <div className="bg-gradient-to-br from-gray-300/10 to-gray-400/5 border-2 border-gray-400/30 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-300/20 border-2 border-gray-400 mb-3">
                    <span className="text-3xl font-bold text-gray-400">🥈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">
                    2 miejsce
                  </h3>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-lg">Srebrne medale</p>
                  <p className="text-sm">Słuchawki Marshall Major 5</p>
                 
                </div>
              </div>

              {/* 3 miejsce */}
              <div className="bg-gradient-to-br from-orange-600/10 to-orange-700/5 border-2 border-orange-600/30 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600/20 border-2 border-orange-600 mb-3">
                    <span className="text-3xl font-bold text-orange-600">
                      🥉
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">
                    3 miejsce
                  </h3>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-lg">Brązowe medale</p>
                  <p className="text-sm">Smartwatche</p>
               
                </div>
              </div>
            </div>

            {/* Dodatkowe informacje */}
            <div className="space-y-4">
              <div className="bg-surface/50 border border-accent rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <GroupsIcon /> Dla wszystkich uczestników
                </h4>
                <p className="text-base">
                  Wszyscy uczestnicy otrzymają oficjalny{" "}
                  <span className="font-semibold text-secondary">
                    Certyfikat Uczestnictwa
                  </span>
                  , który może wzbogacić CV i portfolio zawodowe.
                </p>
              </div>

              {/* <div className="bg-surface/50 border border-accent rounded-lg p-6">
                <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                  <RedeemIcon /> Dodatkowo
                </h4>
                <p className="text-base">
                  Przewidziane są gadżety: dyplomy, naklejki i torby hackathonu (Infiro), notesy (UG),
                  długopisy (PG).
                </p>
              </div> */}
            </div>
          </section>
        </FadeContent>
          </>
        );
}
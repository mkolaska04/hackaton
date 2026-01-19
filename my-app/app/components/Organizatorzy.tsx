import Image from "next/image";
export default function Organizatorzy() {
  return (
    <>
      <section className="w-full px-4 lg:w-4/5 xl:w-3/5 mx-auto lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-inter tracking-wide uppercase font-semibold text-center text-primary py-4">
          Organizatorzy
        </h2>
        <div className="flex flex-row justify-center items-stretch gap-8 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-40">
              <Image
                src="/Infiro_logo.png"
                alt="Infiro Logo"
                width={300}
                height={300}
                className="rounded-full h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center justify-center h-40">
              <div className="flex items-center justify-center h-full py-4">
                <Image
                  src="/UG_logo.png"
                  alt="Uniwersytet Gdański Logo"
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
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center h-40">
              <div className="flex items-center justify-center h-full  py-4">
                <Image
                  src="/PG_logo.png"
                  alt="Politechnika Gdańska Logo"
                  width={300}
                  height={300}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-full  py-8">
                <Image
                  src="/pg-logotyp.svg"
                  alt="Politechnika Gdańska Logotyp"
                  width={300}
                  height={300}
                  className="h-full w-auto object-contain border-l-2 border-l-white pl-8"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl lg:text-2xl font-inter tracking-wide uppercase font-semibold text-center text-primary mt-16 mb-8 ">
          Wsparcie przy organizacji
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-40 py-4">
              <Image
                src="/logo_wip.png"
                alt="Koło Naukowe Work in Progress Logo"
                width={300}
                height={300}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="pt-2">Koło Naukowe Work in Progress</p> 
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
export default function Organizatorzy() {
        return (
                <>
                 <h2 className="text-3xl font-semibold text-center">
          &lt;-- Organizatorzy --&gt;
        </h2>
        <section className="w-full px-4 lg:w-4/5 xl:w-3/5 mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center ">
              <div className="relative w-4/5 aspect-square">
                <Image
                  src="/Infiro_logo.png"
                  alt="Infiro Logo"
                  fill
                  className="object-contain rounded-full bg-white "
                />
              </div>
              <p className="mt-4 text-center font-medium">Fundacja Infiro</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square">
                <Image
                  src="/UG_logo.png"
                  alt="Uniwersytet Gdański Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium">
                Uniwersytet Gdański
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square">
                <Image
                  src="/PG_logo.png"
                  alt="Politechnika Gdańska Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium">
                Politechnika Gdańska
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-4/5 aspect-square">
                <Image
                  src="/WIP_logo.jpg"
                  alt="Koło Naukowe Work in Progress Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="mt-4 text-center font-medium">
                Koło Naukowe Work in Progress
              </p>
            </div>
          </div>
        </section>
                </>
        )
}
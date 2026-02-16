import Link from "next/dist/client/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Organizatorzy() {
  return (
    <>
      <section className="w-full lg:w-4/5 xl:w-3/5 mx-auto lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-inter tracking-wide uppercase font-semibold text-center text-primary py-4">
          Organizatorzy
        </h2>
        <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
          <div className="flex flex-col items-center justify-between h-54">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/Infiro_logo.png"
                alt="Infiro Logo"
                width={140}
                height={140}
                className=" h-full w-auto object-contain"
              />
            </div>
            <Link
              href="https://infiro.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary mt-2"
            >
              Strona
              <ArrowOutwardIcon
                fontSize="small"
                className="inline-block mb-1"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between h-54">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/UG_logo.png"
                alt="Uniwersytet Gdański Logo"
                width={300}
                height={300}
                className="h-full w-auto object-contain"
              />
            </div>
            <Link
              href="https://ug.edu.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary mt-2"
            >
              Strona
              <ArrowOutwardIcon
                fontSize="small"
                className="inline-block mb-1"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-between h-54">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/PG_logo.png"
                alt="Politechnika Gdańska Logo"
                width={300}
                height={300}
                className="h-full w-auto object-contain"
              />
            </div>
            <Link
              href="https://pg.edu.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary mt-2"
            >
              Strona
              <ArrowOutwardIcon
                fontSize="small"
                className="inline-block mb-1"
              />
            </Link>
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
            <Link 
              href="https://wip-ug.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary mt-2"
            >
              Strona
              <ArrowOutwardIcon
                fontSize="small"
                className="inline-block mb-1 ml-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

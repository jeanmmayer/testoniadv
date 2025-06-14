import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="bg-transparent">
      <ToastContainer />

      {/* Header */}
      <Header showLogo={false} />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="py-6 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <img src="/logo.png" />
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 montserrat">
                  Consultoria Jurídica com advogadas altamente capacitadas e
                  especializadas, prontas para lidar com suas necessidades
                  legais. Nós garantimos a representação mais eficaz, orientada
                  por princípios de ética e compromisso.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/#contato"
                    className="rounded-md bg-[#a27560] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55392d] transition"
                  >
                    Entre em Contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

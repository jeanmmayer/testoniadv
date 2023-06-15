import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Team from "@/components/Team";

export const goTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  return (
    <div className="bg-transparent">
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
                  <button
                    onClick={() => goTo("#contato")}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Entre em Contato
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Team />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

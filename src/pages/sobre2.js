import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Sobre() {
  return (
    <div>
      <Header />
      <div className="overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:gap-y-8 gap-12 limit justify-center">
            <div className="lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sobre Nós
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600 text-justify">
                Atuação com compromisso, segurança e eficiência. O Testoni
                Advogadas preza pela proximidade com o cliente, sendo sua
                atuação sempre orientada pelos princípios de ética e
                responsabilidade.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600 text-justify">
                O Testoni Advogadas atua em diferentes áreas do direito, tais
                como direito digital, direito de família, direito do consumidor,
                especialmente temas relacionados ao direito à saúde e planos de
                saúde, contratos e indenizações, entre outras áreas do direito
                civil, bem como direito trabalhista. Ainda, os serviços
                prestados abrangem tanto a parte consultiva quanto litigiosas,
                quando necessárias. Os atendimentos podem ser realizados de
                forma presencial ou online, o que permite atendimento de
                clientes e demandas de outras regiões, além de flexibilidade
                para reuniões fora do horário comercial.
              </p>
              <div className="mt-10 flex">
                <Link
                  href="/#contato"
                  className="rounded-md bg-[#a27560] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55392d] transition"
                >
                  Entre em Contato <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="">
              <img
                src="/direito.webp"
                alt=""
                className="w-100 rounded-2xl bg-gray-50 max-w-[500px] m-auto mt-20"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

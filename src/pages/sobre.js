import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Sobre() {
  return (
    <div>
      <Header />
      <div className="mx-auto py-24 pt-48 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
        <div className="flex gap-12 flex-wrap md:flex-nowrap">
          <div className="text-2xl p-4 border-4 border-[#a27560] rounded-lg text-justify text-gray-800 dark:text-gray-200">
            Atuação com compromisso, segurança e eficiência. O Testoni Advogadas
            preza pela proximidade com o cliente, sendo sua atuação sempre
            orientada pelos princípios de ética e responsabilidade.
          </div>
          <div className="text-justify">
            <div className="font-bold text-lg border-b-4 border-[#a27560] pb-4 text-gray-800 dark:text-gray-200">
              Sobre Nós
            </div>
            <div className="pt-4 text-gray-600 dark:text-gray-300">
              O Testoni Advogadas atua em diferentes áreas do direito, tais como
              direito digital, direito de família, direito do consumidor,
              especialmente temas relacionados ao direito à saúde e planos de
              saúde, contratos e indenizações, entre outras áreas do direito
              civil, bem como direito trabalhista. Ainda, os serviços prestados
              abrangem tanto a parte consultiva quanto litigiosas, quando
              necessárias. Os atendimentos podem ser realizados de forma
              presencial ou online, o que permite atendimento de clientes e
              demandas de outras regiões, além de flexibilidade para reuniões
              fora do horário comercial.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

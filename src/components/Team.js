import Link from "next/link";

const people = [
  {
    name: "Carina Testoni Greiffo",
    role: "",
    imageUrl: "/carina.png",
    bio: `<div style="text-align: justify">Carina Testoni Greiffo é advogada, inscrita na OAB/SC sob o nº 46.799, graduada pela Universidade da Região de Joinville - UNIVILLE, especialista em Direito Processual Civil, bem como em Direito Digital e Compliance, pelo Instituto Damásio de Direito. Possui experiência na advocacia, no contencioso e consultivo, nas áreas de direito civil e bancário. <br /> <br />Possui anos de experiência na advocacia, inclusive em funções de liderança e assessoramento jurídico, que contribuem para uma visão sistêmica dos processos, com desempenho proativo e diligente em projetos de consultoria jurídica e em processos judiciais litigiosos. <br /> <br /> Seu interesse por inovação e tecnologia a coloca por dentro das soluções seguras e estratégias eficientes em sua atuação profissional.</div>`,
    linkedinUrl: "https://www.linkedin.com/in/carinatestonigreiffo/",
  },
  {
    name: "Thaís Cidral Testoni",
    role: "",
    imageUrl: "/thais.png",
    bio: `<div style="text-align: justify">Thaís Cidral Testoni é advogada, inscrita na OAB/SC sob o nº 47.213, graduada pela Universidade da Região de Joinville - UNIVILLE, especialista em Direito Societário e Empresarial pela Faculdade CESUSC e MBA em Gestão Empresarial pela Universidade Positivo. Possui experiência na advocacia, especialmente no contencioso, nas áreas de direito privado e público. <br /> <br />Durante a sua trajetória acadêmica, participou do programa de intercâmbio na Faculdade de Direito da Universidade de Coimbra/PT, além de ter participado da 20ª Edição da Competição de Julgamento Simulado do Sistema Interamericano de Direitos Humanos na American University - Washington College of Law, obtendo premiação de Melhor Memorial do Estado em Língua Portuguesa. <br /> <br /> A dedicação em diferentes projetos e áreas do direito contribuem para uma atuação profissional dinâmica.</div>`,
    linkedinUrl:
      "https://www.linkedin.com/in/tha%C3%ADs-cidral-testoni-b63b4756/",
  },
];

export default function Team() {
  return (
    <div className="py-24 bg-[#a27560]" id="a-equipe">
      <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center montserrat w-full m-auto text-white pb-12">
            A Equipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients. */}
          </p>
        </div>
        <ul
          role="list"
          className=" grid max-w-xl text-white grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-16 xl:col-span-2 m-auto"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className=" w-full rounded-2xl object-cover min-h-[400px]"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-white">{person.role}</p>
              <div
                className="mt-4 text-base leading-7 text-white align-justify"
                dangerouslySetInnerHTML={{ __html: person.bio }}
              ></div>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <Link
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="white"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

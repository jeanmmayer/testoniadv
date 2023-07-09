import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";

const initialForm = {
  name: "",
  email: "",
  tel: "",
  message: "",
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    toast.success("E-mail enviado!");

    setLoading(false);
    setForm(initialForm);
  };

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 "
          id="contato"
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contato
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Entre em contato com o Testoni Advogadas. A equipe está pronta
              para ouvir e ajudar. Fale conosco hoje mesmo.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Rua Araranguá, 50 - América
                  <br />
                  Joinville - SC
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefone</span>
                  <svg
                    className="h-7 w-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 14C16.4 13.9 15.1 13.3 14.9 13.2C14.7 13.1 14.5 13.1 14.3 13.3C14.1 13.5 13.7 14.1 13.5 14.3C13.4 14.5 13.2 14.5 13 14.4C12.3 14.1 11.6 13.7 11 13.2C10.5 12.7 10 12.1 9.6 11.5C9.5 11.3 9.6 11.1 9.7 11C9.8 10.9 9.9 10.7 10.1 10.6C10.2 10.5 10.3 10.3 10.3 10.2C10.4 10.1 10.4 9.89998 10.3 9.79998C10.2 9.69998 9.7 8.49998 9.5 7.99998C9.4 7.29998 9.2 7.29998 9 7.29998H8.5C8.3 7.29998 8 7.49998 7.9 7.59998C7.3 8.19998 7 8.89998 7 9.69998C7.1 10.6 7.4 11.5 8 12.3C9.1 13.9 10.5 15.2 12.2 16C12.7 16.2 13.1 16.4 13.6 16.5C14.1 16.7 14.6 16.7 15.2 16.6C15.9 16.5 16.5 16 16.9 15.4C17.1 15 17.1 14.6 17 14.2L16.6 14ZM19.1 4.89998C15.2 0.999976 8.9 0.999976 5 4.89998C1.8 8.09998 1.2 13 3.4 16.9L2 22L7.3 20.6C8.8 21.4 10.4 21.8 12 21.8C17.5 21.8 21.9 17.4 21.9 11.9C22 9.29997 20.9 6.79998 19.1 4.89998ZM16.4 18.9C15.1 19.7 13.6 20.2 12 20.2C10.5 20.2 9.1 19.8 7.8 19.1L7.5 18.9L4.4 19.7L5.2 16.7L5 16.4C2.6 12.4 3.8 7.39998 7.7 4.89998C11.6 2.39998 16.6 3.69998 19 7.49998C21.4 11.4 20.3 16.5 16.4 18.9Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=554792107361"
                  >
                    +55 (47) 9.9210-7361
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:contato@testoniadvogadas.com.br"
                  >
                    contato@testoniadvogadas.com.br
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={submit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange(e)}
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => handleChange(e)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="tel"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Telefone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={form.tel}
                    onChange={(e) => handleChange(e)}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Mensagem
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange(e)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-[#a27560] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55392d] transition"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

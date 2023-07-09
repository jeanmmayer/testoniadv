import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const [post, setPost] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [postDate, setPostDate] = useState("");
  const { isReady } = useRouter();

  const load = () => {
    const slug = router.query.slug;

    fetch("/api/blog/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: slug,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data[0]);
        const postDate = new Date(data[0].dataDePublicacao).toLocaleDateString(
          "pt-BR"
        );
        setPostDate(postDate);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isReady) {
      load();
    }
  }, [isReady]);

  return (
    <div className="min-h-screen">
      <Header showLogo={true} />
      {loading && <div className="text-center pt-36 w-full">Carregando...</div>}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blog
            </h2>
            <div className="mt-12 pb-12">
              <article
                key={post?.id}
                className="flex max-w-xl flex-col items-start justify-between border-t pt-12 mb-12 cursor-pointer p-4"
              >
                {post?.fotoDeCapa?.url && (
                  <img
                    src={post?.fotoDeCapa?.url}
                    className="h-48 mb-5 rounded"
                  />
                )}
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{postDate}</time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post?.titulo}
                  </h3>
                  <pre
                    className="mt-5 text-sm leading-6 text-gray-600 whitespace-pre-wrap	"
                    dangerouslySetInnerHTML={{ __html: post?.conteudo?.html }}
                  ></pre>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post?.fotoAutor?.url && (
                    <img
                      src={post?.fotoAutor?.url}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                  )}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post?.autor}
                    </p>
                    <p className="text-gray-600">Advogada</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

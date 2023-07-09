export default async function handler(req, res) {
  try {
    await fetch(process.env.HYGRAPH_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            blogPosts {
              id
              autor
              dataDePublicacao
              nomeDaUrl
              titulo
              preview
              fotoAutor {
                url
              }
              fotoDeCapa {
                url
              }
              conteudo {
                html
              }
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        res.json(data.data.blogPosts);
      });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}

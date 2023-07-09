import axios from "axios";

export default async function handler(req, res) {
  const { slug } = req.body;

  try {
    await axios({
      url: process.env.HYGRAPH_API_URL,
      method: "post",
      data: {
        query: `
        {
          blogPosts(where: {nomeDaUrl: "${slug}"}) {
            id
            autor
            dataDePublicacao
            nomeDaUrl
            titulo
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
      },
    }).then((result) => {
      res.json(result.data.data.blogPosts);
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}

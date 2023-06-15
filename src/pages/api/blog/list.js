import axios from "axios";

export default async function handler(req, res) {
  try {
    await axios({
      url: process.env.HYGRAPH_API_URL,
      method: "post",
      data: {
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
      },
    }).then((result) => {
      console.log("retornou", result.data.data);
      res.json(result.data.data.blogPosts);
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}

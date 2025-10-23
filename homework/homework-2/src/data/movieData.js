const movieData = [
  {
    id: 1,
    cover:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FqTEApvOJ4H7pGWcwDMqr9OcQ5sc.jpg&f=1&nofb=1&ipt=fc4677217b7429ad9bd9a04766c26d15be85ab5f034e951b312cba89b61cc3d9",
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    synopsis:
      "Andy Dufresne é condenado injustamente a prisão perpétua e enviado para Shawshank. Lá, cria amizade com Red e, apesar da violência e corrupção, mantém a esperança viva, mostrando que a liberdade pode existir mesmo atrás das grades.",
    actors: [
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F32%2F198332-050-7D26EAB8%2FTim-Robbins-2014.jpg&f=1&nofb=1&ipt=ab36380b84d8768e0edd414a3d90e21383f2f72445f7de03f0f8ee1e5cf614f2",
        name: "Tim Robbins",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1640785.jpg&f=1&nofb=1&ipt=6a2af3c8b2cc01617bfed9890ed4a0ec905b916b7081647a596006e8a3040e11",
        name: "Morgan Freeman",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjUyZDQ0NjktZmM5ZS00NzcxLTliMWYtNWUxNDcyMmExZjU0XkEyXkFqcGdeQXVyMTE1MjA4NzM%40._V1_.jpg&f=1&nofb=1&ipt=1bb5f02c60694e063491235673cac8dd3dcbad46b9ef39c42f3a1343ea1b15f9",
        name: "Bob Gunton",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.mubicdn.net%2Fimages%2Fcast_member%2F38956%2Fcache-96082-1408428349%2Fimage-w856.jpg%3Fsize%3D800x&f=1&nofb=1&ipt=20328a5a3a3f0c0ae3db1f669411f960f7a733be1716c490a7977096d0874bd4",
        name: "William Sadler",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbr.web.img3.acsta.net%2Fpictures%2F17%2F10%2F11%2F11%2F46%2F0693330.jpg&f=1&nofb=1&ipt=fb5ace92e883138c3d17062c6dea7479a9509d56f1bef77aa64d36e3599ef12e",
        name: "Clancy Brown",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.purepeople.com%2Farticles%2F8%2F50%2F59%2F8%2F%40%2F368684-gil-bellows-950x0-2.jpg&f=1&nofb=1&ipt=036cd65fce7c1645b99b9370ffc78d8f4cb6693ddb7b220620d4adf0d0b5ad02",
        name: "Gil Bellows",
      },
    ],
  },
  {
    id: 2,
    cover:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2F3bhkrj58Vtu7enYsRolD1fZdja1.jpg&f=1&nofb=1",
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    synopsis:
      "A poderosa família Corleone tenta manter o controlo do seu império do crime organizado. Quando o patriarca Vito Corleone é alvo de um atentado, o seu filho Michael é forçado a assumir o comando.",
    actors: [
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-0c6gStVffXY%2FVGOam_hnNRI%2FAAAAAAAAROg%2FUqOgB9H8b90%2Fs1600%2FMarlon-Brando-23.jpg&f=1&nofb=1&ipt=95c6eab43ea06660ad4b8b2731e5b18c452a6cb8e78b612f2bba0b7e12a99e13",
        name: "Marlon Brando",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_FMjpg_UX1000_.jpg&f=1&nofb=1&ipt=2552f5b99315fa5388e50e55f5365d35665f5d1ba02fe05a816ffcef88c28025",
        name: "Al Pacino",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.entertainment.ie%2Fperson%2Fw780_bGyOCCOIgcIyKjOGLoXoyp0XWHf.jpg&f=1&nofb=1&ipt=64b8d3a9254044b6e2f62b110fa4aecc5145d217d54a6a61a4b186b8f25bce3e",
        name: "James Caan",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faffairpost.com%2Fwp-content%2Fuploads%2F2024%2F12%2F14610529_6ebea572-9584-4431-bf25-d22b6ee929df.jpeg&f=1&nofb=1&ipt=91762ae1f28ac186e4c7d5fc567acbd907af52c45a25bcba9d314e13308cf42a",
        name: "Richard S. Castellano",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTAyNjcwNjE5MjZeQTJeQWpwZ15BbWU4MDUxMzMzNjAy._V1_.jpg&f=1&nofb=1&ipt=a07d24328d67aaebb172c81b700d53fed5c93f86206ef25377cf101756d532ba",
        name: "Robert Duvall",
      },
      {
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Fw600_and_h900_bestv2%2Ftwzaqv1ymkWYKHFF3kbvwaTIrFO.jpg&f=1&nofb=1&ipt=92cfd6364fde9917f00140fa65d103831d0278b89c08b93c1035837961d03dfb",
        name: "RSterling Hayden",
      },
    ],
  },
];

export default movieData;

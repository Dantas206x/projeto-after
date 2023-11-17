const products = [
  {
    id: 1,
    name: "Ingresso 27/9",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 27,
    cdesc: "Lorem Ipsum é simplesmente uma simulação ",
    image: "https://pbs.twimg.com/media/FqPvhb3WYAwUZun?format=jpg&name=medium",
    images: [
      "https://pbs.twimg.com/media/FqPvhb3WYAwUZun?format=jpg&name=medium",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
     
    ],
    url: "https://www.punkykills.com/",
    rating: [],
  },
  {
    id: 2,
    name: "Ingresso 15/12",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 27,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image: "https://pbs.twimg.com/media/FqPwuCgX0AA_D2q?format=jpg&name=medium",
    images: [
      "https://pbs.twimg.com/media/FqPvhb3WYAwUZun?format=jpg&name=medium",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 3,
    name: "Copo",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. ",
    price: 45.99,
    cdesc: "Lorem Ipsum é simplesmente uma simulação ",
    image:
      "https://static3.tcdn.com.br/img/img_prod/432031/copo_de_cerveja_termico_stanley_sem_tampa_adventure_matte_black_473ml_13148_2_20200416111118.jpg",
    url: "https://www.punkykills.com/",
    images: [
      "https://static3.tcdn.com.br/img/img_prod/432031/copo_de_cerveja_termico_stanley_sem_tampa_adventure_matte_black_473ml_13148_2_20200416111118.jpg",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 4,
    name: "camiseta preta",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. ",
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    price: 80,
    image:
      "https://i.etsystatic.com/16540450/r/il/f65964/1863163275/il_1588xN.1863163275_ri04.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.0Fmp39Oi21Jy6QVKaliSUwHaHx?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 5,
    name: "chaveiro",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. ",
    price: 120,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://lojavivara.vtexassets.com/arquivos/ids/210895/Chaveiro-Masculino-Couro-Preto-m1530043_set.jpg?v=637867858322500000",
    images: [
      "https://lojavivara.vtexassets.com/arquivos/ids/210895/Chaveiro-Masculino-Couro-Preto-m1530043_set.jpg?v=637867858322500000",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 6,
    name: "Camiseta preta2",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71j-QiEUtHL._AC_UL1500_.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.klC1DHBaEHWKjq4-tlksOgDlEs?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 7,
    name: "Moletom",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. ",
    price: 120,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://2.bp.blogspot.com/-qXBzSTVdhEc/V1tkn_K63lI/AAAAAAAAAvI/pQ5RWx24Qag2LGB2cauU-n6EyS3gtOG9gCLcB/s1600/20160609_163809.jpg",
    images: [
      "https://2.bp.blogspot.com/-qXBzSTVdhEc/V1tkn_K63lI/AAAAAAAAAvI/pQ5RWx24Qag2LGB2cauU-n6EyS3gtOG9gCLcB/s1600/20160609_163809.jpg",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 8,
    name: "camiseta preta2",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://www.silcastudio.com/622-large_default/camiseta-unisex-punk-rock.jpg",
    images: [
      "https://http2.mlstatic.com/kit-c30-camisetas-de-marcas-r-28000-cada-unidade-r-933-D_NQ_NP_859711-MLB20644135796_032016-F.jpg",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 9,
    name: "boné",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://th.bing.com/th/id/OIP.C4vT_hJkp4NneSp35VSsQAHaHr?pid=ImgDet&rs=1",
    images: [
      "https://th.bing.com/th/id/OIP.C4vT_hJkp4NneSp35VSsQAHaHr?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 10,
    name: "Caneca",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 120,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://th.bing.com/th/id/OIP.70iiOl8He1Z8DbPoTSwd9QHaHa?pid=ImgDet&rs=1",
    images: [
      "https://th.bing.com/th/id/OIP.70iiOl8He1Z8DbPoTSwd9QHaHa?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 11,
    name: "pulseira",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://i5.walmartimages.com/asr/dbb92e14-52d5-4003-85bc-6075a0a92bf1.1c6dfec92275dd8a57b3559b052c3ded.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.1q2hRANlZfaMINs2ljSx_QHaF-?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 12,
    name: "pulseira",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://i5.walmartimages.com/asr/dbb92e14-52d5-4003-85bc-6075a0a92bf1.1c6dfec92275dd8a57b3559b052c3ded.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.1q2hRANlZfaMINs2ljSx_QHaF-?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 13,
    name: "Caneca",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 120,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://th.bing.com/th/id/OIP.70iiOl8He1Z8DbPoTSwd9QHaHa?pid=ImgDet&rs=1",
    images: [
      "https://th.bing.com/th/id/OIP.70iiOl8He1Z8DbPoTSwd9QHaHa?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 14,
    name: "pulseira",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://i5.walmartimages.com/asr/dbb92e14-52d5-4003-85bc-6075a0a92bf1.1c6dfec92275dd8a57b3559b052c3ded.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.1q2hRANlZfaMINs2ljSx_QHaF-?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 15,
    name: "pulseira",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://i5.walmartimages.com/asr/dbb92e14-52d5-4003-85bc-6075a0a92bf1.1c6dfec92275dd8a57b3559b052c3ded.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.1q2hRANlZfaMINs2ljSx_QHaF-?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
  {
    id: 16,
    name: "pulseira",
    desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    price: 80,
    cdesc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo",
    image:
      "https://i5.walmartimages.com/asr/dbb92e14-52d5-4003-85bc-6075a0a92bf1.1c6dfec92275dd8a57b3559b052c3ded.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.1q2hRANlZfaMINs2ljSx_QHaF-?pid=ImgDet&rs=1",
      "https://http2.mlstatic.com/camiseta-lacoste-live-masculina-original-polo-camiseta-aj-D_NQ_NP_945711-MLB20615948353_032016-F.jpg",
      "https://th.bing.com/th/id/OIP.M4BvPAJlPA_U22-Ek2ZauQHaJa?pid=ImgDet&rs=1",
      "https://static.netshoes.com.br/produtos/camisa-polo-tng-piquet-masculina/52/NUJ-0005-852/NUJ-0005-852_zoom1.jpg?ts=1592841126&",
      "https://marcasjerez.com/wp-content/uploads/2021/07/cbd0a7d8-1536x1536.jpg",
    ],
    url: "https://www.punkykills.com/",
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: "Excelente produto, estou muito satisfeito!",
      },
    ],
  },
];

module.exports = products;

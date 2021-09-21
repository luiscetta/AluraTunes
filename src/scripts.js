let musicList = [
  {
    cover:
      "https://m.media-amazon.com/images/I/51+M3eO02WS._AC_SY450_.jpg",
    link:
      "https://www.youtube.com/watch?v=8DyziWtkfBw",
    title:
      "Red Hot Chilli Peppers - Can't Stop"
  },
  {
    cover:
      "https://img.israbox.com/uploads/posts/2018-02/1519116623_ben-howard-i-forget-where-we-were.jpg",
    link:
      "https://www.youtube.com/watch?v=mI6K9HR4pwk",
    title:
      "Ben Howard - Small Things"
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/e/ea/Cheshire_Cat.jpg",
    link:
      "https://www.youtube.com/watch?v=jRFAXBvBZdQ",
    title:
      "Blink 182 - Carousel"
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/3/35/FooFightersGreatestHits.jpg/220px-FooFightersGreatestHits.jpg",
    link:
      "https://www.youtube.com/watch?v=I7rCNiiNPxA&list=OLAK5uy_lCWfXZwyg7DiLTSVOJus_r9URmfF5Scjk",
    title:
      "Foo Fighters - Monkey Wrench"
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/a/a4/Kanye_West_-_Jesus_Is_King.png",
    link:
      "https://www.youtube.com/watch?v=NpQVjgBYcac",
    title:
      "Kanye West - Closed on Sunday"
  },
  {
    cover:
      "data:image/jpeg;base64,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",
    link:
      "https://www.youtube.com/watch?v=uLS-WE4K8q0",
    title:
      "Lecrae - Coming In Hot"
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Syre_-_%C3%81lbum.jpg/220px-Syre_-_%C3%81lbum.jpg",
    link:
      "https://www.youtube.com/watch?v=cmc8q2dcIMs",
    title:
      "Jaden Smith - Icon"
  },
  {
    cover:
      "https://cdns-images.dzcdn.net/images/cover/a07217215143d39c9b7854fffb7ecc1c/350x350.jpg",
    link:
      "https://www.youtube.com/watch?v=t_OHvffAOmA",
    title:
      "Bring Me The Horizon - Shadow Moses"
  },
];


for (let index = 0; index < musicList.length; index++) {
  backgroundList.innerHTML += "<a href='" + musicList[index].link + "'" + "target='_blank'" + "'>" + "<img src='" + musicList[index].cover + "'>" + "<p>" + musicList[index].title + "</p>" + "</a>";

}

function addNewTracks() {
  let cover = document.getElementById("form-cover").value;
  let link = document.getElementById("form-link").value;
  let title = document.getElementById("form-title").value;

  if (cover.endsWith(".jpg")) {
    backgroundList.innerHTML += "<a href='" + link + "'" + "target='_blank'" + "'>" + "<img src='" + cover + "'>" + "<p>" + title + "</p>" + "</a>";

    musicList.push({
      cover: cover, link: link, title: title
    })
  }
  else {
    alert("URL da imagem está inválido.")
    console.error("URL da imagem está inválido.")
  }

  document.getElementById("form-title").value = "";
  document.getElementById("form-cover").value = "";
  document.getElementById("form-link").value = "";
}


  // if para n deixar adicionar filmes repetidos
  // campo de pesquisa em que ao pesquisar aparece a imagem do filme/album

const peliculas = [
    { title: "Jurassic Park", trailer: "https://www.youtube.com/embed/lc0UehYemQA" },
    { title: "Inception", trailer: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { title: "Avatar", trailer: "https://www.youtube.com/embed/cRdxXPV9GNQ" },
    { title: "The Dark Knight", trailer: "https://www.youtube.com/embed/EXeTwQWrcwY" },
    { title: "Interstellar", trailer: "https://www.youtube.com/embed/zSWdZVtXT7E" },
    { title: "Gladiator", trailer: "https://www.youtube.com/embed/owK1qxDselE" },
   { title: "Titanic", trailer: "https://www.youtube.com/embed/2e-eXJ6HgkQ" },
    {  title: "The Lord of the Rings", trailer: "https://www.youtube.com/embed/V75dMMIW2B4" },
  { title: "Forrest Gump", trailer: "https://www.youtube.com/embed/bLvqoHBptjg" },
    { title: "The Shawshank Redemption", trailer: "https://www.youtube.com/embed/6hB3S9bIaco" },
  { title: "The Godfather", trailer: "https://www.youtube.com/embed/sY1S34973zA" },
  { title: "Pulp Fiction", trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY" },
  { title: "The Matrix", trailer: "https://www.youtube.com/embed/m8e-FF8MsqU" },
  { title: "Inglourious Basterds", trailer: "https://www.youtube.com/embed/KnrRy6kSFF0" },
  { title: "The Departed", trailer: "https://www.youtube.com/embed/auYbpnEwBBg" },
  ];
  
  function buscarPeliculas() {
    const input = document.getElementById("searchInput");
    const query = input.value.toLowerCase();
    const resultsList = document.getElementById("resultsList");
  
    if (query === "") {
        resultsList.innerHTML = "";
        return; 
      }
    resultsList.innerHTML = "";
  

    const matches = peliculas.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(query)
    );
  
    
    matches.forEach((pelicula) => {
      const listItem = document.createElement("li");
      listItem.textContent = pelicula.title;
      listItem.addEventListener("click", function () {
        mostrarTrailer(pelicula.trailer);
      });
      resultsList.appendChild(listItem);
    });
  }
  
  function mostrarTrailer(trailerUrl) {
    const trailerFrame = document.getElementById("trailerFrame");
    trailerFrame.src = trailerUrl;
  }
  
  document.getElementById("searchInput").addEventListener("input", buscarPeliculas);
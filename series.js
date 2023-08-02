const series = [
    { title: "Stranger Things", trailer: "https://www.youtube.com/embed/b9EkMc79ZSU" },
    { title: "Game of Thrones", trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E" },
    { title: "Breaking Bad", trailer: "https://www.youtube.com/embed/HhesaQXLuRY" },
    { title: "Friends", trailer: "https://www.youtube.com/embed/hDNNmeeJs1Q" },
    { title: "Black Mirror", trailer: "https://www.youtube.com/embed/2bVik34nWws" },
    { title: "The Crown", trailer: "https://www.youtube.com/embed/vLXYfgpqb8A" },
    { title: "The Mandalorian", trailer: "https://www.youtube.com/embed/aOC8E8z_ifw" },
    { title: "Stranger Things", trailer: "https://www.youtube.com/embed/b9EkMc79ZSU" },
    { title: "Breaking Bad", trailer: "https://www.youtube.com/embed/HhesaQXLuRY" },
    { title: "The Witcher", trailer: "https://www.youtube.com/embed/ndl1W4ltcmg" },
    { title: "Money Heist", trailer: "https://www.youtube.com/embed/p_PJbmrX4uk" },
    { title: "Narcos", trailer: "https://www.youtube.com/embed/U7elNhHwgBU" },
    { title: "Sherlock", trailer: "https://www.youtube.com/embed/9UcR9iKArd0" },
    { title: "The Office", trailer: "https://www.youtube.com/embed/t2by2zCI7Tg" },
    { title: "Westworld", trailer: "https://www.youtube.com/embed/0mX3nrVMxFc" },
  ];
  
  function buscarSeries() {
    const input = document.getElementById("searchInput");
    const query = input.value.toLowerCase();
    const resultsList = document.getElementById("resultsList");
  
    if (query === "") {
        resultsList.innerHTML = "";
        return; 
      }
    
      resultsList.innerHTML = "";
  
  
    const matches = series.filter((serie) =>
      serie.title.toLowerCase().includes(query)
    );
  
    matches.forEach((serie) => {
      const listItem = document.createElement("li");
      listItem.textContent = serie.title;
      listItem.addEventListener("click", function () {
        mostrarTrailer(serie.trailer);
      });
      resultsList.appendChild(listItem);
    });
  }
  
  function mostrarTrailer(trailerUrl) {
    const trailerFrame = document.getElementById("trailerFrame");
    trailerFrame.src = trailerUrl;
  }

 
  
  document.getElementById("searchInput").addEventListener("input", buscarSeries);
  
  
  
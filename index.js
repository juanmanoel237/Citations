const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });

  fetch("https://picsum.photos/1500/1000").then((res) => {
    document.getElementById("pic").innerHTML = `<img src=${res.url} />`;
  });
};

quote.addEventListener("click", () => getQuote());

const search = document.getElementById("search");
const submit_button = document.getElementById("submit");

const getPokemonData = async (query) => {
  console.log(query);
  const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
  const res = await fetch(url);

  if (res.status === 404 || res.statusText == "Not Found") {
    document.getElementById("error").classList.add("visible");
    document.getElementById("error").classList.remove("invisible");

    setTimeout(()=>{
      document.getElementById("error").classList.remove("visible");
      document.getElementById("error").classList.add("invisible");
    },2000)
    return;
  }

  const pokemonData = await res.json();
  const types = [];
  document
    .getElementById("poke_img")
    .setAttribute("src", pokemonData.sprites.front_default);
  pokemonData.types.map((type) => {
    types.push(type.type.name);
  });
  const formattedTypes = types.join("/");
  document.getElementById("poke_types").innerHTML = `Types: ${formattedTypes}`;
  const stats = document.getElementById("poke_stats").children;

  for (var i = 0; i < stats.length; i++) {
    stats[i].innerHTML =
      pokemonData.stats[i].stat.name + ": " + pokemonData.stats[i].base_stat;
  }
};

submit_button.addEventListener("click", () => getPokemonData(search.value));

// document.getElementById("poke_img").setAttribute("src", pokemonData.sprites.front_default);
// document.getElementById("")

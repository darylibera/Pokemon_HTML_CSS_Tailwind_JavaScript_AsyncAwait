const resetCard = () => {
  document.querySelector("#pokemon").innerHTML = `<article
            class="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyzju-j4SeCeblby7-l0dNuq1DiHNGawq5mIcWK9GyawNZbCCyopoqeU&s=10')] bg-cover min-h-90 min-w-30 max-w-60 grow rounded-sm border-2 border-[gold]/30 outline-2 outline-[gold] outline-offset-4 flex flex-col items-center justify-evenly px-2 relative"
          > 
            <div style="
            font-family: 'Bubblegum Sans', sans-serif;
                clip-path: polygon(
                  2% 50%,
                  8% 15%,
                  15% 15%,
                  15% 0%,
                  85% 0%,
                  85% 15%,
                  92% 15%,
                  98% 50%,
                  92% 85%,
                  100% 85%,
                  85% 85%,
                  85% 100%,
                  15% 100%,
                  15% 85%,
                  8% 85%
                );
              "
              class="w-full font-bold flex justify-center items-center h-8 text-[14px] bg-linear-to-t from-black via-[red] to-black border-1 border-[gold] text-[gold] mb-[-12px] tracking-wider z-4 text-shadow-[0_0_2px_black] inset-shadow-[0px_0px_10px_red]"
              id="pokemonName"
            > 
              NAME
            </div>
            <div
              class="bg-black h-35 w-full rounded-xl overflow-hidden flex items-end justify-center px-1 pt-1 border-1 border-[gold] relative"
              id="image"
            >
              <img
                class="h-full w-full object-contain z-5"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df7u62z-c5464c1a-1712-465b-b903-5101339aefa2.png/v1/fill/w_894,h_894/transparent_poke_ball_by_ace_zeroartic_df7u62z-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiIvZi9jODYxZDMwNi04ZjQyLTQ4NjQtYWIyZS02MWEyNzE1MThjOGEvZGY3dTYyei1jNTQ2NGMxYS0xNzEyLTQ2NWItYjkwMy01MTAxMzM5YWVmYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Hd2uFeMs61QGuhhpreFlcPR-m6vlzNlccLm15RYG4DU"
                alt="pokemon"
              />
             <div class=" absolute top-1 left-1 bg-linear-to-t from-[white] to-[red] rounded-full text-[9px] tracking-wide text-[black]   font-bold leading-none px-1  z-1">TYPE</div>

            <div class="absolute top-0 right-0 z-3 bg-linear-to-tl from-[black] via-[green] to-[gold] h-5 w-[34px] rounded-[0_10px] text-sm flex items-center justify-evenly px-[1px] text-white border-1 border-[gold] text-[11px] leading-none italic me-[-1px] mt-[-1px] ">0</div>

            </div>
            
            <div
              class="w-full min-h-10 rounded-lg border-2 border-[gold] flex justify-evenly items-center text-white text-[12px] bg-linear-55 from-black/0 via-[green] to-black/0 divide-x-1 divide-[gold]"
            >
              <div class="w-full text-center" id="height">
                <i class="fa-solid fa-up-long text-[gold]"></i> Height
              </div>

              <div class="w-full text-center" id="ability">
                <i class="fa-brands fa-superpowers text-[gold]"></i> Ability
              </div>
            </div>
            <div
              style="
                clip-path: polygon(
                  0% 5%,
                  5% 5%,
                  4% 0%,
                  96% 0%,
                  95% 5%,
                  100% 5%,
                  100% 95%,
                  95% 95%,
                  96% 100%,
                  4% 100%,
                  5% 95%,
                  0% 95%
                );
              "
              class="w-full min-h-30 rounded-lg text-center text-sm bg-[white]/90  pb-1 border-2 border-[gold]"
            >
              <h6 class="my-1 text-green-700 text-shadow-[0_1px_1px_black] ">
                ---- STATS ----
              </h6>
              <div class="grid grid-cols-14 gap-1 h-20">
                <div
                  class="h-full flex flex-col justify-between items-center col-span-2"
                >
                  <div class="flex items-center">
                    <i class="fa-solid fa-heart text-[red]"></i>
                  </div>
                  <div class="flex items-center grid-col-3">
                    <i class="fa-solid fa-hand-fist text-orange-500"></i>
                  </div>
                  <div class="flex items-center grid-col-3">
                    <i class="fa-solid fa-shield text-green-700"></i>
                  </div>
                  <div class="flex items-center grid-col-3">
                    <i class="fa-solid fa-person-running text-yellow-400"></i>
                  </div>
                </div>
                <div
                  class="flex flex-col justify-evenly gap-3 items-center col-span-10"
                  id="chart"
                >
                  <div
                    class="flex items-center bg-black h-2 w-full rounded-full"
                  >
                    <div class="bg-[red] w-[0%] h-full rounded-full"></div>
                  </div>
                  <div
                    class="flex items-center bg-black h-2 w-full rounded-full"
                  >
                    <div class="bg-orange-500 w-[0%] h-full rounded-full"></div>
                  </div>
                  <div
                    class="flex items-center bg-black h-2 w-full rounded-full"
                  >
                    <div class="bg-green-700 w-[0%] h-full rounded-full"></div>
                  </div>
                  <div
                    class="flex items-center bg-black h-2 w-full rounded-full"
                  >
                    <div class="bg-yellow-400 w-[0%] h-full rounded-full"></div>
                  </div>
                </div>
                <div
                  class="col-span-2 flex flex-col justify-between items-center gap-1 leading-none"
                  id="percentage"
                >
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </article>`;
};
resetCard();

const home = "https://pokeapi.co/api/v2/pokemon/";
let previousPage = null;
let nextPage = null;
const feetVal = 3.28084;
const maxStats = { hp: 255, attack: 190, defence: 250, speed: 200 };
let pokemonNames = [];
let searchHistory =
  JSON.parse(localStorage.getItem("pokemonSearchHistory")) || [];

const getData = async (page) => {
  try {
    let apiResponse = await fetch(`${page}`);
    if (!apiResponse.ok) {
      let cards = document.querySelector("#cards");
      cards.className =
        " w-full h-full rounded-[10px] bg-black flex justify-center items-center font-sans font-bold text-[30px] text-[grey]";
      cards.innerText = "!404 Page Not Found";
      return;
    }
    apiResponse = await apiResponse.json();
    let results = apiResponse.results;
    nextPage = apiResponse.next;
    previousPage = apiResponse.previous;

    let cards = document.querySelector("#cards");
    cards.innerHTML = "";
    results.map(
      (each) =>
        (cards.innerHTML += `<button onclick="onNameClick(this)" class=" py-2 px-0 sm:p-2 rounded-[10px] bg-linear-to-b from-yellow-300/30 via-black to-black mb-2 text-yellow-300 text-center cursor-pointer  hover:bg-yellow-300 sm:hover:text-xl hover:scale-y-1.3 transition-all ease-in-out duration-200
             focus:bg-[green] focus:text-[green] focus:border-b-1 focus:border-[green] focus:text-[15px] sm:focus:text-xl" >
            ${each.name}
        </button>`),
    );
  } catch (error) {
    console.log(error);
  }
};
getData(home);

const loadingScreen = () => {
  const loadingCard = document.querySelector("#image");
  loadingCard.innerHTML = `  <video class="w-1/2 object-center" muted autoplay loop playsinline onloadedmetadata="this.playbackRate=3.0" src="./assets/loading.mp4"></video>`;
};

const historyStore = (search) => {
  if (searchHistory.some((each) => each === search)) {
    searchHistory = searchHistory.filter((eachName) => eachName != search);
  }
  searchHistory.unshift(search);
  localStorage.setItem("pokemonSearchHistory", JSON.stringify(searchHistory));
};

const cardDisplay = async (search) => {
  try {
    hideSuggestions();
    loadingScreen();
    let apiResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${search}`,
    );
    if (!apiResponse.ok) {
      resetCard();
      alert("Enter A Listed Name");
      return;
    }
    apiResponse = await apiResponse.json();
    const imageChoosing = () => {
      const image1 =
        apiResponse.sprites.versions["generation-ix"].champions.front_default;
      const image2 =
        apiResponse.sprites.versions["generation-viii"]["sword-shield"]
          .front_default;
      const image3 =
        apiResponse.sprites.versions["generation-viii"][
          "brilliant-diamond-shining-pearl"
        ].front_default;
      const image4 =
        apiResponse.sprites.versions["generation-ix"]["legends-za"]
          .front_default;
      const image5 =
        apiResponse.sprites.versions["generation-ix"]["scarlet-violet"]
          .front_default;
      const image6 =
        apiResponse.sprites.versions["generation-viii"]["legends-arceus"]
          .front_default;
      const defaultImage =
        apiResponse.sprites.other["official-artwork"].front_default;

      if (image1) {
        return image1;
      } else if (image2) {
        return image2;
      } else if (image3) {
        return image3;
      } else if (image4) {
        return image4;
      } else if (image5) {
        return image5;
      } else if (image6) {
        return image6;
      } else if (defaultImage) {
        return defaultImage;
      } else {
        return "https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png";
      }
    };

    document.getElementById("image").innerHTML = `<img
                class="h-full w-full object-contain z-2"
                src="${imageChoosing()}"
                alt="pokemon"
              />
             <div class=" absolute top-1 left-1 bg-linear-to-t from-[white] to-[red] rounded-full text-[9px] tracking-wide text-[black]   font-bold leading-none px-1 z-1">${apiResponse.types[0]?.type?.name.toUpperCase() || "unknown"}</div> 

             <div class="absolute top-0 right-0 z-3 bg-linear-to-tl from-[black] via-[green] to-[gold] h-5 w-[34px] rounded-[0_10px] text-sm flex items-center justify-evenly px-[1px] text-white border-1 border-[gold] text-[11px] leading-none italic me-[-1px] mt-[-1px] ">${apiResponse.id}</div>`;

    document.querySelector("#pokemonName").innerText = apiResponse.name;
    document.querySelector("#height").innerHTML =
      `<i class="fa-solid fa-up-long text-[gold] "></i> ${((apiResponse.height / 10) * feetVal).toFixed(2)} <span class="text-[gold] text-[15px]">ft</span>`;
    document.querySelector("#ability").innerHTML =
      `<i class="fa-brands fa-superpowers text-[gold] "></i> ${apiResponse.abilities[0]?.ability?.name || "unknown"}`;
    document.querySelector("#chart").innerHTML =
      `<div class="flex items-center bg-black h-2 w-full rounded-full" >
                        <div class="bg-[red] w-[${(apiResponse.stats[0].base_stat / maxStats.hp) * 100}%] h-full rounded-full "></div>
                        </div>
            <div class="flex items-center bg-black h-2 w-full rounded-full">
                            <div class="bg-orange-500 w-[${(apiResponse.stats[1].base_stat / maxStats.attack) * 100}%] h-full rounded-full "></div>
                        </div>
            <div class="flex items-center bg-black h-2 w-full rounded-full">
                            <div class="bg-green-700 w-[${(apiResponse.stats[2].base_stat / maxStats.defence) * 100}%] h-full rounded-full "></div>
                        </div>
            <div class="flex items-center bg-black h-2 w-full rounded-full">
                            <div class="bg-yellow-400 w-[${(apiResponse.stats[5].base_stat / maxStats.speed) * 100}%] h-full rounded-full "></div>
                        </div>`;

    document.querySelector("#percentage").innerHTML =
      `<span>${apiResponse.stats[0].base_stat}</span>
                  <span>${apiResponse.stats[1].base_stat}</span>
                  <span>${apiResponse.stats[2].base_stat}</span>
                  <span>${apiResponse.stats[5].base_stat}</span>`;

    historyStore(apiResponse.name);
  } catch (error) {
    console.log(error);
    resetCard()
  }
};

const nextBtnClick = () => {
  if (nextPage) {
    getData(nextPage);
  }
};

const previousBtnClick = () => {
  if (previousPage) {
    getData(previousPage);
  }
};

const onSearchBtnClick = async () => {
  try {
    let search = document.querySelector("#search").value;
    if (!search) {
      return;
    }
    cardDisplay(search);
  } catch (error) {
    console.log(error);
  }
};

const onNameClick = (buttonName) => {
  let btnName = buttonName.innerText;
  cardDisplay(btnName);
};

const loadPokiNames = async () => {
  try {
    let searchApi = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1351",
    );
    searchApi = await searchApi.json();
    pokemonNames = searchApi.results.map((each) => each.name);
  } catch (error) {
    console.log(error);
  }
};
loadPokiNames();

const suggestionClick = (name) => {
  document.querySelector("#search").value = name.innerText;
  cardDisplay(name.innerText);
};


const hideSuggestions = () => {
  try {
    setTimeout(() => {
      document.querySelector("#search").value = "";
      const suggestionsList = document.getElementById("suggestions");
      suggestionsList.className = "hidden";
    }, 300);
  } catch (error) {
    console.log(error);
  }
};

const showSuggestions = (searching) => {
  try {
    const searchName = searching.target.value.toLowerCase().trim();
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";
    suggestionsList.classList =
      "absolute scrollbar-none max-w-[300px] top-full translate-y-1 left-0 right-0 list-none text-yellow-500 bg-black/60 backdrop-blur-sm z-100 rounded-lg text-center border-1 border-yellow-300/50 flex flex-col divide-y-1 divide-yellow-300/50 max-h-90 overflow-auto";
    if (!searchName) {
      suggestionsList.className = "hidden";
      historySuggestions()
      return;
    }
    const matches = pokemonNames.filter((names) => names.includes(searchName));
    if (matches.length == 0) {
      suggestionsList.innerHTML += `<li class="py-1 cursor-pointer hover:scale-y-[1.1] transition-transform ease-in-out duration-200">no-matches...</li>`;
    } else {
      matches.map(
        (each) =>
          (suggestionsList.innerHTML += `<li class="py-1 cursor-pointer hover:scale-y-[1.1] transition-transform ease-in-out text-sm duration-200" onclick="suggestionClick(this)">${each}</li>`),
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const historySuggestions = () => {
  try {
    const suggestionsList = document.getElementById("suggestions");
    if (searchHistory.length === 0) {
      suggestionsList.classList =
      "hidden";
      return;
    }
    suggestionsList.innerHTML = "";
    suggestionsList.classList =
      "absolute scrollbar-none max-w-[300px] top-full translate-y-1 left-0 right-0 list-none text-yellow-500 bg-black/60 backdrop-blur-sm z-100 rounded-lg text-center border-1 border-yellow-300/50 flex flex-col divide-y-1 divide-yellow-300/50 max-h-90 overflow-auto";
    searchHistory.map(
      (each, index) =>
        (suggestionsList.innerHTML += `<li class=" flex justify-end items-center transition-all ease-in-out duration-200 text-sm group w-full min-h-7 py-1 relative"><span class="flex w-full justify-center items-center cursor-pointer pe-3 sm:pe-0  sm:group-hover:-translate-x-3 transition-translate ease-in-out duration-300" onclick="cardDisplay('${each}')">${each}</span> <button type="button" onclick="deleteHistory(${index})" class=" absolute right-0 sm:scale-0 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:scale-[1] sm:translate-x-5 sm:group-hover:-translate-x-0 sm:group-hover:cursor-pointer hover:text-red-500 active:text-red-600  text-yellow-500 text-xs cursor-pointer transition-all ease-in-out duration-300 z-100 h-full sm:min-w-7 deleteHistoryBtn"><i class="fa-solid fa-xmark"></i></button> </i>
</li>`),
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteHistory = (id) => {
  searchHistory.splice(id, 1);
  localStorage.setItem("pokemonSearchHistory", JSON.stringify(searchHistory));
  historySuggestions()
};

document.querySelector("#search").addEventListener("input", showSuggestions);
document.querySelector("#search").addEventListener("focus", historySuggestions);
document.addEventListener("pointerdown",(e)=>{
  const search = document.querySelector("#search")
  const suggestions= document.querySelector("#suggestions")
  if(!search.contains(e.target) && !suggestions.contains(e.target)){
    hideSuggestions()
  }
})

# Pokémon Explorer

A Pokémon browser built with vanilla JavaScript and the PokéAPI.

Search any Pokémon, browse the full National Dex page by page, and
revisit recent searches. No frameworks, no build step — just open
the file and it runs.

**Live demo:** https://darylibera.github.io/Pokemon_HTML_CSS_Tailwind_JavaScript_AsyncAwait/

## What it does

- **Search** — type a name and it fetches live data from the PokéAPI
  using `async/await` and the Fetch API.
- **Suggestions** — filters all 1,351 Pokémon names as you type,
  so you don't have to remember exact spellings.
- **Search history** — recent searches are saved in `localStorage`,
  so they're still there after a refresh. You can delete entries,
  with a slide-and-shrink animation.
- **Pagination** — browse the National Dex using the API's
  `next` and `previous` endpoints.
- **Stats** — HP, Attack, Defence, and Speed shown as bars,
  scaled against each stat's real maximum.
- **Sprites** — checks multiple generations and falls back through
  them until it finds an image, so you don't get blanks.
- **Loading and errors** — shows a loading screen while fetching,
  and resets cleanly with an alert if the name doesn't exist.

## Stack

HTML, Tailwind CSS (CDN), vanilla JavaScript, Font Awesome.
Data comes from the PokéAPI. Search history lives in `localStorage`.

No dependencies to install. No build tools.

## Running it

Clone the repo:

git clone https://github.com/darylibera/Pokemon_HTML_CSS_Tailwind_JavaScript_AsyncAwait.git

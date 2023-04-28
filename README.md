# Pluck.eco Web Frontend

## Setting up the environment

You will need the supabase variables to connect to supabase. Add them to a .env file like this:
`touch .env`
`echo 'PUBLIC_SUPABASE_URL=https://<supabase-url>.supabase.co' >> .env`
`echo 'PUBLIC_SUPABASE_KEY=the_key_xxx' >> .env`
`echo 'PUBLIC_REDIRECT_URL=http://localhost:3000/magic-link' >> .env`

## Authentication

Authentication is handled by supabase. Using https://github.com/magnuswahlstrand/astro-supabase-vercel as an example, we are able to check the user's login status, or query the database on the server.
This simplifies the frontend (by requiring less javascript to update the page), and speeds up page load for pages that do not need that data.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│   |   └── index.astro
|   └── layouts
|       └── Layout.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn run dev`             | Starts local dev server at `localhost:3000`      |
| `yarn run build`           | Build your production site to `./dist/`          |
| `yarn run preview`         | Preview your build locally, before deploying     |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

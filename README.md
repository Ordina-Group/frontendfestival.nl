![Frontend Festival Logo](./static/marketing/socials.png)

# FrontEndFesitival.nl

Here's the code of the website [FrontEndFestival.nl](https://frontendfestival.nl/).

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) & [Svelte](https://svelte.dev/)
  - Using the [SvelteKit Static Adapter](https://kit.svelte.dev/docs/adapter-static).
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Hosted on [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)
  - Automated with [Terraform](https://www.terraform.io/)
- [Prettier](https://prettier.io/) for code formatting

## Running

This should do it all:

```bash
# Install dependencies
npm install
# Run the dev server
npm run dev
```

### Releasing

Releasing is as simple as pushing to main and merging the PR created by release-please after.

Make a tag for each final version of a year in the format `YYYY`, e.g. `2023`. The Github Action `save-assets` will run to save it as an attachment to the tag/release. The Github Action `release` will add it under the path `/2023`.

Merging to the main branch runs the Github Action `release` and the result of the build is deployed to Github Pages. Github Pages is configured to use the custom domain name [frontendfestival.nl](https://frontendfestival.nl).
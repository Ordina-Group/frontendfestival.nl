<script lang="ts">
	import { page } from "$app/stores";

  $: currentPath = $page.url.pathname;

  interface MenuItem {
    label: string
    route: string
  }

  const items: MenuItem[] = [
    { label: "Home", route: "/" },
    { label: "CFP", route: "/papers" },
    { label: "Volunteers", route: "/volunteers" },
    { label: "Sponsors", route: "/sponsors" },
    { label: "History", route: "/history" },
    { label: "Code of Conduct", route: "/code-of-conduct" },
  ]

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav class="bg-north2 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 h-[72px]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a href="/" class="min-h-[40px]">
      <img src="/logo-sopra4.svg" alt="Python Conference Logo" class="w-10" />
    </a>

    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        on:click={toggleMenu}
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded={menuOpen}
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>

    <div class={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? '' : 'hidden md:block'}`} id="navbar-sticky">
      <ul class="flex flex-col grow text-xl p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-north2">
        {#each items as item}
          <li>
            <a
              class:active={currentPath === item.route}
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              rel="noreferrer"
              href={item.route}
              on:click={() => menuOpen = false}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

  </div>
</nav>

<style>
  nav a.active {
    --tw-text-opacity: 1;
    color: rgb(255 129 51 / var(--tw-text-opacity));
  }
</style>

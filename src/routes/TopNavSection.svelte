<script lang="ts">
    import { page } from "$app/stores";
	import { onMount } from "svelte";

    $: currentPath = $page.url.pathname;

    type MenuItem = {
        label: string
        route?: string
        submenu?: { label: string, route: string}[]
    }

    const items: MenuItem[] = [
        { label: "Home", route: "/" },
        {
            label: "Get Involved",
            submenu: [
                { label: "Call for Papers", route: "/call-for-papers" },
                { label: "Call for Sponsors", route: "/call-for-sponsors" },
                { label: "Call for Volunteers", route: "/call-for-volunteers" },
            ],
        },
        { label: "Our Sponsors", route: "/sponsors" },
        {
            label: "About Us",
            submenu: [
                { label: "History", route: "/history" },
                { label: "Code of Conduct", route: "/code-of-conduct" }
            ]
        },
    ]

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    onMount(() => {
        const handleResize = () => menuOpen = false;

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
</script>

<nav class="bg-north2 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="/" class="min-h-[40px] mr-[-120px] text-white font-bold flex gap-2 items-center">
            <img src="/logo-sopra4.svg" alt="Python Conference Logo" class="w-10" />
            PyCon NL
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
                on:click={toggleMenu}
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white white rounded-lg md:hidden hover:text-north2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={menuOpen}
            >
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>

        <div class={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? '' : 'hidden md:block'}`} id="navbar-sticky">
            <ul class="flex flex-col grow text-xl p-4 md:p-0 mt-4 font-medium md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-north2">
                {#each items as item}
                    <li class="relative group">
                        {#if item.submenu}
                            {#if menuOpen}
                                {#each item.submenu as sub}
                                    <a
                                        href={sub.route}
                                        class:active={currentPath === sub.route}
                                        class="block rounded py-2 px-3 text-white hover:text-north2 hover:bg-gray-100"
                                        on:click={() => menuOpen = false}
                                    >
                                        {sub.label}
                                    </a>
                                {/each}
                            {:else}
                                <span
                                    class="block cursor-default py-2 px-3 text-white rounded hover:text-north2 hover:bg-gray-100 md:hover:text-white md:hover:bg-transparent md:p-0"
                                    class:active={item.submenu.some(sm => sm.route === currentPath)}
                                >
                                    {item.label}
                                </span>

                                <ul class="animate-dropdown hidden absolute left-0 md:group-hover:block z-30 pt-2">
                                    <div class="p-2 bg-north text-white rounded-md shadow-lg md:min-w-[250px]">
                                        {#each item.submenu as sub}
                                            <li>
                                                <a
                                                    href={sub.route}
                                                    class:active={currentPath === sub.route}
                                                    class="block px-4 py-2 hover:bg-gray-100 rounded-md hover:text-north"
                                                >
                                                    {sub.label}
                                                </a>
                                            </li>
                                        {/each}
                                    </div>
                                </ul>
                            {/if}
                        {:else}
                            <a
                                href={item.route}
                                class:active={currentPath === item.route}
                                class="block py-2 px-3 text-white rounded hover:text-north2 hover:bg-gray-100 md:hover:text-white md:hover:bg-transparent md:p-0 md:hover:underline"
                                on:click={() => menuOpen = false}
                            >
                                {item.label}
                            </a>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    .active {
        --tw-text-opacity: 1;
        color: rgb(255 129 51 / var(--tw-text-opacity));
    }

    @keyframes dropdown-appear {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-dropdown {
        animation: dropdown-appear 200ms ease-out;
    }

</style>

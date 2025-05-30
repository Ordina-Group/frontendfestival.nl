<script lang="ts">
    import TagBlock from '$lib/components/TagBlock.svelte';
	import Fly from "$lib/components/Fly.svelte";
    import sponsors from "$lib/assets/images/Sponsor-pana.svg?raw";
    import tiers from "$lib/assets/images/Holding the arrow-pana.svg?raw";

    const headers = ["", "Gold", "Silver", "Bronze"];

    const tableRows = [
        {
            label: "Pricing",
            content: [
                ["Package price (excluding VAT)"],
                ["€4,000.00"],
                ["€2,500.00"],
                ["€1,000.00"]
            ]
        },
        {
            label: "Availability",
            content: [
                ["Number of available slots"],
                ["4"],
                ["3"],
                ["3"]
            ]
        },
        {
            label: "Session passes",
            content: [
                ["Free conference passes", "Exhibitor passes", "Discounted conference passes"],
                ["6", "4", "6"],
                ["3", "3", "3"],
                ["2", "2", "1"]
            ]
        },
        {
            label: "Brand visibility",
            content: [
                [
                    "Social media announcement",
                    "Mention in opening speech",
                    "Logo on badges",
                    "Logo on PyConNL video",
                    "Logo on PyConNL banners",
                    "Logo on PyConNL website",
                    "Option to distribute goodies at the event",
                    "Vacancy flyer may be distrubited",
                    "Logo in the PyConNL digital program guide"
                ],
                ["✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔"],
                ["✔", "", "✔", "✔", "", "✔", "€200 extra", "✔", "✔"],
                ["✔", "", "", "", "", "✔", "", "", "✔"]
            ]
        },
        {
            label: "Booths",
            content: [
                ["Power & Wi-Fi", "Premier booth location", "Booth dimensions"],
                ["✔", "✔", "3 × 2.5 (10m&sup2;)"],
                ["✔", "", "2 × 2 (4m&sup2;)"],
                ["✔", "", "Table"]
            ]
        }
    ];
</script>

<div class="m-8 mt-20 py-6">
    <div class="grid m-auto w-full max-w-6xl text-xl text-black place-items-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <Fly offset={-10} duration={1000}>
                <TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
                    <p>We are excited to invite you to explore our sponsor packages for PyCon NL 2025, taking place on October 16, 2025.</p>
                    <p>Our packages are designed to offer you maximum visibility and engagement with our vibrant community of Python enthusiasts from all over the world.</p>
                </TagBlock>
            </Fly>
            <Fly offset={10} duration={1000} delay={400}>
                <div class="svg-max">
                    {@html sponsors}
                </div>
            </Fly>
        </div>

        <h2 class="font-bold text-2xl mb-4 spacing-top">Package Details</h2>

        <div class="mt-8 max-w-3xl">
            <div class="grid gap-4">
                <TagBlock extend={true} direction="both" backgroundColor="north">
                    <h3 class="font-bold text-xl">Gold Package</h3>
                    <p>The Gold Package provides substantial visibility with logo placements, mentions in email newsletters, and social media promotions and the opening speech. Gold sponsors will also have 6 conference passes, and will be able to network directly with attendees via their networking table.</p>
                </TagBlock>
                <TagBlock extend={true} direction="both" backgroundColor="north2">
                    <h3 class="font-bold text-xl">Silver Package</h3>
                    <p>Our Silver Package includes logo placements on the website and in promotional materials, as well as mentions in event communications. Silver sponsors will have 3 conference passes, connecting with industry professionals and enthusiasts.</p>
                </TagBlock>
                <TagBlock extend={true} direction="both" backgroundColor="north3">
                    <h3 class="font-bold text-xl">Bronze Package</h3>
                    <p>The Bronze Package offers basic visibility with logo placements on the website and in select promotional materials. Bronze sponsors will be featured in event programs or on specific event pages and have 2 complimentary conference passes.</p>
                </TagBlock>
            </div>
        </div>

        <div class="w-full flex justify-center svg-max">
            {@html tiers}
        </div>

        <div class="mt-4 flex items-center justify-center overflow-x-auto">
            <table class="table-with-spacing responsive-table">
                <thead>
                    <tr class="header-row-color">
                    {#each headers as header}
                        <th class="px-4 py-2">{header}</th>
                    {/each}
                    </tr>
                </thead>
                <tbody>
                    {#each tableRows as row}
                    <tr>
                        {#each row.content as cellContent, i}
                        <td class="px-4 py-2 {i === 0 ? 'first-column-color' : 'cell-color'} align-top">
                            <div class="row_header">{@html i == 0 ? row.label : "&nbsp;"}</div>
                            {#each cellContent as item, j}
                                <div class="row_content">{@html item ? item : "&nbsp;"}</div>
                            {/each}
                        </td>
                        {/each}
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <div class="mt-4 flex items-center justify-center">
            <TagBlock class="text-lg" backgroundColor="north" link="/PYCON NL Sponsorship brochure.pdf" externalLink>
                <div class="font-bold">
                    Download<span class="px-2">|</span><span class="text-ordina">PYCON NL Sponsorship brochure</span>
                </div>
            </TagBlock>
        </div>

        <div class="mt-20 max-w-4xl">
            <p>We would be delighted to discuss which package best aligns with your marketing and engagement goals. Please let us know if you have any specific requests or ideas for recognition that would make this partnership even more valuable for you.</p>
            <p class="mt-[1em]">If you are interested in participating or have any questions, please get in touch with:</p>
        </div>

        <address class="italic mt-4">
            <p>Eva Munscher</p>
            <p>Esther Roghair</p>
            <a href="mailto:pycon.netherlands@gmail.com">pycon.netherlands@gmail.com</a><br />
        </address>

        <div class="mt-4 flex items-center justify-center">
            <TagBlock class="text-lg" backgroundColor="north" link="mailto:pycon.netherlands@gmail.com" externalLink>
                <div class="font-bold">
                    Contact<span class="px-2">|</span><span class="text-ordina">Get in contact about sponsorship!</span>
                </div>
            </TagBlock>
        </div>

        <div class="mt-20 max-w-4xl">
            <p>Thank you for considering this opportunity. We look forward to the possibility of collaborating with you to make PyCon NL 2025 a success!</p>
        </div>

        <!-- TODO: sponsors 2025 toevoegen -->
    </div>
</div>

<style>
    /* colors determined by table in pdf */
    .header-row-color {
        background-color: #99acffFF;
    }
    .first-column-color {
        background-color: #cdd6ffFF;
    }
    .cell-color {
        background-color: #e3e8ffFF;
    }
    .table-with-spacing {
        display: table;
        border-spacing: 10px;
        border-collapse: separate;
    }
    .row_header {
        font-weight: bold;
        font-size: 1.2em;
    }
    /* Om te zorgen dan elke styling correct wordt toegepast op elke cell moeten we de vertical align aangeven */
    .align-top {
        vertical-align: top;
    }
    /* Ik wil de tabel altijd volledig in beeld, met font groote dat leesbaar is op elk apparaat. We passen het aan op basis van de view width */
    .responsive-table {
        min-width: 500px;
        width: 100%;
        font-size: calc(0.2rem + 1vw);
    }
    .responsive-table td,
    .responsive-table th {
        vertical-align: top;
    }
    .spacing-top {
        margin-top: 2rem;
    }

    .svg-max > :global(svg) {
        max-height: 400px;
        aspect-ratio: 1 / 1;
        width: 100%;
    }
</style>

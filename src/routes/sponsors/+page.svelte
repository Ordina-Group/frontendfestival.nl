<script lang="ts">
	import { groupBy } from "lodash-es";
	import TagBlock from "$lib/components/TagBlock.svelte";

    type Tier = "gold" | "silver" | "bronze"

    type Sponsor = {
        tier: Tier
        name: string
        logo: string
        url?: string
    }

    const colors: Record<Tier, "north" | "north2" | "north3"> = {
        gold: "north",
        silver: "north2",
        bronze: "north3",
    }

    const sponsors: Sponsor[] = [
        {
            tier: "silver",
            name: "Vakgroep Software Ontwikkeling",
            logo: "/sponsors/vso.png",
            url: "https://www.amsterdam.nl/bestuur-organisatie/organisatie/digitalisering-innovatie-en-informatie/",
        },
        {
            tier: "gold",
            name: "Sopra Steria",
            logo: "/sponsors/ssg.jpg",
            url: "https://www.soprasteria.nl",
        },
    ];

    const byTier: Partial<Record<Tier, Sponsor[]>> = groupBy(sponsors, s => s.tier);
    const tiers = new Set(sponsors.map(s => s.tier));
    const sortedTiers: Tier[] = (["gold", "silver", "bronze"] as Tier[]).filter(t => tiers.has(t));
</script>

<div class="w-full flex flex-col items-center pt-20 mt-16">
    <div class="text-3xl px-4 text-center font-bold">Made possible by our sponsors:</div>
    {#each sortedTiers as tier}
        {@const tierSponsors = byTier[tier] ?? []}
        <div class="w-full px-4 max-w-5xl mt-16">
            <div class="w-full text-center text-2xl font-bold capitalize">
                <TagBlock backgroundColor={colors[tier]}>
                    {tier}
                </TagBlock>
            </div>
            <div class="mt-4 flex flex-wrap gap-4 justify-center">
                {#each tierSponsors as sponsor}
                    <a href={sponsor.url} target="_blank">
                        <div
                            class="rounded-xl bg-white w-52 md:w-80 aspect-square grid place-items-center bg-contain bg-no-repeat bg-center"
                            style="background-image: url({sponsor.logo});"
                            title={sponsor.name}
                        >
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    {/each}
</div>

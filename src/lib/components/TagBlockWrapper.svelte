<script lang="ts">
    export let link: string | undefined = undefined;
    export let externalLink: boolean = false;
	export let direction: 'left' | 'right' | 'both' = 'both';

    const props = externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {}
</script>

{#if link !== undefined}
    <a href={link} class={direction} {...props}><slot /></a>
{:else}
    <slot />
{/if}

<style>
    a > :global(*) {
        transition: transform 0.1s ease-in-out;
    }

    .left:hover > :global(*) {
        transform: translateX(-1em);
    }

    .right:hover > :global(*) {
        transform: translateX(1em);
    }

    .both:hover > :global(*) {
        transform: scaleX(1.07);
    }
</style>
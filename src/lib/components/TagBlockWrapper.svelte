<script lang="ts">
    export let link: string | undefined = undefined;
	export let direction: 'left' | 'right' | 'both' = 'both';
</script>

{#if link !== undefined}
    <a href={link} class={direction}><slot /></a>
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
        transform: scaleX(1.05);
    }
</style>
<script lang="ts">
	import { visible } from "$lib/visible";

    export let offset = 10;
    export let delay = 0;
    export let duration = 500;

    let viewed = false;
</script>

<div
    use:visible={() => { viewed = true; }}
    style:--offset="{offset}em"
    style:--delay="{delay}ms"
    style:--duration="{duration}ms"
    class="unviewed"
    class:fly={viewed}
>
    <slot />
</div>

<style>
    .unviewed {
        opacity: 0;
    }

    .fly {
        --offset: 10em;
        --delay: 0ms;
        --duration: 500ms;
   		opacity: 0;
		animation: anim-fly var(--duration) ease-in-out forwards;
        transform: translateX(var(--offset));
        animation-delay: var(--delay);
    }

    @keyframes anim-fly {
		to { transform: translateX(0); opacity: 1; }
	}
</style>

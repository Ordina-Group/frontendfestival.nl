<script lang="ts">
    export let src: string
    export let message: string;
    export let className = "";
    export { className as class };

    let playing = false;
    let videoElement: HTMLVideoElement | null = null;

    function play() {
        playing = true;
    }

</script>

<!-- svelte-ignore a11y-media-has-caption -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="container" class="relative inline-block" on:click={play}>
    {#if !playing}
        <div class="absolute inset-0 right-[-0.1px] bg-white bg-opacity-60 flex flex-col justify-center items-center text-north2 text-xl backdrop-blur-sm">
            <button class="text-6xl bg-transparent border-none cursor-pointer">▶</button>
            <p class="mt-4 text-lg italic font-bold">{message}</p>
        </div>
    {/if}
    <video
        bind:this={videoElement}
        controls={playing}
        class={className}
        on:pause={() => { playing = false; }}
        {src}
    >
        <source {src} type="video/mp4">
    </video>
</div>

<style>
    #container {
        cursor: pointer;
    }

    #container > div {
        transition: background 0.1s ease-in-out;
    }

    #container:hover > div {
        --tw-bg-opacity: 0.75;
    }
</style>
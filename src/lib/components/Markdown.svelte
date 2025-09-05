<script lang="ts">
    import { marked } from "marked";

    export let text: string;
    export let className = "";
    export { className as class };
</script>

<div class="markdown {className}">
    {@html marked.parse(text)}
</div>

<style>
    .markdown :global(code) {
        padding: 0.1em 0.3em 0.1em 0.3em;
        background-color: #b1cac5;
        border-radius: 0.5em;
    }
</style>
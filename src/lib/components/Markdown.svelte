<script lang="ts">
    import { marked } from "marked";
    import { markedSmartypants } from "marked-smartypants";

    export let text: string;
    export let className = "";
    export { className as class };

    const renderer = new marked.Renderer();

    // We don't want certain elements
    renderer.code = ({ text }) => text;
    renderer.link = ({  text }) => text;
    renderer.table = () => '';
    renderer.hr = () => '';

    marked.use(markedSmartypants());
    marked.setOptions({ renderer });
</script>

<div class="markdown {className}">
    {@html marked.parse(text)}
</div>

<style>
    .markdown :global(p),
    .markdown :global(ol),
    .markdown :global(ul),
    .markdown :global(blockquote),
    .markdown :global(pre),
    .markdown :global(table) {
        margin-bottom: 1em;
    }

    /* Inline code */
    .markdown :global(code) {
        padding: 0.1em 0.3em;
        background-color: #b1cac5;
        border-radius: 0.3em;
        font-family: monospace;
        font-size: 0.95em;
    }

    /* Code blocks */
    .markdown :global(pre) {
        background-color: #2d2d2d;
        color: #f8f8f2;
        padding: 1em;
        border-radius: 0.5em;
        overflow-x: auto;
    }
    .markdown :global(pre code) {
        background: none;
        padding: 0;
        color: inherit;
        font-size: 0.9em;
    }

    /* Headings */
    .markdown :global(h1) {
        font-size: 2em;
        font-weight: bold;
        margin: 1em 0 0.5em;
        border-bottom: 2px solid #ccc;
        padding-bottom: 0.3em;
    }
    .markdown :global(h2) {
        font-size: 1.5em;
        font-weight: bold;
        margin: 1em 0 0.5em;
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.2em;
    }
    .markdown :global(h3) {
        font-size: 1.25em;
        font-weight: bold;
        margin: 1em 0 0.5em;
    }

    /* Lists */
    .markdown :global(ul) {
        list-style-type: disc;
        padding-left: 1.5em;
    }
    .markdown :global(ol) {
        list-style-type: decimal;
        padding-left: 1.5em;
    }

    /* Blockquotes */
    .markdown :global(blockquote) {
        border-left: 4px solid #ccc;
        padding-left: 1em;
        color: #555;
        font-style: italic;
    }
</style>

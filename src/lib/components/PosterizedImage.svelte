<script lang="ts">
    export let src: string;
    export let levels: number = 4;
    export let className = "";

    // Generate evenly spaced discrete steps from 0..1 (e.g., "0 0.333 0.667 1")
    const table = (n: number) =>
        Array.from({ length: n }, (_, i) => (n === 1 ? 1 : i / (n - 1)))
            .map(v => v.toFixed(3))
            .join(" ");

    $: tableValues = table(levels);

    const uid = `posterize-${crypto.randomUUID()}`;
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class={`w-full h-full overflow-hidden ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid slice"
>
    <defs>
        <filter id={uid} color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="0.2" result="blurred"/>
            <feColorMatrix type="saturate" values="0" result="gray" />
            <feComponentTransfer>
                <feFuncR type="discrete" tableValues={tableValues} />
                <feFuncG type="discrete" tableValues={tableValues} />
                <feFuncB type="discrete" tableValues={tableValues} />
            </feComponentTransfer>
        </filter>
    </defs>

    <image
        href={src}
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        filter={`url(#${uid})`}
    />
</svg>

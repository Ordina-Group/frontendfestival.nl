<script>
  import Poster from '../../lib/components/Poster.svelte';
  import { base } from '$app/paths';
</script>

<header class="flex-center relative h-screen w-full bg-shark" id="header">
	<Poster animated />
	<div class="z-50 flex max-h-full flex-col justify-center text-center">
		<h1 class="block w-screen max-w-4xl px-5 py-20">
				<img src="{base}/logo.svg" alt="Frontend Festival Logo" class="" />
		</h1>
	</div>
</header>

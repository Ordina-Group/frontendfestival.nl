<script>
	import HeaderSection from './HeaderSection.svelte';
	import InfoSection from './InfoSection.svelte';
	import PastEventsSection from './PastEventsSection.svelte';
	import PracticalInformationSection from './PracticalInformationSection.svelte';
</script>

<svelte:head>
	<title>Frontend Festival 2025</title>

	<meta name="title" property="og:title" content="Frontend Festival 2025" />
	<meta
		name="description"
		property="og:description"
		content="On the 19th of June, Sopra Steria will be hosting the third iteration of the Frontend Festival!"
	/>
	<meta name="type" property="og:type" content="website" />
	<meta name="url" property="og:url" content="https://frontendfestival.nl/" />
	<meta
		name="image"
		property="og:image"
		content="https://frontendfestival.nl/marketing/socials.png"
	/>
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<HeaderSection />
<InfoSection />
<!-- <SpeakerScheduleSection /> -->
<!-- <Spacer /><WorkshopScheduleSection /> -->
<!-- <SpeakerSection /> -->
<PastEventsSection />
<PracticalInformationSection />

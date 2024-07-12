<script>
	import HeaderSection from './HeaderSection.svelte';
	import InfoSection from './InfoSection.svelte';
	import PhotoSliderSection from './PhotoSliderSection.svelte';
	import PracticalInformationSection from './PracticalInformationSection.svelte';
	import Spacer from './Spacer.svelte';
	import SpeakerScheduleSection from './SpeakerScheduleSection.svelte';
	import SpeakerSection from './SpeakerSection.svelte';
	import WorkshopScheduleSection from './WorkshopScheduleSection.svelte';
</script>

<svelte:head>
	<title>Frontend Festival 2024</title>

	<meta name="title" property="og:title" content="Frontend Festival 2024" />
	<meta
		name="description"
		property="og:description"
		content="On the 5th of September, Sopra Steria will be hosting the second iteration of the Frontend Festival!"
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
<InfoSection /><!--<SpeakerScheduleSection />-->
<Spacer /><!--<WorkshopScheduleSection />--><!--<SpeakerSection />-->
<PhotoSliderSection />
<PracticalInformationSection />

<script>
	import Counter from './Counter.svelte';

	async function handleClick() {
		const resp = await fetch('/api/random');
		const random = await resp.text();
		alert(random);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Counter />

	<button on:click={handleClick}>Log random number from server</button>
</section>

<script>;
	import Nav from './components/Nav.svelte'
	import MyFace from './components/MyFace.svelte'
	import CodeBunny from './components/CodeBunny.svelte'
	import Cards from './components/Cards.svelte';
	import AboutMe from './components/AboutMe.svelte'
	import Tools from './components/tools.svelte'
	import Footer from './components/Footer.svelte'
</script>

<main>
	<Nav />
	<div class="header">
		<MyFace />
		<CodeBunny />
	</div>
	<div align="center">
		<h1>Antonio Ortega Jr</h1>
		<p>I am an engineer at <a href="https://twentyideas.com/">Twenty Ideas</a> in Eugene Oregon.</p>
		<p>I write code things and use things for code like aws. I also volunteer for code things.</p>
		<Cards />
		<AboutMe />
		<Tools />
		<Footer />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 80%;
		margin: 0 auto;
		padding-left: 10%;
		padding-right: 10%;
	}
	.header {
		display: flex;
		justify-content:  space-between;
		width: 60%;
		padding-left: 10%;
		padding-top: 5%;
		padding-bottom: 5%;
	}
	h1 {
        max-width: 80%;
        color: #c5c3c9;
      }
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

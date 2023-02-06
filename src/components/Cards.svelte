<script>
	//faMeetup
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faMeetup } from '@fortawesome/free-brands-svg-icons'
</script>
<div>
	<div class='row'>
        <a href='https://eugenewebdevs.com' class='card'>
          <h3>Eugene Web Devs</h3>
          <p>I am the organizer for a local web developers meetup <Fa icon={faMeetup} /> .</p>
        </a>
        <a href='https://hackforacause.org' class='card'>
          <h3>Hack for a Cause</h3>
          <p>Contributing organizer of local civic themed hackathon.</p>
        </a>
        <a
          href='https://github.com/antonioortegajr'
          class='card'
        >
          <h3>Code On GitHub</h3>
          <p>My code fun on <Fa icon={faGithub} />.</p>
        </a>
      </div>
</div>
<style>
	.row{
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
	.card {
        padding: 18px 18px 24px;
        width: 220px;
        min-height: 100px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 3px solid #9b9b9b;
      }
      .card:hover {
        border: 3px solid transparent;
        border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        border-image-slice: 1;
      }
      .card h3 {
        margin: 0;
        color: #1b5982;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
</style>
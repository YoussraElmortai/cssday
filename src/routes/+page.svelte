<script>
  export let data;
</script>

<header>
</header>

<main>
  <!-- <img src="/src/public/audience.jpg" alt="" >
    <img src="/src/public/cssdayinterview.jpg" alt="">
    <img src="/src/public/helpdesk.jpg" alt="">
    <img src="/src/public/jheyhas.jpg" alt="" >
    <img src="/src/public/stephenhaytalk.jpg" alt="" >
    <img src="/src/public/unatalk.jpg" alt="" > -->
  <h1>10 years of CSS day</h1>
  <div class="intro">
    <p>A decade of geeking out over <span>CSS</span></p>
  </div>

  <section class="wrapper">
    {#each Object.entries(data.data) as [year, event]}
      <div class="cssday {year}" style="border-color: {event.color.hex};">
          <h2>{event.title}</h2>
                     <div class="info">
          <h3>Attendees: {event.attendees.count}</h3>
                    <ul>
                    {#each event.countries as country}
                <li>{country} </li>
            {/each}
            </ul>
            </div>
          <div class="mc">
            {#each event.mc as mc}
              {#if mc.avatar}
                <img src={mc.avatar} alt={mc.name} />
              {/if}
            {/each}
          </div>
<a href={event.link}>go to website</a>
      </div>
    {/each}
  </section>
</main>

<footer></footer>

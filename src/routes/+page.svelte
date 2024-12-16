<script>
  export let data;
</script>

<header>
<nav></nav>
</header>

<main>
  <!-- <img src="/src/public/audience.jpg" alt="" >
    <img src="/src/public/cssdayinterview.jpg" alt="">
    <img src="/src/public/helpdesk.jpg" alt="">
    <img src="/src/public/jheyhas.jpg" alt="" >
    <img src="/src/public/stephenhaytalk.jpg" alt="" >
    <img src="/src/public/unatalk.jpg" alt="" > -->
  
  <div class="intro">
  <h1>10 years of CSS day</h1>
  <article>
    <h2>A decade of geeking out over CSS</h2>
    <p class="text">CSS Day is a focused, advanced CSS conference. Our attendees and speakers are a mix of CSS designers, developers, spec writers and browser vendors, who take pride in what they know and do.</p>
      <div class="button">
     <a href="/">go to confrences</a>
    </div>
  <article>

  </div>

  <section class="wrapper">
    {#each Object.entries(data.data) as [year, event]}
      <div class="cssday {year}">
         <div class="info">
           <h2>{event.title}</h2>
             <h3>Attendees: {event.date}</h3>
             <p class="text"></p>
            </div>
          <div class="mc">
            {#each event.mc as mc}
              {#if mc.avatar}
                <img src={mc.avatar} alt={mc.name} />
              {/if}
            {/each}
          </div>
          <div class="button">
<a href={event.link}>go to website</a>
</div>
      </div>
    {/each}
  </section>
</main>

<footer></footer>

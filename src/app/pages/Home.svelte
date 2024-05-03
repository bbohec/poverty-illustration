<script lang="ts">
  import PovertyChart from '../components/PovertyChart.svelte';
  import EuropeanChart from '../components/EuropeanChart.svelte';
  import { povertyDatas } from '../../datas/datas';
</script>

<main>
  <h1>
    Poverty illustration for {povertyDatas.country} in {povertyDatas.year}
  </h1>
  <PovertyChart />

  <h1>2024 European election - French lists survey 30/04/2024</h1>
  <EuropeanChart />

  <p class="read-the-docs">
    Open source code available <a
      href="https://github.com/bbohec/poverty-illustration"
      target="_blank"
      rel="noreferrer">here</a
    >.
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>

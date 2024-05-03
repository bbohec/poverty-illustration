<script lang="ts">
  import Chart from 'chart.js/auto';
  import { povertyChartConfig } from '../../chart/chartConfig';
  import { onMount } from 'svelte';

  onMount(() => {
    const canvas = document.getElementById('povertyChart') as HTMLCanvasElement;
    canvas
      ? new Chart(canvas, povertyChartConfig)
      : console.error('Missing canvas');
  });
</script>

<div>
  <canvas id="povertyChart"></canvas>
</div>

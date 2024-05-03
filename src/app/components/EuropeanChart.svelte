<script lang="ts">
  import Chart from 'chart.js/auto';
  import { europeanChartConfig } from '../../chart/chartConfig';
  import { onMount } from 'svelte';

  onMount(() => {
    const canvas = document.getElementById(
      'europeanChart',
    ) as HTMLCanvasElement;
    canvas
      ? new Chart(canvas, europeanChartConfig)
      : console.error('Missing canvas');
  });
</script>

<div>
  <canvas id="europeanChart"></canvas>
</div>

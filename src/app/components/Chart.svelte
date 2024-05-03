<script lang="ts">
  import Chart from 'chart.js/auto';
  import { chartConfig } from '../../chart/chartConfig';
  import { onMount } from 'svelte';

  onMount(() => {
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    canvas ? new Chart(canvas, chartConfig) : console.error('Missing canvas');
  });
</script>

<div>
  <canvas id="chart"></canvas>
</div>

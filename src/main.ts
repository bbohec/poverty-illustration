import './css/app.css'
import Home from './app/pages/Home.svelte'

const app = new Home({
  target: document.getElementById('app')!,
})

export default app

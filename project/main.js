import './style.css'
import { setupCountdown } from './countdown.js'

document.querySelector('#app').innerHTML = `
  <div class="countdown-container">
    <h1>Time Until New Year 2025</h1>
    <div id="countdown" class="countdown">
      <div class="time-section">
        <span id="days">00</span>
        <span class="label">Days</span>
      </div>
      <div class="time-section">
        <span id="hours">00</span>
        <span class="label">Hours</span>
      </div>
      <div class="time-section">
        <span id="minutes">00</span>
        <span class="label">Minutes</span>
      </div>
      <div class="time-section">
        <span id="seconds">00</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </div>
`

setupCountdown(new Date('2025-01-01T00:00:00'))
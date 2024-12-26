export function setupCountdown(targetDate) {
  const daysEl = document.getElementById('days')
  const hoursEl = document.getElementById('hours')
  const minutesEl = document.getElementById('minutes')
  const secondsEl = document.getElementById('seconds')

  function updateCountdown() {
    const agora = new Date()
    const difference = targetDate - agora

    if (difference <= 0) {
      daysEl.textContent = '00'
      hoursEl.textContent = '00'
      minutesEl.textContent = '00'
      secondsEl.textContent = '00'
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    daysEl.textContent = days.toString().padStart(2, '0')
    hoursEl.textContent = hours.toString().padStart(2, '0')
    minutesEl.textContent = minutes.toString().padStart(2, '0')
    secondsEl.textContent = seconds.toString().padStart(2, '0')
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)
}
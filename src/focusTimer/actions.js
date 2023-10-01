import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleTimer() {
  state.isRunning = document.documentElement.classList.toggle("running")
  state.isRunning
    ? sounds.buttonStartAudio.play()
    : sounds.buttonStopAudio.play()
  timer.countDown()
}
export function resetTimer() {
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove("running")
  timer.updateDisplay()

  sounds.buttonStopAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

export function toggleSound() {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if (state.isMute) {
    sounds.backgroundAudio.play()
    return
  }

  sounds.backgroundAudio.pause()
}

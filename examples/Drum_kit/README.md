# Drum Kit — WebAudio demo

This is a small interactive drum kit demo using plain HTML, CSS and JavaScript.

Features
- Play drum sounds by clicking pads or pressing mapped keys:
  - W - Crash
  - A - Kick
  - S - Snare
  - D - Mid Tom
  - J - HiHat Closed
  - K - HiHat Open
  - L - Clap
  - ; - Low Tom
- Visual button animations on play.
- Record a short sequence and play it back.
- Adjustable master volume control.
- Save and load your drum patterns as JSON files.
- Full keyboard accessibility with ARIA labels and focus indicators.Files
- `index.html` — markup and UI
- `styles.css` — styles and small animations
- `script.js` — Web Audio synths, event handling, recording/playback logic

Usage
1. Open `index.html` in a browser (Chrome, Firefox, Edge). For best results, open it via a web server (e.g. `python -m http.server`) because some browsers restrict AudioContext on file://.
2. Click a pad or press W/A/S/D to play sounds.
3. Press "Record", play some beats, then "Stop" and "Play" to hear them.

Notes
- Sounds are synthesized using the Web Audio API (no external audio files required).
- The demo uses a lazy AudioContext creation strategy — the context starts when you interact with the page.
- Recording stores event times (ms) relative to the moment recording started and schedules playback with the AudioContext time base.

Enjoy!

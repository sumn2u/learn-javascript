# Live Digital Clock

A responsive, beginner-friendly digital clock built with HTML, CSS, and JavaScript. It shows the current time in hours, minutes, and seconds, updates every second, and lets you toggle between 12-hour (AM/PM) and 24-hour formats.

## How it works

- Uses the JavaScript `Date` object to read the current time.
- `setInterval()` runs every 1000ms to refresh the display so the clock stays accurate.
- Time values are padded with leading zeros for consistent formatting.
- A toggle button flips between 12-hour and 24-hour modes; the AM/PM badge switches to `24H` in 24-hour mode.
- DOM elements (`hours`, `minutes`, `seconds`, `ampm`) are updated on each tick, with an initial render before the interval starts.

## Run it

No dependencies or API keys are needed. Just open `index.html` in your browser:

```bash
cd examples/Live-Digital-Clock
open index.html
# or double-click index.html in your file explorer
```

// Drum kit using Web Audio API
// - Click or press W A S D to play sounds
// - Record/Stop/Play/Clear sequence with timing

// Simple mapping: key -> instrument
const MAPPING = {
  w: 'crash',
  a: 'kick',
  s: 'snare',
  d: 'tom',
  j: 'hihatClosed',
  k: 'hihatOpen',
  l: 'clap',
  ';': 'lowTom'
};

// Create AudioContext lazily (user gesture required in many browsers)
let audioCtx = null;
let masterGain = null;
function ensureAudio(){
  if(!audioCtx){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.9; // master volume
    masterGain.connect(audioCtx.destination);
  }
  // Some browsers (Chrome mobile) start suspended until explicit resume after a gesture
  if(audioCtx.state === 'suspended'){
    audioCtx.resume();
  }
  return audioCtx;
}

// Basic drum synthesizers using WebAudio primitives
function playCrash(time){
  const ctx = ensureAudio();
  const o = ctx.createBufferSource();
  // generate short noise buffer
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 1.0, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<data.length;i++){
    const t = i / ctx.sampleRate;
    // high-passed noise style
    data[i] = (Math.random()*2 - 1) * Math.exp(-4*t) * (0.6 + 0.4*Math.sin(50*t));
  }
  o.buffer = buffer;
  const band = ctx.createBiquadFilter();
  band.type = 'highpass';
  band.frequency.value = 800;
  o.connect(band);
  const gain = ctx.createGain();
  gain.gain.value = 0.9;
  band.connect(gain).connect(masterGain || ctx.destination);
  o.start(time || 0);
  o.stop((time || ctx.currentTime) + 0.6);
}

function playKick(time){
  const ctx = ensureAudio();
  const t = (time ?? ctx.currentTime);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';

  // frequency sweep for kick
  osc.frequency.setValueAtTime(150, t);
  osc.frequency.exponentialRampToValueAtTime(40, t + 0.35);

  // tighter gain envelope for audibility (stronger)
  gain.gain.setValueAtTime(1.6, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);

  osc.connect(gain).connect(masterGain || ctx.destination);
  osc.start(t);
  osc.stop(t + 0.6);
}

function playSnare(time){
  const ctx = ensureAudio();
  // noise
  const noise = ctx.createBufferSource();
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<data.length;i++) data[i] = (Math.random()*2 -1) * Math.exp(-6*(i/data.length));
  noise.buffer = buffer;
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.value = 1000;

  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.8;
  noise.connect(noiseFilter).connect(noiseGain).connect(masterGain || ctx.destination);
  noise.start(time || 0);
  noise.stop((time || ctx.currentTime) + 0.25);

  // body
  const osc = ctx.createOscillator();
  const og = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(180, time || ctx.currentTime);
  og.gain.setValueAtTime(0.6, time || ctx.currentTime);
  og.gain.exponentialRampToValueAtTime(0.001, (time || ctx.currentTime) + 0.25);
  osc.connect(og).connect(masterGain || ctx.destination);
  osc.start(time || 0);
  osc.stop((time || ctx.currentTime) + 0.3);
}

function playTom(time){
  const ctx = ensureAudio();
  const t = (time ?? ctx.currentTime);
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = 'sine';

  // a short pitched tom with a small attack
  osc.frequency.setValueAtTime(360, t);
  osc.frequency.exponentialRampToValueAtTime(160, t + 0.4);

  g.gain.setValueAtTime(1.1, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

  osc.connect(g).connect(masterGain || ctx.destination);
  osc.start(t);
  osc.stop(t + 0.85);
}

function playLowTom(time){
  const ctx = ensureAudio();
  const t = (time ?? ctx.currentTime);
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(220, t);
  osc.frequency.exponentialRampToValueAtTime(90, t + 0.45);
  g.gain.setValueAtTime(1.2, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
  osc.connect(g).connect(masterGain || ctx.destination);
  osc.start(t);
  osc.stop(t + 0.75);
}

function playHiHat(closed=true, time){
  const ctx = ensureAudio();
  const t = (time ?? ctx.currentTime);
  // Hi-hat via filtered, very short noise bursts + multiple bandpass filters.
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<data.length;i++){data[i] = (Math.random()*2 - 1) * Math.exp(-30 * (i / buffer.length));}
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  // metallic tone layering with bandpass filters
  const freqs = [8000, 12000, 10000];
  let node = src;
  const gains = [];
  freqs.forEach(f => {
    const bp = ctx.createBiquadFilter();
    bp.type='bandpass';
    bp.frequency.value = f;
    node.connect(bp);
    node = bp;
  });
  const g = ctx.createGain();
  const decay = closed ? 0.09 : 0.4;
  g.gain.setValueAtTime(closed?0.8:0.7, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
  node.connect(g).connect(masterGain || ctx.destination);
  src.start(t);
  src.stop(t + decay + 0.02);
}

function playClap(time){
  const ctx = ensureAudio();
  const t = (time ?? ctx.currentTime);
  // Clap: 3 quick noise bursts with exponential decay
  const bursts = [0, 0.02, 0.04];
  bursts.forEach(offset => {
    const noise = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.25, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0;i<data.length;i++) data[i] = (Math.random()*2 -1) * Math.exp(-10*(i/data.length));
    noise.buffer = buffer;
    const hp = ctx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value = 1200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.9, t + offset);
    g.gain.exponentialRampToValueAtTime(0.0001, t + offset + 0.22);
    noise.connect(hp).connect(g).connect(masterGain || ctx.destination);
    noise.start(t + offset);
    noise.stop(t + offset + 0.25);
  });
}

function playInstrument(name, time){
  switch(name){
    case 'crash': return playCrash(time);
    case 'kick': return playKick(time);
    case 'snare': return playSnare(time);
    case 'tom': return playTom(time);
    case 'lowTom': return playLowTom(time);
    case 'hihatClosed': return playHiHat(true, time);
    case 'hihatOpen': return playHiHat(false, time);
    case 'clap': return playClap(time);
  }
}

// UI wiring
const buttons = Array.from(document.querySelectorAll('.drum'));
const statusEl = document.getElementById('status');
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volume-value');

// Volume control
volumeSlider.addEventListener('input', (e)=>{
  const val = e.target.value;
  if(masterGain){
    masterGain.gain.value = val / 100;
  }
  volumeValue.textContent = val + '%';
});

function animateButton(key){
  const btn = buttons.find(b => b.dataset.key === key);
  if(!btn) return;
  btn.classList.add('playing','pulse');
  setTimeout(()=> btn.classList.remove('pulse'), 360);
  setTimeout(()=> btn.classList.remove('playing'), 140);
}

// Recording
let recording = [];
let isRecording = false;
let recordStart = 0;

const recordBtn = document.getElementById('record');
const stopBtn = document.getElementById('stop');
const playBtn = document.getElementById('play');
const clearBtn = document.getElementById('clear');

recordBtn.addEventListener('click', ()=>{
  ensureAudio();
  recording = [];
  isRecording = true;
  recordStart = performance.now();
  statusEl.textContent = 'Recording...';
  statusEl.classList.add('recording');
  recordBtn.disabled = true;
  stopBtn.disabled = false;
  playBtn.disabled = true;
  clearBtn.disabled = true;
  downloadBtn.disabled = true;
});

stopBtn.addEventListener('click', ()=>{
  isRecording = false;
  statusEl.textContent = 'Idle';
  statusEl.classList.remove('recording');
  recordBtn.disabled = false;
  stopBtn.disabled = true;
  playBtn.disabled = recording.length === 0;
  clearBtn.disabled = recording.length === 0;
  downloadBtn.disabled = recording.length === 0;
});

playBtn.addEventListener('click', async ()=>{
  if(recording.length === 0) return;
  statusEl.textContent = 'Playing...';
  recordBtn.disabled = true; playBtn.disabled = true; stopBtn.disabled = true; clearBtn.disabled = true;
  const ctx = ensureAudio();
  const start = ctx.currentTime + 0.1;
  for(const ev of recording){
    playInstrument(ev.inst, start + ev.time/1000);
    // schedule UI animation (Best-effort using setTimeout)
    setTimeout(()=> animateButton(ev.key), (start - ctx.currentTime) * 1000 + ev.time);
  }
  // re-enable after last event
  const duration = Math.max(...recording.map(r=>r.time)) + 800;
  setTimeout(()=>{
    statusEl.textContent = 'Idle';
    recordBtn.disabled = false;
    playBtn.disabled = false;
    clearBtn.disabled = false;
  }, duration);
});

clearBtn.addEventListener('click', ()=>{
  recording = [];
  playBtn.disabled = true;
  clearBtn.disabled = true;
  downloadBtn.disabled = true;
  statusEl.textContent = 'Cleared';
  setTimeout(()=> statusEl.textContent = 'Idle', 800);
});

const downloadBtn = document.getElementById('download');
const uploadBtn = document.getElementById('upload');
const fileInput = document.getElementById('file-input');

// Download pattern as JSON
downloadBtn.addEventListener('click', ()=>{
  if(recording.length === 0) return;
  const data = JSON.stringify(recording, null, 2);
  const blob = new Blob([data], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `drum-pattern-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  statusEl.textContent = 'Pattern saved!';
  setTimeout(()=> statusEl.textContent = 'Idle', 1500);
});

// Upload pattern from JSON
uploadBtn.addEventListener('click', ()=>{
  fileInput.click();
});

fileInput.addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (evt)=>{
    try{
      const loaded = JSON.parse(evt.target.result);
      if(Array.isArray(loaded) && loaded.length > 0){
        recording = loaded;
        playBtn.disabled = false;
        clearBtn.disabled = false;
        downloadBtn.disabled = false;
        statusEl.textContent = 'Pattern loaded!';
        setTimeout(()=> statusEl.textContent = 'Idle', 1500);
      }else{
        statusEl.textContent = 'Invalid pattern';
        setTimeout(()=> statusEl.textContent = 'Idle', 1500);
      }
    }catch(err){
      statusEl.textContent = 'Error loading file';
      setTimeout(()=> statusEl.textContent = 'Idle', 1500);
    }
  };
  reader.readAsText(file);
  e.target.value = ''; // reset input
});

// Play one event: handles scheduling and recording
function triggerKey(key){
  const inst = MAPPING[key];
  if(!inst) return;
  const ctx = ensureAudio();
  playInstrument(inst, ctx.currentTime + 0);
  animateButton(key);
  if(isRecording){
    recording.push({key, inst, time: performance.now() - recordStart});
    playBtn.disabled = false; clearBtn.disabled = false;
  }
}

// Mouse click handlers
buttons.forEach(btn => btn.addEventListener('click', e => {
  // ensure audio is started on first interaction
  ensureAudio();
  const key = btn.dataset.key;
  triggerKey(key);
}));

// Keyboard handlers
window.addEventListener('keydown', (e)=>{
  // Prevent repeated triggering when key is held down
  if(e.repeat) return;
  const k = e.key.toLowerCase();
  if(MAPPING[k]){
    ensureAudio();
    triggerKey(k);
  }
});

// Accessibility: expose mapping in console
console.log('Drum kit ready. Keys:', MAPPING);

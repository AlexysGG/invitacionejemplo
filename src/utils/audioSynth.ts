/**
 * Elegant Web Audio synthesizer generating gentle classical waltz arpeggios
 * (Harp & Piano acoustic timbre simulation) for Emilia's XV celebration.
 */

class LuxuryAudioSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private currentStep = 0;
  private volume = 0.35;
  private gainNode: GainNode | null = null;

  // Gentle classical waltz progression in C Major / G Major
  private notes = [
    // Measure 1: C Major (C - E - G - high C)
    { freq: 261.63, duration: 0.6 },
    { freq: 329.63, duration: 0.4 },
    { freq: 392.00, duration: 0.4 },
    { freq: 523.25, duration: 0.5 },
    // Measure 2: A Minor (A - C - E)
    { freq: 220.00, duration: 0.6 },
    { freq: 261.63, duration: 0.4 },
    { freq: 329.63, duration: 0.4 },
    { freq: 440.00, duration: 0.5 },
    // Measure 3: F Major (F - A - C)
    { freq: 174.61, duration: 0.6 },
    { freq: 220.00, duration: 0.4 },
    { freq: 261.63, duration: 0.4 },
    { freq: 349.23, duration: 0.5 },
    // Measure 4: G Major (G - B - D - high G)
    { freq: 196.00, duration: 0.6 },
    { freq: 246.94, duration: 0.4 },
    { freq: 293.66, duration: 0.4 },
    { freq: 392.00, duration: 0.5 },
    // Measure 5: E Minor (E - G - B)
    { freq: 164.81, duration: 0.6 },
    { freq: 196.00, duration: 0.4 },
    { freq: 246.94, duration: 0.4 },
    { freq: 329.63, duration: 0.5 },
    // Measure 6: F Major 7 (F - C - E - G)
    { freq: 174.61, duration: 0.6 },
    { freq: 261.63, duration: 0.4 },
    { freq: 329.63, duration: 0.4 },
    { freq: 392.00, duration: 0.5 },
    // Measure 7: D Minor 7 (D - F - A - C)
    { freq: 146.83, duration: 0.6 },
    { freq: 220.00, duration: 0.4 },
    { freq: 261.63, duration: 0.4 },
    { freq: 349.23, duration: 0.5 },
    // Measure 8: G Major Suspended to Resolution
    { freq: 196.00, duration: 0.6 },
    { freq: 261.63, duration: 0.4 },
    { freq: 293.66, duration: 0.4 },
    { freq: 493.88, duration: 0.6 }
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx || !this.gainNode) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm harp-like low-pass tone
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.Q.setValueAtTime(2, this.ctx.currentTime);

    // Warm triangle/sine blend
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    // Attack and decay curve
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.2, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 1.8);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + duration * 1.9);
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const scheduleNext = () => {
      if (!this.isPlaying) return;
      const note = this.notes[this.currentStep];
      this.playTone(note.freq, note.duration);
      this.currentStep = (this.currentStep + 1) % this.notes.length;
      this.timer = window.setTimeout(scheduleNext, 520);
    };

    scheduleNext();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const luxurySynth = new LuxuryAudioSynth();

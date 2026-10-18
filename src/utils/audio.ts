/**
 * Sound synthesis and voice narration for Civ V quotes and discovery fanfare.
 * Uses Web Audio API for authentic game chimes and Web Speech Synthesis for the narrator.
 */

class CivAudioManager {
  private audioCtx: AudioContext | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  public isMuted: boolean = false;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Plays a majestic resonant bronze gong chime reminiscent of Civ V wonder completion
   */
  public playWonderFanfare(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Fundamental and harmonics for a bronze bell / gong
      const freqs = [174.61, 261.63, 349.23, 523.25, 698.46]; // F3, C4, F4, C5, F5
      const gains = [0.35, 0.25, 0.18, 0.12, 0.08];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Exponential decay
        gainNode.gain.setValueAtTime(gains[i], now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.8 + i * 0.4);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.2);
      });
    } catch (e) {
      console.warn('Audio playback not supported or blocked:', e);
    }
  }

  /**
   * Plays a crisp, authentic strategy game item selection sound.
   * Features a tactile UI click transient followed by a bright two-stage
   * ascending harmonic chime (e.g. G5 -> D6) with warm acoustic resonance,
   * matching Civilization and strategy game UI selections.
   */
  public playGameSelect(pitchMultiplier: number = 1.0): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // 1. Tactile UI Click Transient (crisp parchment/stone game piece tap)
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.type = 'triangle';
      clickOsc.frequency.setValueAtTime(1400 * pitchMultiplier, now);
      clickOsc.frequency.exponentialRampToValueAtTime(160 * pitchMultiplier, now + 0.014);
      clickGain.gain.setValueAtTime(0.09, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.016);
      clickOsc.connect(clickGain);
      clickGain.connect(ctx.destination);
      clickOsc.start(now);
      clickOsc.stop(now + 0.018);

      // 2. Primary Note (G5 ~783.99 Hz) with gentle warm attack
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(783.99 * pitchMultiplier, now);
      // Subtle pitch drop creates snappy game UI feel
      osc1.frequency.exponentialRampToValueAtTime(760 * pitchMultiplier, now + 0.12);
      gain1.gain.setValueAtTime(0.08, now + 0.002);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.18);

      // 3. Ascending Fifth Chime (D6 ~1174.66 Hz, delayed by 22ms for iconic game select arpeggio)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1174.66 * pitchMultiplier, now + 0.022);
      gain2.gain.setValueAtTime(0.0001, now);
      gain2.gain.setValueAtTime(0.09, now + 0.024);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.02);
      osc2.stop(now + 0.28);

      // 4. Subtle Acoustic Body (D4 ~293.66 Hz for rich tactile feel)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(293.66 * pitchMultiplier, now);
      subGain.gain.setValueAtTime(0.04, now + 0.002);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.15);
    } catch {
      // AudioContext blocked or unsupported
    }
  }

  /**
   * Plays a snappy game mode or filter switch sound (e.g. switching between Civ V and Civ VI).
   */
  public playSwitchSound(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Fast dual-tone game toggle blip
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880.0, now + 0.04); // A5
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // ignore
    }
  }

  /**
   * Alias / subtle game selection sound for map selection or panning
   */
  public playMapSelect(): void {
    this.playGameSelect(0.92);
  }

  /**
   * Narrates quote using Web Speech Synthesis with dignified pacing
   */
  public narrateQuote(text: string, onEnd?: () => void): boolean {
    if (typeof window === 'undefined' || !window.speechSynthesis) return false;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88; // Deliberate, grand pacing like W. Morgan Sheppard
    utterance.pitch = 0.85; // Deep dignified timbre

    // Try to find a rich English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Male') || v.name.includes('David') || v.name.includes('George') || v.name.includes('UK') || v.name.includes('Natural'))) ||
      voices.find((v) => v.lang.startsWith('en'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  }

  public stopNarration(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public isNarrating(): boolean {
    if (typeof window === 'undefined' || !window.speechSynthesis) return false;
    return window.speechSynthesis.speaking;
  }
}

export const civAudio = new CivAudioManager();

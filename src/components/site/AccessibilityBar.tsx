import { useCallback, useEffect, useState } from "react";
import { Contrast, Minus, Plus, RotateCcw, Volume2, VolumeX } from "lucide-react";

const MIN = 0.9;
const MAX = 1.4;

/** Sticky accessibility toolbar: high contrast, font scaling, voice reader. */
export function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false);
  const [scale, setScale] = useState(1);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("hc", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(scale));
  }, [scale]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleSpeech = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const main = document.querySelector("main");
    const text = (main?.innerText ?? "").slice(0, 4000);
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    synth.speak(utterance);
    setSpeaking(true);
  }, []);

  const btn =
    "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-navy-foreground/25 px-3 text-xs font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/15";

  return (
    <div className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <p className="text-xs font-medium text-navy-foreground/80">
          Accessibility tools — adjust this site to your needs
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setHighContrast((v) => !v)}
            aria-pressed={highContrast}
            className={btn}
          >
            <Contrast className="size-4" aria-hidden="true" />
            High contrast: {highContrast ? "on" : "off"}
          </button>

          <div
            className="flex items-center gap-1 rounded-full border border-navy-foreground/25 px-1"
            role="group"
            aria-label="Text size"
          >
            <button
              type="button"
              onClick={() => setScale((s) => Math.max(MIN, Math.round((s - 0.1) * 10) / 10))}
              disabled={scale <= MIN}
              aria-label="Decrease text size"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-navy-foreground/15 disabled:opacity-40"
            >
              <Minus className="size-4" aria-hidden="true" />
            </button>
            <span className="px-1 text-xs font-semibold tabular-nums" aria-live="polite">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setScale((s) => Math.min(MAX, Math.round((s + 0.1) * 10) / 10))}
              disabled={scale >= MAX}
              aria-label="Increase text size"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-navy-foreground/15 disabled:opacity-40"
            >
              <Plus className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setScale(1)}
              aria-label="Reset text size"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-navy-foreground/15"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
            </button>
          </div>

          <button type="button" onClick={toggleSpeech} aria-pressed={speaking} className={btn}>
            {speaking ? (
              <VolumeX className="size-4" aria-hidden="true" />
            ) : (
              <Volume2 className="size-4" aria-hidden="true" />
            )}
            {speaking ? "Stop reading" : "Read page aloud"}
          </button>
        </div>
      </div>
    </div>
  );
}

// STRUDEL CHEATSHEET — Quick reference for live coding
// Full docs: https://strudel.cc/learn

// ═══════════════════════════════════════════
// MINI-NOTATION (pattern language)
// ═══════════════════════════════════════════
// "a b c d"     → 4 events per cycle
// "a ~ b ~"     → ~ is a rest/silence
// "a*4"         → repeat 4 times
// "a!4"         → replicate (different from repeat)
// "[a b] c"     → group a,b into one step
// "a <b c>"     → alternate each cycle
// "a(3,8)"      → euclidean rhythm (3 hits in 8 slots)
// "a | b"       → random choice
// "a?"          → 50% chance to play

// ═══════════════════════════════════════════
// SOUNDS
// ═══════════════════════════════════════════
// s("bd")                 → play a sample
// s("bd").bank("RolandTR808")  → use specific bank
// .sound("sawtooth")      → synth oscillators: sine, square, sawtooth, triangle

// ═══════════════════════════════════════════
// NOTES & MELODY
// ═══════════════════════════════════════════
// note("c4 e4 g4 b4")    → notes (letter + octave)
// note("60 64 67 71")     → MIDI note numbers

// ═══════════════════════════════════════════
// FILTERS & EFFECTS
// ═══════════════════════════════════════════
// .lpf(1000)              → low-pass filter (cutoff Hz)
// .hpf(200)               → high-pass filter
// .delay(0.5)             → delay amount
// .delaytime(0.25)        → delay time
// .room(0.5)              → reverb amount
// .gain(0.8)              → volume

// ═══════════════════════════════════════════
// ENVELOPE (sound shape)
// ═══════════════════════════════════════════
// .attack(0.01)           → fade in time
// .decay(0.1)             → fade out after attack
// .sustain(0.5)           → held level
// .release(0.2)           → fade out after release

// ═══════════════════════════════════════════
// PATTERN TRANSFORMS
// ═══════════════════════════════════════════
// .fast(2)                → play 2x speed
// .slow(2)                → play half speed
// .rev()                  → reverse pattern
// .jux(rev)               → reverse in one ear (stereo)
// .chop(16)               → slice into 16 pieces
// .struct("x ~ x x ~ x") → apply rhythmic structure
// .transpose(12)          → shift pitch up 12 semitones

// ═══════════════════════════════════════════
// INTERACTIVE
// ═══════════════════════════════════════════
// slider(default, min, max)  → on-screen slider
// ._punchcard({width: 600})  → visual pattern display

// ═══════════════════════════════════════════
// DRUM BANKS (use with .bank())
// ═══════════════════════════════════════════
// "RolandTR808"   — classic 808
// "RolandTR909"   — classic 909
// "KorgDDM110"    — Korg DDM-110
// "AkaiLinn"      — Linn drum

// ═══════════════════════════════════════════
// SAMPLE NAMES (use with s())
// ═══════════════════════════════════════════
// bd  → bass drum      cp  → clap
// sd  → snare          hh  → hihat
// oh  → open hihat     lt  → low tom
// mt  → mid tom        ht  → high tom
// cr  → crash          ri  → ride

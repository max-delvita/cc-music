// STEP 3: Adding a bassline with a synth
// note() defines the melody, .sound() picks the waveform

stack(
  // drums
  s("bd bd ~ bd").bank("RolandTR808"),
  s("~ cp ~ cp").bank("RolandTR808"),
  s("hh*8").bank("RolandTR808").gain(0.6),

  // bassline
  note("f#2 c#2 d2 a1")
    .sound("sawtooth")
    .lpf(800)
    .decay(0.2)
    .sustain(0.3)
    .gain(0.7)
)

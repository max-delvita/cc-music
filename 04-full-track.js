// STEP 4: Full track — similar to the Instagram reel
// Drums + bassline + lead + effects

stack(
  // DRUMS
  s("bd bd ~ bd")
    .bank("RolandTR808")
    .gain(0.8),
  s("~ cp ~ cp")
    .bank("RolandTR808")
    .room(0.3),
  s("hh*8")
    .bank("RolandTR808")
    .gain(0.5)
    .lpf(3000),

  // BASSLINE
  note("f#2 c#2 d2 a1 f#2 c#2 d2 d2")
    .sound("square, sawtooth")
    .struct("x*16")
    .sustain(0.5)
    .lpf(slider(800, 200, 3000))
    .decay(0.075)
    .gain(0.7)
    .hpf(150)
    ._punchcard({width: 600}),

  // LEAD
  note("f#4 ~ a4 ~ c#5 ~ a4 ~")
    .sound("triangle")
    .gain(0.3)
    .lpf(2000)
    .room(0.5)
    .delay(0.25)
    .delaytime(0.375)
)

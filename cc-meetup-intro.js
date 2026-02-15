// CC MEETUP — Chill Techno Rotation
// Paste into strudel.cc → Ctrl+Enter to play
// Hypnotic, warm, evolving — perfect pre-meetup ambiance

setcps(0.5) // ~120 bpm, relaxed tempo

stack(

  // KICK — deep and soft, 4-on-the-floor
  s("bd*4")
    .bank("RolandTR808")
    .gain(0.72)
    .lpf(400)
    .shape(0.3),

  // HATS — gentle shuffle, rotating pattern each cycle
  s("~ hh ~ hh ~ hh ~ <hh oh>")
    .bank("RolandTR808")
    .gain("<0.35 0.3 0.4 0.3>")
    .lpf(4500)
    .pan(sine.range(0.3, 0.7).slow(8)),

  // RIM — sparse click, drifting
  s("~ ~ rim ~")
    .bank("RolandTR808")
    .gain(0.25)
    .room(0.6)
    .delay(0.4)
    .delaytime(0.375)
    .pan(0.6),

  // BASSLINE — deep rolling sub, rotating notes
  note("<f2 [f2 f2 eb2 ~] [f2 ~ c2 ~] [f2 eb2 c2 ab1]>")
    .sound("sine")
    .lpf(350)
    .gain(0.7)
    .decay(0.3)
    .sustain(0.4)
    .release(0.1),

  // PAD — warm chords, slow rotation through voicings
  note("<[f3,ab3,c4] [eb3,g3,bb3] [c3,eb3,g3] [db3,f3,ab3]>")
    .sound("sawtooth")
    .lpf(slider(1200, 400, 3000))
    .gain(0.18)
    .attack(0.8)
    .decay(0.3)
    .sustain(0.6)
    .release(1.5)
    .room(0.7)
    .slow(2)
    .jux(rev),

  // TEXTURE — high shimmery layer, evolving
  note("<[c5,f5] [bb4,eb5] [g4,c5] [ab4,db5]>")
    .sound("triangle")
    .lpf(2500)
    .gain(0.08)
    .attack(1.5)
    .release(2)
    .room(0.8)
    .delay(0.5)
    .delaytime(0.5)
    .slow(4)
    .pan(sine.range(0.2, 0.8).slow(16)),

  // GHOST PERC — subtle texture, every 2 cycles
  s("~ ~ ~ <~ cp>")
    .bank("RolandTR808")
    .gain(0.15)
    .room(0.8)
    .lpf(2000)
    .delay(0.6)
    .delaytime(0.25)

)

// CC MEETUP — Generative Chill Techno + Visuals
// Visualizations added to key layers
// Tip: also press Ctrl+Shift+V in strudel.cc for full-screen waveform

setcps(0.5)

stack(

  // ═══════════════════════════════════════════
  // KICK — punchcard shows the evolving pattern
  // ═══════════════════════════════════════════
  s("<bd*4 [bd*4] [bd*3 ~] bd*4 [bd ~ bd bd] bd*4 [bd bd ~ bd] bd*4>")
    .bank("RolandTR808")
    .gain(0.72)
    .lpf(sine.range(300, 500).slow(37))
    .shape(0.3)
    ._punchcard({width: 800, height: 40, labels: true}),

  // ═══════════════════════════════════════════
  // HATS — punchcard for rhythmic visual
  // ═══════════════════════════════════════════
  s(`<
    [~ hh]*4
    hh*8
    [hh hh hh ~]*2
    [~ hh ~ hh ~ hh ~ oh]
    [hh ~ hh hh]*2
    hh(5,8)
    [hh*3 oh ~ hh*2 ~ ~]
  >`)
    .bank("RolandTR808")
    .gain(sine.range(0.2, 0.45).slow(23))
    .lpf(sine.range(2500, 5500).slow(41))
    .pan(sine.range(0.25, 0.75).slow(19))
    ._punchcard({width: 800, height: 40}),

  // ═══════════════════════════════════════════
  // PERC
  // ═══════════════════════════════════════════
  s(`<
    [~ ~ rim ~]
    [~ cp ~ ~]
    [~ ~ ~ rim]
    [~ ~ cp ~]
    [rim ~ ~ ~]
    [~ ~ ~ ~]
    [~ rim ~ cp]
    [~ ~ ~ rim]
    [cp ~ ~ ~]
    [~ ~ ~ ~]
    [~ rim ~ rim]
  >`)
    .bank("RolandTR808")
    .gain(0.22)
    .room(sine.range(0.3, 0.8).slow(29))
    .delay(0.35)
    .delaytime("<0.375 0.25 0.5 0.333>".slow(13))
    .pan(sine.range(0.3, 0.7).slow(17)),

  // ═══════════════════════════════════════════
  // BASS — pianoroll shows the note movement
  // ═══════════════════════════════════════════
  note(`<
    [f2 ~ f2 ~]
    [f2 f2 eb2 ~]
    [f2 ~ c2 ~]
    [f2 eb2 c2 ab1]
    [f2 ~ ~ f2]
    [eb2 ~ eb2 c2]
    [c2 ~ ab1 ~]
    [f2 eb2 ~ c2]
    [ab1 ~ c2 eb2]
    [f2 ~ eb2 ~]
    [c2 c2 ~ ab1]
    [f2 ~ ~ eb2]
    [ab1 c2 eb2 f2]
  >`)
    .sound("sine")
    .slow(3)
    .lpf(sine.range(250, 500).slow(31))
    .gain(0.65)
    .decay(0.3)
    .sustain(0.4)
    ._pianoroll({width: 800, height: 80, labels: true}),

  // ═══════════════════════════════════════════
  // PAD — pianoroll shows chord voicings shifting
  // ═══════════════════════════════════════════
  note(`<
    [f3,ab3,c4,eb4]
    [eb3,g3,bb3,d4]
    [db3,f3,ab3,c4]
    [c3,eb3,g3,bb3]
    [ab2,c3,eb3,g3]
    [bb2,d3,f3,ab3]
    [db3,f3,ab3,db4]
  >`)
    .sound("sawtooth")
    .slow(8)
    .lpf(sine.range(600, 1800).slow(47))
    .gain(0.16)
    .attack(1.5)
    .decay(0.5)
    .sustain(0.6)
    .release(2)
    .room(0.7)
    .jux(rev)
    ._pianoroll({width: 800, height: 100, labels: true}),

  // ═══════════════════════════════════════════
  // TEXTURE A — scope shows the waveform ripples
  // ═══════════════════════════════════════════
  note(`<
    [c5,f5]
    [bb4,eb5]
    [g4,c5]
    [ab4,db5]
    [eb4,ab4]
  >`)
    .sound("triangle")
    .slow(11)
    .lpf(sine.range(1500, 3500).slow(53))
    .gain(sine.range(0.0, 0.1).slow(43))
    .attack(2)
    .release(3)
    .room(0.85)
    .delay(0.4)
    .delaytime(0.5)
    .pan(sine.range(0.15, 0.85).slow(59))
    ._scope(),

  // ═══════════════════════════════════════════
  // TEXTURE B — drone
  // ═══════════════════════════════════════════
  note("<f1 eb1 c1 ab0 f1 c1>")
    .sound("sine")
    .slow(16)
    .gain(sine.range(0.0, 0.12).slow(61))
    .lpf(sine.range(150, 400).slow(67))
    .room(0.9)
    .attack(3)
    .release(4),

  // ═══════════════════════════════════════════
  // GHOST LAYER
  // ═══════════════════════════════════════════
  s(`<
    ~
    [~ ~ ~ cp]
    ~
    ~
    [lt ~ ~ ~]
    ~
    [~ mt ~ ~]
    ~
    [~ ~ oh ~]
  >`)
    .bank("RolandTR808")
    .slow(5)
    .gain(0.15)
    .room(0.9)
    .delay(0.6)
    .delaytime(0.333)
    .lpf(1800)
    .pan(sine.range(0.2, 0.8).slow(71)),

  // ═══════════════════════════════════════════
  // MELODIC FRAGMENT — pianoroll shows notes floating in
  // ═══════════════════════════════════════════
  note(`<
    [~ ~ f4 ~]
    [~ eb4 ~ ~]
    ~
    [~ ~ ~ c4]
    ~
    [ab3 ~ ~ ~]
    ~
    [~ c4 ~ eb4]
    ~
    [f4 ~ eb4 ~]
    ~
  >`)
    .sound("triangle")
    .slow(4)
    .gain(sine.range(0.0, 0.2).slow(37))
    .lpf(sine.range(1000, 2800).slow(43))
    .room(0.6)
    .delay(0.5)
    .delaytime(0.375)
    .attack(0.2)
    .release(1)
    .pan(sine.range(0.3, 0.7).slow(29))
    ._pianoroll({width: 800, height: 80})

)

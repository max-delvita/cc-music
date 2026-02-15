// STEP 2: Drum pattern with real drum machine samples
// Try swapping "RolandTR808" with "KorgDDM110" or "RolandTR909"

stack(
  s("bd bd ~ bd")
    .bank("RolandTR808"),
  s("~ cp ~ cp")
    .bank("RolandTR808"),
  s("hh*8")
    .bank("RolandTR808")
    .gain(0.6)
)

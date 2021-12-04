let x = 0
basic.showIcon(IconNames.Sad)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
basic.pause(5000)
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . # . # #
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    music.playMelody("C C C D E E C C ", 240)
    music.playMelody("E E C C E E E - ", 240)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . #
        . # . # .
        . # # . .
        `)
    music.playMelody("D D D E F F E D ", 240)
    music.playMelody("F F F F F F - - ", 240)
    basic.showLeds(`
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        `)
    music.playMelody("E E E F G G E E ", 240)
    music.playMelody("G G E E G G G - ", 240)
    basic.showLeds(`
        # # # . .
        . . # . .
        . # . # #
        # . . . #
        . . . # .
        `)
    music.playMelody("F F F G A A G F ", 240)
    music.playMelody("A A A A A A - - ", 240)
    basic.showLeds(`
        # . . . #
        . # . . #
        . . . # .
        . . # . .
        . # . . .
        `)
    music.playMelody("G G G C D E F G ", 240)
    music.playMelody("A A A A A A - - ", 240)
    basic.showLeds(`
        . # # # .
        . . . . .
        . # # # .
        . . . # .
        . . # . .
        `)
    music.playMelody("A A A D E F G A ", 240)
    music.playMelody("B B B B B B - - ", 240)
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . #
        . . . # .
        . # # . .
        `)
    music.playMelody("B B B E F G A B ", 240)
    music.playMelody("C5 C5 C5 C5 C5 - C5 B ", 240)
    basic.showIcon(IconNames.Happy)
    music.playMelody("A A F F B B G G ", 240)
    x += 1
    if (x < 3) {
        music.playMelody("C5 C5 B A G F E D ", 240)
    } else {
        music.playMelody("C5 C5 C5 C5 C5 C5 - - ", 240)
    }
}

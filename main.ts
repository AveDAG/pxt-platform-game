namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    jared.vy += -10
})
let jared: Sprite = null
scene.setBackgroundColor(9)
jared = sprites.create(img`
. . . . . . . 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 1 1 1 3 3 3 1 1 1 3 3 . . . . . . . . . . . . 
. . 3 3 3 3 3 3 1 1 1 1 3 3 3 1 1 1 3 3 . . . . . . . . . . . . 
. . 3 3 3 3 3 3 1 1 1 1 1 3 3 1 1 1 3 3 . . . . . . . . . . . . 
. . . 3 3 3 3 3 1 1 1 f f 3 3 1 f f 3 3 . . . . . . . . . . . . 
. . . . . 3 3 3 1 1 1 f f 3 3 1 f 1 3 3 . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . 
. . . . . . 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(jared)
jared.ay = 100
let trampo = sprites.create(img`
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 
f f 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 
8 f f f f 8 8 8 1 a 2 2 2 2 5 a a 5 2 2 2 2 a 1 8 8 8 f f f f 8 
f 8 8 7 7 1 1 8 8 8 1 5 1 2 1 a a 1 2 1 5 1 8 8 8 1 1 7 7 8 8 f 
f f 7 8 8 f 1 a 5 5 8 8 8 2 5 a a 5 2 8 8 8 5 5 a 1 f 8 8 7 f f 
7 7 8 8 8 8 a 8 8 8 8 8 8 8 8 a a 8 8 8 8 8 8 8 8 a 8 8 8 8 7 7 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, SpriteKind.Player)
scene.setBackgroundImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 1 1 9 9 9 9 1 1 9 1 1 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 1 1 1 9 9 9 9 9 1 1 1 1 1 9 9 9 9 1 1 1 9 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 9 9 9 9 9 1 1 1 9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 1 9 9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 
9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
9 9 9 9 9 9 1 1 1 9 9 9 9 9 1 1 9 1 1 9 9 9 9 9 9 1 9 9 9 9 9 9 
9 9 9 9 9 1 1 9 1 1 9 9 9 9 9 1 1 1 9 9 9 9 9 9 1 1 1 9 9 9 9 9 
9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 1 9 9 9 9 9 9 1 1 9 1 1 9 9 9 9 
9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 1 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 1 1 9 9 9 9 9 9 1 1 1 9 
`)
game.onUpdate(function () {
    jared.x += controller.dx()
})

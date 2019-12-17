namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    jared.vy += -250
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
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f 5 5 f f f f f f f f f f f 5 5 5 5 f f f f f f f f f f 
5 5 5 5 5 5 5 5 5 f f f f f f f f 5 5 f 5 5 5 5 f f f f f 5 5 5 
5 5 5 5 f f 5 5 5 5 f f f f f 5 5 5 f f f f 5 5 f f f 5 5 5 5 5 
5 5 f 1 f f f f 5 5 5 5 f f 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 
f 1 f f 1 f f f 5 f f 5 5 5 5 5 f 1 f f f f f f 1 f f 1 f f 1 f 
f f 1 f f 1 f f f f f 1 f 1 f f f f 1 f 1 1 f 1 f f 1 f f 1 f 1 
f f f 1 f f 1 f f f 1 f f f 1 1 f f f 1 1 1 1 f f 1 f f 1 f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
trampo = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f 5 5 f f f f f f f f f f f 5 5 5 5 f f f f f f f f f f 
5 5 5 5 5 5 5 5 5 f f f f f f f f 5 5 f 5 5 5 5 f f f f f 5 5 5 
5 5 5 5 f f 5 5 5 5 f f f f f 5 5 5 f f f f 5 5 f f f 5 5 5 5 5 
5 5 f 1 f f f f 5 5 5 5 f f 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 
f 1 f f 1 f f f 5 f f 5 5 5 5 5 f 1 f f f f f f 1 f f 1 f f 1 f 
f f 1 f f 1 f f f f f 1 f 1 f f f f 1 f 1 1 f 1 f f 1 f f 1 f 1 
f f f 1 f f 1 f f f 1 f f f 1 1 f f f 1 1 1 1 f f 1 f f 1 f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.object)
trampo = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f 5 5 f f f f f f f f f f f 5 5 5 5 f f f f f f f f f f 
5 5 5 5 5 5 5 5 5 f f f f f f f f 5 5 f 5 5 5 5 f f f f f 5 5 5 
5 5 5 5 f f 5 5 5 5 f f f f f 5 5 5 f f f f 5 5 f f f 5 5 5 5 5 
5 5 f 1 f f f f 5 5 5 5 f f 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 
f 1 f f 1 f f f 5 f f 5 5 5 5 5 f 1 f f f f f f 1 f f 1 f f 1 f 
f f 1 f f 1 f f f f f 1 f 1 f f f f 1 f 1 1 f 1 f f 1 f f 1 f 1 
f f f 1 f f 1 f f f 1 f f f 1 1 f f f 1 1 1 1 f f 1 f f 1 f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.object)
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

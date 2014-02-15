muquery.js
======================

_An experiment in making do without jQuery._

I'm not saying give up on using it entirely,
but if all you have to support is IE10+,
then suddenly jQuery starts looking like
Underscore, in that it's merely a convenience
wrapper around native functionality.

This was a quick experiment to see how far
I could reasonably get in replacing the bits
I use most commonly, sans $.ajax, which I
have no intention of rewriting. :)

None of this code has been tested, and should
be considered a raw braindump. Use at your
own peril!

Inspired by a couple different articles and
projects (listed below) and greatly indebted
to the Mozilla Developer Network for their
fine documentation.

UPDATE: As of the third commit, I've polyfilled
it so it works in IE9. I'm not planning on going
further with that.

1. http://blog.ponyfoo.com/2013/07/09/getting-over-jquery
2. http://blog.adtile.me/2014/01/16/a-dive-into-plain-javascript/
3. http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
4. http://vanilla-js.com/
5. http://underscorejs.org/
6. http://prototypejs.org/
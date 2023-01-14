## systemfontstack

_Turning back the clock on webfonts since 2018_

Webfonts were great when most computers only had a handful of good fonts
pre-installed. Thanks to font creation and buying by Apple, Microsoft, Google,
and other folks, most computers have good—no, great—fonts installed, and
they're a great option if you want to _not_ load a separate font.

Some of the disadvantages of webfonts are:

- If you're including fonts from TypeKit or Google, you're hitting another domain.
So, they might hurt your site's ability to work offline, will require extra
domain connections, require extra entries in your Content-Security-Policy
- Webfonts often have a narrow range of glyphs included, so they can make your
site's experience in non-English languages sub-par
- Webfonts also tend to have a scarcity of _weights_, and in a lot of cases you'll
only tick off a few buttons for the weights you want to include, which means that
your site will be missing styling - or even worse, synthesize faux-bold styles.
Bad news!

Some of the disadvantages of system font stacks:

- Specifying system fonts on some platforms is just weird. `-apple-system` and so on.
- You can sometimes get another font of the same name that exists on someone's computer
  somewhere.
- You can't demonstrate your world-class taste for pleasant typography selection.

This builds on the [amazing, excellent blog post](https://bitsofco.de/the-new-system-font-stack/)
by [Ire Aderinokun](https://ireaderinokun.com/), as well as plenty of other sources.
I'll _heavily_ cite my sources because citations are important. Let's start off.

### Notes

Inspired by bootstrap, I consider increasing the specific names in our mono font stack. https://github.com/twbs/bootstrap/issues/26228

But this is a bit confusing:

```
code, kbd, pre, samp {
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

- Why specify `Menlo,Monaco`? As far as I can tell, the only computers that don’t have Menlo, but do have Monaco are those running macOS from 10 to 10.5, - so Leopard and Tiger. That can't be a sizeable chunk.

### Cite

* http://markdotto.com/2018/02/07/github-system-fonts/
* http://tachyons.io/
* https://thedisconnect.co/one/
* https://www.client9.com/css-system-font-stack---monospace-v1/
* http://z12t.com/system-shock-mono/
* https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f

## Why a website for system fonts

**Three stacks**

First of all, there are really three or more system font stacks:

- Mono
- Sans-serif
- Serif

You could also say 'slab serif' needs a stack, but there's not much precedent
for one, even though there are plenty of slab serif system fonts.

**Google -> copy + paste**

This should be as short as possible. Good fast font stacks should be default.
The website should make them obviously copy pasteable. Maybe not a copy button
though.

**What you see is what you will eventually get**

It's useful to know what the font stack looks like at various levels of fall-through -
does it look bizarre on Windows or Linux or Android? We should make that obvious.

**Make pitfalls obvious**

Don't start a shorthand `font` declaration with `-apple-system`, and other bummer
lessons.

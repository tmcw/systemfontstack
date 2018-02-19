import Head from "next/head";
import Link from "next/link";

const sansSerifFonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  "avenir next",
  "avenir",
  "helvetica neue",
  "helvetica",
  "Ubuntu",
  "roboto",
  "noto",
  "segoe ui",
  "arial",
  "sans-serif"
];

const serifFonts = [
  "Iowan Old Style",
  "Apple Garamond",
  "Baskerville",
  "Times New Roman",
  "Droid Serif",
  "Times",
  "Source Serif Pro",
  "serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol"
];

const monoFonts = [
  "Menlo",
  "Consolas",
  "Monaco",
  "Liberation Mono",
  "Lucida Console",
  "monospace"
];

class ClickToSelect extends React.PureComponent {
  select = e => {
    e.preventDefault();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this._target);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  getRef = target => {
    this._target = target;
  };

  render() {
    return (
      <div ref={this.getRef} onClick={this.select}>
        {this.props.children}
      </div>
    );
  }
}

export default () => (
  <div>
    <Head>
      <title>systemfontstack</title>
    </Head>
    <div className="pa1 bg-dark-gray">
      <div className="mw7 ph4 center">
        <a
          className="white link"
          href="https://github.com/tmcw/systemfontstack"
        >
          Fork &amp; contribute on GitHub
        </a>
      </div>
    </div>

    <div className="bg-black">
      <div className="mw7 ph4 center white">
        <h1 className="fw9 f1 ttu ma0 pv5">The system font stack</h1>
      </div>
    </div>
    <div className="mw7 ph4 center black-90">
      <p className="measure-wide lh-copy mt5">
        Webfonts were great when most computers only had a handful of good fonts
        pre-installed. Thanks to font creation and buying by Apple, Microsoft,
        Google, and other folks, most computers have good — no, great — fonts
        installed, and they're a great option if you want to <em>not</em> load a
        separate font.
      </p>
      <div className="mt5">
        <div className="bg-yellow pv1 ph2 ttu dib br2 f7">
          Click to select & copy
        </div>
        <h1 className="fw5 f4">Sans-serif</h1>
        <ClickToSelect>
          <div className="code overflow-none lh-copy">
            {sansSerifFonts.join(", ")}
          </div>
        </ClickToSelect>
        <h1 className="fw5 f4">Serif</h1>
        <ClickToSelect>
          <div className="code overflow-none lh-copy">
            {serifFonts.join(", ")}
          </div>
        </ClickToSelect>
        <h1 className="fw5 f4">Mono</h1>
        <ClickToSelect>
          <div className="code overflow-none lh-copy">
            {monoFonts.join(", ")}
          </div>
        </ClickToSelect>
      </div>
    </div>
    <div className="bg-near-white pv5 mt5">
      <div className="mw7 ph4 center">
        <div>
          <h1 className="fw5 f4">References</h1>
          <ul>
            <li className="pa1">
              <a
                className="link blue hover-black"
                href="https://bitsofco.de/the-new-system-font-stack/"
              >
                The New System Font Stack
              </a>
            </li>
            <li className="pa1">
              <a
                className="link blue hover-black"
                href="http://markdotto.com/2018/02/07/github-system-fonts/"
              >
                GitHub System Fonts
              </a>
            </li>
            <li className="pa1">
              <a
                className="link blue hover-black"
                href="https://www.client9.com/css-system-font-stack---monospace-v1/"
              >
                CSS System Font Stack - Monospace V1
              </a>
            </li>
            <li className="pa1">
              <a
                className="link blue hover-black"
                href="http://z12t.com/system-shock-mono/"
              >
                System Shock Mono
              </a>
            </li>
            <li className="pa1">
              <a
                className="link blue hover-black"
                href="https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f"
              >
                Implementing system fonts on Booking.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

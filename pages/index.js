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

const sansSerifPlatforms = {
  "": 0,
  mac: 0,
  windows: 4,
  linux: 6
};

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

const serifPlatforms = {
  "": 0,
  mac: 0,
  windows: 2,
  linux: 3
};

const monoFonts = [
  "Menlo",
  "Consolas",
  "Monaco",
  "Liberation Mono",
  "Lucida Console",
  "monospace"
];

const monoPlatforms = {
  "": 0,
  mac: 0,
  windows: 1,
  linux: 3
};

class ClickToSelect extends React.PureComponent {
  select = e => {
    e.preventDefault();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this._target);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
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

function formatByPlatform(fonts, idx) {
  return fonts.map((font, i) => {
    const comma = i === fonts.length - 1 ? "" : ", ";
    return i >= idx ? (
      font + comma
    ) : (
      <span key={i} className="black-20">
        {font + comma}
      </span>
    );
  });
}

export default class extends React.Component {
  state = {
    platform: ""
  };
  selectPlatform = e => {
    this.setState({
      platform: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Head>
          <title>systemfontstack</title>
        </Head>
        <div className="pa1 bg-dark-gray">
          <div className="mw7 ph4 pv1 center">
            <a
              className="white hover-blue link f6"
              href="https://github.com/tmcw/systemfontstack"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w1 h1 v-mid mr2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Fork &amp; contribute on GitHub
            </a>
          </div>
        </div>

        <div className="bg-black">
          <div className="mw7 ph4 center white pv4">
            <h1 className="fw9 f1 ttu ma0 ">System font stack</h1>
            <p className="measure-wide lh-copy mt3 o-80">
              Webfonts were great when most computers only had a handful of good
              fonts pre-installed. Thanks to font creation and buying by Apple,
              Microsoft, Google, and other folks, most computers have good — no,
              great — fonts installed, and they're a great option if you want to{" "}
              <em>not</em> load a separate font.
            </p>
          </div>
        </div>
        <div className="mw7 ph4 center black-90">
          <div
            className="dg-ns mt4"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "20px 20px"
            }}
          >
            <div>
              <div className="fw7 mb2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w1 h1 dib v-top mr2"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Fast
              </div>
              <p className="lh-copy ma0">
                No network request, no time to parse a font, no flash of an
                incorrect font.
              </p>
            </div>
            <div className="mt0-ns mt3">
              <div className="fw7 mb2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w1 h1 dib v-top mr2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Styles & unicode
              </div>
              <p className="lh-copy ma0">
                System fonts have lots of styles and broad language coverage,
                unlike many webfonts.
              </p>
            </div>
            <div className="mt0-ns mt3">
              <div className="fw7 mb2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w1 h1 dib v-top mr2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Familiarity
              </div>
              <p className="lh-copy ma0">
                Web apps feel more native when they use system font faces.
              </p>
            </div>
          </div>
          <div className="mt5">
            <h1 className="fw5 f3 mb4 mt2">Basic system font stacks</h1>
            <div className="bg-yellow pv1 ph2 ttu dib br2 f7">
              Click to select & copy
            </div>
            <h1 className="fw5 f4 mt3 mb2">Sans-serif</h1>
            <ClickToSelect>
              <div className="code overflow-none lh-copy">
                font-family:{" "}
                {formatByPlatform(
                  sansSerifFonts,
                  sansSerifPlatforms[this.state.platform]
                )};
              </div>
            </ClickToSelect>
            <h1 className="fw5 f4 mt3 mb2">Serif</h1>
            <ClickToSelect>
              <div className="code overflow-none lh-copy">
                font-family:{" "}
                {formatByPlatform(
                  serifFonts,
                  serifPlatforms[this.state.platform]
                )};
              </div>
            </ClickToSelect>
            <h1 className="fw5 f4 mt3 mb2">Mono</h1>
            <ClickToSelect>
              <div className="code overflow-none lh-copy">
                font-family:{" "}
                {formatByPlatform(
                  monoFonts,
                  monoPlatforms[this.state.platform]
                )};
              </div>
            </ClickToSelect>
            <div className="mt4 tc">
              What font do I get on{" "}
              <select onChange={this.selectPlatform}>
                <option value="">---</option>
                <option value="mac">macOS</option>
                <option value="windows">Windows</option>
                <option value="linux">Linux</option>
              </select>?
            </div>
          </div>
          <hr className="bt b--black-20 mw5 center mt5" />
          <h3 className="fw5 f4">FAQ</h3>
          <div>
            <h3 className="mb0 mt2">
              What's <code>-apple-system</code>?
            </h3>
            <p className="measure-wide lh-copy mt2">
              -apple-system and BlinkMacSystemFont are aliases for the default
              fonts on new macOS and iOS computers. In recent version, they
              alias to the new{" "}
              <a
                className="link blue hover-black"
                href="https://developer.apple.com/fonts/"
              >
                San Francisco font
              </a>.
            </p>
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
  }
}

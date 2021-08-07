import FacebookSvg from "../svg/facebookSvg";
import PatreonSvg from "../svg/patreonSvg";
import TwitterSvg from "../svg/twitterSvg";
import YoutubeIconSvg from "../svg/youtubeiconSvg";

const socials = [
  [<PatreonSvg />, "https://www.patreon.com/thehappyprogrammer", "Patreon"],
  [
    <FacebookSvg />,
    "https://www.facebook.com/The-Happy-Programmer-106178104593013",
    "FaceBook",
  ],
  [<TwitterSvg />, "https://twitter.com/happy_prog", "Twitter"],
  [
    <YoutubeIconSvg />,
    "https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA",
    "YouTube",
  ],
];

const Socials = () => {
  {
    socials.map(([Icon, link, label]) => (
      <a rel="noreferrer" href={link} aria-label={label} key={link}>
        <Icon />
      </a>
    ));
  }
};

export default Socials;

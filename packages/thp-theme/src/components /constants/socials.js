import FacebookSvg from "../svg/facebook-svg";
import PatreonSvg from "../svg/patreon-svg";
import TwitterSvg from "../svg/twitter-svg";
import YoutubeIconSvg from "../svg/youtube-icon-svg";

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

const Socials = () =>
  socials.map(([icon, link, label]) => (
    <a rel="noreferrer" href={link} aria-label={label} key={link}>
      {icon}
    </a>
  ));

export default Socials;

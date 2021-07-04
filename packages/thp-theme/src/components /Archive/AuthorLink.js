import Link from "@frontity/components/link";
import { styled } from "frontity";

export default ({ date, author }) => {
  const dt = new Date(date);
  return (
    <DateText>
      {dt.toDateString()} •{" by "}
      <Link link={author.link}>{author.name}</Link>
    </DateText>
  );
};

const DateText = styled.p`
  font-size: 0.9em;
  padding: 0 0em;
  color: var(--secondary-text-colour);
  margin-block-start: auto;
  margin-bottom: 0em;
  font-weight: var(--font-weight-text);
`;

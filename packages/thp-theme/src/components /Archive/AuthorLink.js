import React from "react";
import Link from "@frontity/components/link";
import { styled } from "frontity";

const AuthorLink = ({ date, author }) => {
  const dt = new Date(date);
  return (
    <DateText>
      {dt.toDateString()} •{" by "}
      <Link link={author.link}>{author.name}</Link>
    </DateText>
  );
};

export default AuthorLink;

const DateText = styled.p`
  font-size: 0.9em;
  margin: 1em 0em;
  padding: 0 0em;
  color: var(--secondary-text-colour);
  font-weight: 400;
`;

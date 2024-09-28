// abbr url = secondary level domain name (including user level domain if available) + top level domain

import { getSubdomain, getDomain } from "tldts";

// for websites where users can create their profile, use the first path param (eg github, twitter, etc)

const USER_LEVEL_DOMAINS = new Set(["github.io"]);
const FIRST_PATH_PARAM_DOMAINS = new Set([
  "twitter.com",
  "github.com",
  "medium.com",
]);

export const getAbbreviatedUrl = (storyURL: string) => {
  let abbrDomain = getDomain(storyURL) || "";

  if (USER_LEVEL_DOMAINS.has(abbrDomain)) {
    return `${getSubdomain(storyURL)}.${abbrDomain}`;
  }
  if (FIRST_PATH_PARAM_DOMAINS.has(abbrDomain)) {
    const url = new URL(storyURL);
    // When split with '/' array available is ["","username"] so 1st index
    // Also remove any non alphanumeric
    let username = url.pathname.split("/")[1].replace(/[^a-zA-Z0-9]/g, "");
    // usernames can have upper case chars
    return `${abbrDomain}/${username}`.toLowerCase();
  }
  return abbrDomain;
};

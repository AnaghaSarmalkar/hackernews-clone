import { intlFormatDistance } from "date-fns";
import { Item } from "../api/items";
import { getAbbreviatedUrl } from "../utilities/abbreviatedUrl";

interface ItemProps {
  item: Item;
}

export default function ItemView({ item }: ItemProps) {
  const { title, url, score, by, time } = item;
  const pageUrl = window.location.href;
  let resAbbrUrl = "";

  if (!!url) {
    resAbbrUrl = getAbbreviatedUrl(url);
  }
  //     Ranking
  // Title
  // Abbreviated URL*
  // Points
  // Author
  // Time posted

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-1 items-baseline">
        <a href={url} className="text-sm opacity-100 visited:text-[#828282]">
          {title}
        </a>
        {resAbbrUrl !== "" && (
          <a
            href={`${pageUrl}from?site=${resAbbrUrl}`}
            className="text-xs opacity-50"
          >{`(${resAbbrUrl})`}</a>
        )}
      </div>
      <div className="flex gap-x-1 text-xs opacity-50">
        <div>{`${score} points`}</div>
        <div>{`by ${by}`}</div>
        {time && (
          <div>{intlFormatDistance(new Date(time * 1000), new Date())}</div>
        )}
      </div>
    </div>
  );
}

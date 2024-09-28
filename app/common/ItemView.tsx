import { Item } from "../api/items";

interface ItemProps {
  item: Item;
}

export default function ItemView({ item }: ItemProps) {
  const { title, url, score, by, time } = item;
  const pageUrl = window.location.href;
  const abbrUrl = "";
  //     Ranking
  // Title
  // Abbreviated URL*
  // Points
  // Author
  // Time posted

  return (
    <div>
      <div>
        <a href={url}>{title}</a>
        <a href={`${pageUrl}from?site=${abbrUrl}`}>{abbrUrl}</a>
      </div>
      <div></div>
    </div>
  );
}

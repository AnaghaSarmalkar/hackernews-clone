"use client";

import { useEffect, useState } from "react";
import { getTopStories, Item } from "../api/items";
import ItemView from "./ItemView";

export default function ItemData() {
  //   define loading, error, data states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topStories, setTopStories] = useState<Item[] | null>(null);

  // make api call

  useEffect(() => {
    getTopStories()
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        setTopStories(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);

  if (isLoading) {
    // replace with loading spinner
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  // call item view component
  return (
    <>
      {topStories &&
        topStories.map((story: Item, idx: number) => (
          <ItemView key={idx} item={story} />
        ))}
    </>
  );
}

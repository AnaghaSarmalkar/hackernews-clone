"use client";

import { useEffect, useState } from "react";
import { getTopStories, Item } from "../api/items";
import ItemView from "./ItemView";
import { TriangleIcon } from "../icons/TriangleIcon";

const STORIES_PER_PAGE = 30;

export default function ItemData() {
  //   define loading, error, data states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topStories, setTopStories] = useState<Item[] | null>(null);

  //   local state which tells the index to show data from
  const [startIndex, setStartIndex] = useState<number>(0);

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
        topStories
          ?.slice(startIndex, startIndex + STORIES_PER_PAGE)
          .map((story: Item, idx: number) => (
            <div key={idx} className="flex gap-x-1">
              <div className="min-w-6 text-right text-[#828282]">{`${
                startIndex + idx + 1
              }.`}</div>
              <div className="mt-[0.3em]">
                <TriangleIcon />
              </div>
              <div className="text-left">
                <ItemView item={story} />
              </div>
            </div>
          ))}
      <button
        onClick={() => {
          setStartIndex(startIndex + STORIES_PER_PAGE);
        }}
      >
        More
      </button>
    </>
  );
}

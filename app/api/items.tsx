import { axiosClient } from "./client";

// get top story ids
// get the data associated to every story

export const getTopStoryIds = async (): Promise<number[]> => {
  try {
    const itemNums = await axiosClient.get("topstories.json");
    return itemNums.data;
  } catch (error) {
    console.error("Error fetching story ids:", error);
    throw new Error("Failed to fetch top story ids.");
  }
};

enum ItemType {
  Job = "job",
  Story = "story",
  Comment = "comment",
  Poll = "poll",
  PollOpt = "pollopt",
}

// id is required
export type Item = {
  id: number; // The item's unique id.
  deleted?: boolean; // 	true if the item is deleted.
  type?: ItemType; //The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  by?: string; //	The username of the item's author.
  time?: number; //Creation date of the item, in Unix Time.
  text?: string; //	The comment, story or poll text. HTML.
  dead?: boolean; // 	true if the item is dead.
  parent?: number; //The comment's parent: either another comment or the relevant story.
  poll?: number; //The pollopt's associated poll.
  kids?: number[]; //The ids of the item's comments, in ranked display order.
  url?: string; //The URL of the story.
  score?: number; //The story's score, or the votes for a pollopt.
  title?: string; //The title of the story, poll or job. HTML.
  parts?: number[]; //A list of related pollopts, in display order.
  descendants?: number; //In the case of stories or polls, the total comment count.``
};

export const getItemData = async (id: number): Promise<Item> => {
  try {
    const res = await axiosClient.get(`item/${id}.json`);
    return res.data;
  } catch (error) {
    console.error("Error fetching item data:", error);
    throw new Error("Failed to fetch item data.");
  }
};

export const getTopStories = async (): Promise<Item[]> => {
  try {
    const topStoryIds = await getTopStoryIds();
    const promises: Promise<Item>[] = [];

    topStoryIds.forEach((storyId: number) => {
      promises.push(getItemData(storyId));
    });

    const topStories = await Promise.all(promises);
    return topStories;
  } catch (error) {
    console.error("Error fetching top stories data:", error);
    throw new Error("Failed to fetch top stories data.");
  }
};

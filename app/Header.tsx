import { Y18Icon } from "./icons/Y10Icon";

export default function Header() {
  return (
    <div className="flex gap-x-2 bg-[#ff6600] px-1 ">
      <div className="flex gap-x-0.5">
        <Y18Icon />
        <div className="font-bold">Hacker News</div>
      </div>
      <div className="flex grow justify-between">
        <div className="flex gap-x-1">
          <div>new</div>
          <div>|</div>
          <div>past</div>
          <div>|</div>
          <div>comments</div>
          <div>|</div>
          <div>ask</div>
          <div>|</div>
          <div>show</div>
          <div>|</div>
          <div>jobs</div>
          <div>|</div>
          <div>submit</div>
        </div>
        <div>
          <div>login</div>
        </div>
      </div>
    </div>
  );
}

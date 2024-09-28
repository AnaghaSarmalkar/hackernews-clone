import Header from "./Header";
import Body from "./Body";

export default function Home() {
  return (
    <div className="flex w-screen justify-center items-center p-2">
      <div className="min-w-[800px]">
        <Header />
        <Body />
        <div>Footer</div>
      </div>
    </div>
  );
}

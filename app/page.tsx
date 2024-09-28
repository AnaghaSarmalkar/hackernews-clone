import Image from "next/image";
import ItemData from "./common/ItemData";

export default function Home() {
  return (
    <div>
      <div>Header</div>
      <div>
        <ItemData />
      </div>
      <div>Footer</div>
    </div>
  );
}

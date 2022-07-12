import Image from "next/image";
import {HeaderIcon} from "./HeaderIcon";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon
} from "@heroicons/react/outline";

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title={"HOME"} Icon={HomeIcon} />
        <HeaderIcon title={"TRENDING"} Icon={LightningBoltIcon} />
        <HeaderIcon title={"VERIFED"} Icon={BadgeCheckIcon} />
        <HeaderIcon title={"COLLECTIONS"} Icon={CollectionIcon} />
        <HeaderIcon title={"SEARCH"} Icon={SearchIcon} />
        <HeaderIcon title={"Account"} Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt={''}
      />
    </header>
  )
}
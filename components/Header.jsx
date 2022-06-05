import Logo from './Logo'
import NavItem from './NavItem'

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

export default function Header() {
  return (
    <header className="my-5 mx-auto flex max-w-7xl flex-col items-center justify-between p-4 sm:flex-row">
      <nav className="flex max-w-2xl justify-between">
        <NavItem title="HOME" Icon={HomeIcon} />
        <NavItem title="TRENDING" Icon={LightningBoltIcon} />
        <NavItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <NavItem title="COLLECTIONS" Icon={CollectionIcon} />
        <NavItem title="SEARCH" Icon={SearchIcon} />
        <NavItem title="ACCOUNT" Icon={UserIcon} />
      </nav>
      <Logo />
    </header>
  )
}

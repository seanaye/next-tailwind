import Link from 'next/link'
import { CartButton } from './cart-button'

export const NavBar: React.FC = () => {
  //const tabs: { text: string; to: string; }[] = [
  //]
  function toggleDark () {
  }

  return <div>
    <div className="mx-auto py-4">
      <div className="flex flex-row">
        <Link href="/">
          <a className="text-2xl flex-grow text-left" >NavBar.tsx</a>
        </Link>
      </div>
    </div>
  </div>
}

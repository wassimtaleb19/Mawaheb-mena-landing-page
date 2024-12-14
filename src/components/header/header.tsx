import { Link } from 'react-router-dom'
import favicon from '@/assets/favicon.ico' // Use alias or relative path

function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6">
      <div className="max-w-6xl px-6 lg:ml-12">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center gap-2 no-underline">
              {/* Here is the icon if i wana place mawaheb mena icon */}
              <img src={favicon} alt="Mawaheb MENA Icon" className="h-7 w-7" />
              {/* And if i wanna add MAWAHEB MENA beside the logo */}
              <span>{title}</span>
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header

import { onClickOnLink } from '../../events';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| ...
|
*/

export default function Header() {
  return (
    <header className="header divide-solid divide-gray-divider flex items-center justify-between px-6 py-4">
      <a href="#" className="logo-wrapper flex items-center" onClick={onClickOnLink}>
        <div className="image-container bg-slate-200">
          <img src="https://via.placeholder.com/50/e2e8f0/797b82/?text=Logo" className="object-cover" alt="Logo" />
        </div>
        <div className="text ml-3">
          <span className="font-bold">Fashion</span>hub
        </div>
      </a>
      {/* <a href="#" className="toggle-size-menu bg-slate-200" onClick={onClickOnLink} /> */}
    </header>
  )
}

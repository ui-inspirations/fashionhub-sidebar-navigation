import { onClickOnLink } from '../../events';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| ...
|
*/

export default function Profile() {
  return (
    <section className="profile bg-white divide-gray-divider mb-2 mt-8 mx-8 rounded-lg">
      <a href="#" className="flex items-center p-3" onClick={onClickOnLink}>
        <div className="image-container bg-slate-200">
          <img src="https://via.placeholder.com/50/e2e8f0/797b82/?text=JD" className="image object-cover" alt="Profile" />
        </div>
        <div className="info ml-3">
          <div className="name font-bold">John Doe</div>
          <div className="position text-[#9FA0A5]">Software Developer</div>
        </div>
      </a>
    </section>
  )
}

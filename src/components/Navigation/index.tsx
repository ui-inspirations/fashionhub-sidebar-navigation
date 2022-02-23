import { onClickOnLink } from '../../events';
import SvgIcon from '../SvgIcon';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| ...
|
*/

const Title = ({ value }: any) => (
  <li className="title tracking-wider mb-2 mx-8 uppercase text-[#9FA0A5]">{value}</li>
)

const Element = ({
  title,
  url = '#',
  icon = null,
  cssClasses = 'element mx-5 my-1',
  noPreventDefault = false
}: any) => (
  <li className={cssClasses}>
    <a
      href={url}
      className="link flex items-center px-3 py-3 rounded-lg font-semibold"
      onClick={noPreventDefault ? (() => {}) : onClickOnLink}
    >
      <span className={`icon flex items-center justify-center ${!icon ? 'bg-slate-200' : ''}`}>
        {!!icon && <SvgIcon name={icon} />}
      </span>
      <span className="text ml-4">{title}</span>
    </a>
  </li>
)

export default function Navigation() {
  return (
    <section className="navigation divide-y divide-gray-divider">
      <ul className="list font-medium pb-6 pt-6">
        <Element
          title="Github Repo"
          url="https://github.com/ui-inspirations/fashionhub-sidebar-navigation"
          icon="github"
          noPreventDefault
        />
      </ul>
      <ul className="list font-medium pb-6 pt-6">
        <Title value="ANAlYTICS" />
        <Element title="Dashboard" icon="house" />
        <Element title="Reports" icon="chart-pie" cssClasses="element px-5 my-1" />
      </ul>
      <ul className="list font-medium pb-6 pt-6">
        <Title value="APPLICATION" />
        <Element title="Business" icon="suitcase" />
        <Element title="Members" icon="user-group" />
      </ul>
      <ul className="list font-medium pb-6 pt-6">
        <Title value="OTHERS" />
        <Element title="Notifications" icon="bell" />
        <Element title="Membership" icon="star" />
      </ul>
    </section>
  )
}

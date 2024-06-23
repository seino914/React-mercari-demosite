import { navigationMenus } from '../constants';

export const PageNavigation = () => {
  return (
    <div>
      <nav className="sticky bottom-0 z-10 border-t border-secondary-border bg-white lg:hidden">
        <ul className="grid grid-cols-4">
          {navigationMenus.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="flex flex-col items-center justify-center gap-1 py-1.5 text-xs hover:bg-secondary-hover"
              >
                <nav.icon className="size-[24px] stroke-2" />
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

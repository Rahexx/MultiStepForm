import NavItem from "./NavItem";

function Nav() {
  return (
    <nav className="absolute w-full top-8">
        <ul className="w-[11.25rem] mx-auto flex gap-4 list-none">
            <NavItem stepNumber={1} />
            <NavItem stepNumber={2} />
            <NavItem stepNumber={3} />
            <NavItem stepNumber={4} />
        </ul>
    </nav>
  );
}

export default Nav;
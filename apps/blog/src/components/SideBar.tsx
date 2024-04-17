export default function SideBar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="navbar-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 z-20 min-h-full w-80 p-4">
        <li>
          <a>Latest</a>
        </li>
        <li>
          <a>Posts</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  );
}

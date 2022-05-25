import "./Bookmark.css";
import "./Bookmark-Responsive.css";
import { Nav, NavForTab, Sidebar, BookmarkCard } from "../../components/Index";
export function Bookmark() {
  return (
    <div className="bookmark-page--Container">
      <Nav showSearchBar={false} showLoginBtn={false} showThemeBtn={false} />
      <NavForTab />
      <Sidebar />
      <main className="bookmark__main--container">
        <BookmarkCard />
      </main>
    </div>
  );
}

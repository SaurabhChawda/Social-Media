import "./Profile.css";
import "./Profile-Responsive.css";
import { Nav, NavForTab, Sidebar, ProfileCard } from "../../components/Index";
export function Profile() {
  return (
    <div className="post-page--Container">
      <Nav showSearchBar={false} showLoginBtn={false} showThemeBtn={true} />
      <NavForTab />
      <Sidebar />
      <main className="post__main--container">
        <ProfileCard />
      </main>
    </div>
  );
}

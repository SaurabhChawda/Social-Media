import "./Profile.css";
import "./Profile-Responsive.css";
import { Nav, NavForTab, Sidebar, ProfileCard, HomePageCard } from "../../components/Index";
export function Profile() {
  return (
    <div className="post-page--Container">
      <Nav showSearchBar={false} showLoginBtn={false} showThemeBtn={false} />
      <NavForTab />
      <Sidebar />
      <main className="post__main--container">
        <ProfileCard />
      </main>
    </div>
  );
}

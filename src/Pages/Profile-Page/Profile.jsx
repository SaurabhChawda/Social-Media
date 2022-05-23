import "./Profile.css";
import "./Profile-Responsive.css";
import { Nav, NavForTab, Sidebar, ProfileCard } from "../../components/Index";
export function Profile() {
  return (
    <div className="post-page--Container">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <main className="post__main--container">
        <ProfileCard />
      </main>
    </div>
  );
}

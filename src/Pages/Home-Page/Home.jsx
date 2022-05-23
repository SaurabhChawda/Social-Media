import "./Home.css";
import "./Home-Responsive.css";
import { Nav, NavForTab, Sidebar, Aside, HomePageCard } from "../../components/Index";
export function Home() {
  return (
    <div className="page--Container">
      <Nav showSearchBar={true} showLoginBtn={true} showThemeBtn={true} />
      <NavForTab />
      <Sidebar />
      <Aside />
      <main className="main--container">
        <HomePageCard />
      </main>
    </div>
  );
}

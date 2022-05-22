import "./Post.css";
import "./Post-Responsive.css";
import { Nav, NavForTab, Sidebar,PostPageCard} from "../../components/Index";
export function Post() {
  return (
    <div className="post-page--Container">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <main className="post__main--container">
      <PostPageCard />
      </main>
    </div>
  );
}

import "./Aside.css";
import { Filter, SuggestedUser } from "../Index";
export function Aside() {
  return (
    <div className="aside-container">
      <div className="aside">
        <Filter />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
      </div>
    </div>
  );
}

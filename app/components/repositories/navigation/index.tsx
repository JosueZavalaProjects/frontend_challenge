import {
  faArchive,
  faBook,
  faBookBookmark,
  faChain,
  faCodeFork,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Option } from "./option";

export const Navigation = () => {
  return (
    <aside>
      <nav className="grid">
        <h2 className="text-2xl font-semibold">Repositories</h2>
        <ul className="mt-2">
          <Option image={faHome} option="All" />
          <Option image={faBook} option="Public" />
          <Option image={faChain} option="Sources" />
          <Option image={faCodeFork} option="Forks" />
          <Option image={faArchive} option="Archived" />
          <Option image={faBookBookmark} option="Templates" />
        </ul>
      </nav>
    </aside>
  );
};

import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <div>
          <h1>Search For a package</h1>
          <RepositoriesList />
        </div>
      </div>
    </Provider>
  );
};

export default App;

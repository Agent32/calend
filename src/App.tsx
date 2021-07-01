import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarDrawer } from "./components/navBar/navBarDrawer";
import { GroupListMainContainer } from "./components/pages/groups/groupsListContainer";
import { JournalMainContainer } from "./components/pages/calendarAndJornal/calendarJornalContainer";
function App() {
  return (
    <div className="App">

      <NavBarDrawer/>
      <Switch>
        <Redirect exact from="/" to="/groups" />


        <Route path="/groups" component={GroupListMainContainer} />
        <Route path="/journal" component={JournalMainContainer} />
      </Switch>
    </div>
  );
}

export default App;

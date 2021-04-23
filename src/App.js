import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import ChannelProvider from "./contexts/ChannelContext";
import ChannelPage from "./pages/ChannelPage";
import SchedulePage from "./pages/SchedulePage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="App">
      <ChannelProvider>
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/browse" component={BrowsePage} />
          <Route exact path="/channels/:channelId" component={ChannelPage} />
          <Route exact path="/schedule/:channelId" component={SchedulePage} />
          <Route exact path="/Categories" component={CategoriesPage} />
          <Route exact path="/category/:channelId" component={CategoryPage} />
        </BrowserRouter>
      </ChannelProvider>
    </div>
  );
};

export default App;

import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import ChannelProvider from "./contexts/ChannelContext";
import ChannelPage from "./pages/ChannelPage";
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
        </BrowserRouter>
      </ChannelProvider>
    </div>
  );
};

export default App;

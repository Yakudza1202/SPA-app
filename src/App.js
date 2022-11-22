import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Recipe from "./pages/Recipe";

export default function App() {
  return (
    <div>
      <Header />
      <main className="content container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contact} />
          <Route path='/category/:name' component={Category}/>
          <Route path="/meal/:id" component={Recipe} />
          <Route component={NotFound}/>
        </Switch> 
      </main>
      <Footer />
    </div>
  )
}
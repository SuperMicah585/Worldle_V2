import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Pie from "./components/Pie/pie";
import Grid from "./components/grid/Grid"
import Group from "./components/Card/group"
import Paper from "@material-ui/core/Paper";
import Search from "./components/Search/search"
import "./app.css"
import Home from "./pages/home/Home"



function App() {
  return <body bgcolor= "F8F8F8">
  <div>

    <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>


      <div className = "Search">
      <Search/>
      </div>


      <Paper>
      <div className = "Card">
      <Group/>
      </div>
      </Paper>

    <div className = "tasks">
    <Grid/>
    </div>

    </div>
    </body>
}
export default App;

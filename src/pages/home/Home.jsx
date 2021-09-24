import Pie from "../../components/Pie/pie";
import Grid from "../../components/grid/Grid"
import Group from "../../components/Card/group"
import Paper from "@material-ui/core/Paper";
import Search from "../../components/Search/search"
import "./Home.css"
export default function Home() {
    return (
        <div className='home'>
            


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
    )
}

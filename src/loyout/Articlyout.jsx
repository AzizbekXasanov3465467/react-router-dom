import { Outlet } from "react-router-dom";

function ArticlesLoyut(){
    return(
        <div>
            <h1>Aritcles list</h1>
            <hr />
            <Outlet/>
        </div>
    )
}
export default ArticlesLoyut
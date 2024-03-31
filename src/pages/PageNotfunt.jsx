import { NavLink } from "react-router-dom";

function PageNotfunt() {
    return(
        <div className="pageNotFound-container">
        <h1>Page-Not-funt</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ab corporis earum expedita velit quod maiores tempora rem dicta, eos eius molestiae blanditiis.
        </p>
        <NavLink to="/">
           Hame page 
        </NavLink>
        </div>
    )
}
export default PageNotfunt
import { NavLink, Outlet } from "react-router-dom"


function ContactLoyout() {
    return(
        <div>
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illo molestiae inventore saepe aliquam, unde molestias quas, voluptatum maiores rerum suscipit?
            </p>
            <nav>
                <NavLink to="faq">Faq</NavLink>
                <NavLink to="form">Form</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
export default ContactLoyout
import './App.css'

import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Faq from "./pages/help/Faq"
import Form from "./pages/help/Form"
import Pagenotfunt from "./pages/PageNotfunt"
import Articles from "./pages/articles/Articles"

// loyout
import Rootloyut from './loyout/Routloyout';
import ContactLoyout from "./loyout/ContactLoyout";
import ArticlesLoyut from './loyout/Articlyout';
function App() {
const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Rootloyut />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactLoyout />}>
                <Route path="faq" element={<Faq/>}/>
                <Route path="form" element={<Form/>}/>
            </Route>

<Route  path="articles" element={<ArticlesLoyut/>}>
    <Route index element={<Articles/>}/>

</Route>

{/* not fun jsx */}
<Route path='*' element={<Pagenotfunt />} />
        </Route>
    )
);

    return(
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    )
}
export default App
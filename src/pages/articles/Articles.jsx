
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

function Aricles() {
    const {
        data: articles,
        error,
        isPending

    } = useFetch('http://localhost:3000/articles')
    return (
        <div className="articles-container">
            {error && (
                <div>
                    <h3>{error}</h3>
                </div>
            )}
            {isPending && (
                <div>Loading...</div>
            )}
            {articles &&
            articles.map((article) => {
                return (
                    <div key={article.id} className="card">
                        <h2>{article.title}</h2>
                        <p>By {article.author}</p>
                        <NavLink to="">Read More</NavLink>
                    </div>
                )
            } )
            }
        </div>
    )
}
export default Aricles
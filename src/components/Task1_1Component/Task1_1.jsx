import { cities } from '../../data/cities'
import "./Task1_1.css"

const Task1_1 = () => {
    return (
        <section className="cities-page">
            <h2 className="cities-title">Regional Centers of Ukraine</h2>

            <div className="cities-grid">
                {cities.map((city) => (
                    <article key={city.id} className="city-card">
                        <div className="city-card__header">
                            <h3 className="city-card__name">{city.name}</h3>
                            <span className="city-card__badge">{city.partOfUkraine}</span>
                        </div>

                        <div className="city-card__stats">
                            <div className="city-card__stat">
                                <span className="city-card__stat-label">Area</span>
                                <span className="city-card__stat-value">{city.area} km²</span>
                            </div>
                            <div className="city-card__stat">
                                <span className="city-card__stat-label">Population</span>
                                <span className="city-card__stat-value">
                                    {city.population.toLocaleString()}
                                </span>
                            </div>
                            <div className="city-card__stat">
                                <span className="city-card__stat-label">Founded</span>
                                <span className="city-card__stat-value">{city.foundedYear} year</span>
                            </div>
                        </div>

                        <p className="city-card__description">{city.description}</p>

                        <div className="city-card__highlights-block">
                            <span className="city-card__highlights-title">Interesting places</span>
                            <ul className="city-card__highlights">
                                {city.highlights.map((place, index) => (
                                    <li key={index} className="city-card__tag">
                                        {place}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Task1_1
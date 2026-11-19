import { bands } from '../../data/bands'
import './Task1_2.css'

const Task1_2 = () => {
    return (
        <section className="bands-page">
            <h2 className="bands-title">Music Artists & Bands</h2>

            <div className="bands-grid">
                {bands.map((band) => (
                    <article key={band.id} className="band-card">
                        <img
                            src={band.image}
                            alt={band.name}
                            className="band-card__image"
                        />

                        <div className="band-card__header">
                            <h3 className="band-card__name">{band.name}</h3>
                            <span className="band-card__year">{band.formedYear}</span>
                        </div>

                        <span className="band-card__genre">{band.genre}</span>

                        <p className="band-card__description">{band.description}</p>

                        <div className="band-card__tracks-block">
                            <span className="band-card__tracks-title">Popular tracks</span>
                            <ul className="band-card__tracks">
                                {band.topTracks.map((track, index) => (
                                    <li key={index} className="band-card__track">
                                        {track}
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

export default Task1_2
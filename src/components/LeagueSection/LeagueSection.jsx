import { Link } from "react-router-dom";
import "./LeagueSection.css";

import laliga from "../../assets/ligas/laliga.png";
import premier from "../../assets/ligas/premier.png";
import bundesliga from "../../assets/ligas/bundesliga.png";
import seriea from "../../assets/ligas/seriea.png";
import ligue1 from "../../assets/ligas/ligue1.png";
import champions from "../../assets/ligas/champions.png";


const leagues = [
  {
    name: "LaLiga",
    image: laliga,
    link: "/liga/laliga",
  },
  {
    name: "Premier League",
    image: premier,
    link: "/liga/premier",
  },
  {
    name: "Bundesliga",
    image: bundesliga,
    link: "/liga/bundesliga",
  },
  {
    name: "Serie A",
    image: seriea,
    link: "/liga/serie-a",
  },
  {
    name: "Ligue 1",
    image: ligue1,
    link: "/liga/ligue-1",
  },
  {
    name: "Champions League",
    image: champions,
    link: "/liga/champions",
  },
  
];

function LeagueSection() {
  return (
    <section className="league-section">
      <div className="section-title">
        <span>COMPETICIONES</span>

        <h2>Comprar por Liga</h2>

        <p>Elige tu competición favorita.</p>
      </div>

      <div className="league-grid">
        {leagues.map((league) => (
          <Link
            key={league.name}
            to={league.link}
            className="league-card"
          >
            <div className="league-logo">
              <img src={league.image} alt={league.name} />
            </div>

            <h3>{league.name}</h3>

            <span className="league-button">
              Ver camisetas →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LeagueSection;
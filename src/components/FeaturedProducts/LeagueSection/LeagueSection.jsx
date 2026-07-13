import { Link } from "react-router-dom";
import "./LeagueSection.css";

import laliga from "../../assets/ligas/laliga.png";
import premier from "../../assets/ligas/premier.png";
import seriea from "../../assets/ligas/seriea.png";
import bundesliga from "../../assets/ligas/bundesliga.png";
import ligue1 from "../../assets/ligas/ligue1.png";

function LeagueSection() {

  const leagues = [
    {
      name: "LaLiga",
      image: laliga,
      link: "/liga/laliga"
    },
    {
      name: "Premier League",
      image: premier,
      link: "/liga/premier"
    },
    {
      name: "Serie A",
      image: seriea,
      link: "/liga/serie-a"
    },
    {
      name: "Bundesliga",
      image: bundesliga,
      link: "/liga/bundesliga"
    },
    {
      name: "Ligue 1",
      image: ligue1,
      link: "/liga/ligue-1"
    }
  ];

  return (

    <section className="league-section">

      <h2>🏆 Comprar por liga</h2>

      <div className="league-grid">

        {leagues.map((league) => (

          <Link
            key={league.name}
            to={league.link}
            className="league-card"
          >

            <img
              src={league.image}
              alt={league.name}
            />

            <h3>{league.name}</h3>

          </Link>

        ))}

      </div>

    </section>

  );

}

export default LeagueSection;
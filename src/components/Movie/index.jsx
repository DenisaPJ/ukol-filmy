import React, {useState} from 'react';
import Actor from '../Actor';
import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
  const handleClick = (e) => {
    const selectedMovie = e.target.getAttribute("data-title");
    const noun = toReserve === 1 ? 'vstupenky' : 'vstupenek';
    
    function redirect() {
      window.location.href = `mailto:rezervace@naseskvelekino.cz?subject=Rezervace vstupenek na film ${selectedMovie}&body=Prosím o rezervaci ${toReserve} ${noun} na film ${selectedMovie}.`;
    }
    redirect();
  }

  const [toReserve, setToReserve] = useState(0);

  const handleChange2 = (e) => {
    setToReserve(Number(e.target.value));
  };

    return (
      <div className="movie">
        <div className="title">
          <img src={`../../assets/${poster}`} alt={title} />
          <div className="details">
            <div className="details-header">
              <h2>{title}</h2>
              <p>
                Rok vydání: <span>{year}</span>
              </p>
              <p>
                Žánr: <span>{genre}</span>
              </p>
              <p>
                Režie: <span>{director}</span>
              </p>
            </div>
            <div className="acting-header">
              <h3>V hlavních rolích:</h3>
              <div className="acting">
                {cast.map((item) => (
                  <Actor key={item.name} name={item.name} as={item.as} />
                ))}
              </div>
            </div>
            <div className="buy">
              <label htmlFor="billet">Rezervovat kusů:</label>
              <input type="number" name="billet" id="billet" onChange={handleChange2}/>
            </div>
            {toReserve > 0 && <button onClick={handleClick} data-title={title}>Rezervovat vstupenky</button>}
          </div>
        </div>
        <div className="rating">
          <span>{rating}</span> / 10
        </div>
      </div>
    ); 
}

export default Movie;
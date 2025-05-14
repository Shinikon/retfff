import React from "react";
// import { Link } from "react-router-dom";
import banner from '../assets/img/banner.svg';
import trailer from '../assets/img/trailerArc.svg';
import teaser from '../assets/img/teaserArc.svg';

import '../scss/components/_banner.scss'

function Header() {
  return (
    <div className="banner" style={{
        backgroundImage: `url(${banner})`,
        width: '100%',  
        height: '200px' 
    }}>

        <div className="banner__title">
        <h1>ARCANE</h1>
        <h2>League of Legends</h2>

<div className="banner__bottom">
<h3>
        PLOT
        </h3>
        <h3>
        Arcane dives into the delicate balance between the rich, utopian city of  Piltover and the seedy, oppressed underground of  Zaun. Known across Runeterra as the "city of progress," many of the most brilliant minds call these cities home. Read More
        </h3>

        <button>
            <h3>
            Learn More
            </h3>
        </button>
        <button>
            <h3>
            Add to Watch List
            </h3>
        </button>
        </div>

        <div>
        <h3>WATCH TEASER AND TRAILER</h3>
        <img src={teaser} alt="" />
        <img src={trailer} alt="" />
        </div>
</div>
    </div>
  );
}

export default Header;
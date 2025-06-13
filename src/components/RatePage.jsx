import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

function RatePage () {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);

  const stars = Array(10).fill(0); 

  const rating = stars.map((star, index) => {
    const starIndex = index + 1
    return (
          <span className="star"
            key={starIndex}
            onMouseEnter={() => setHoveredStar(starIndex)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => setSelectedStar(starIndex)}
          >
            {hoveredStar
              ? starIndex <= hoveredStar
                ? <FaStar size={30} color="#ffc107" />
                : <FaRegStar size={30} />
              : selectedStar && starIndex <= selectedStar
                ? <FaStar size={30} color="#ffc107" />
                : <FaRegStar size={30} />}
          </span>
  )})

  return (
    <section className="rate-page">
      <div className="poster-container">
        <div className="poster">
          <img className="poster-img" src="https://images.fathomevents.com/image/upload/w_400,dpr_2,f_auto,q_auto/v1670440933/Events/2023/1745/Scarface1000x1480_FE_Website.jpg.jpg" alt="" />
        </div>
        <h1 className="rate-page-heading">Scarface</h1>
      </div>
      <div className="stars">
        {rating}
      </div>

      <div className="hero-btns">
        <button className="rate-btn filled-btn">Rate</button>
        <button className="rate-btn ghost-btn white-btn">I haven't seen this movie</button>
      </div>

    </section>
  )
}

export default RatePage
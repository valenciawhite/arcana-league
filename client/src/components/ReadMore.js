import React, { useState } from "react";
import "../App.css";

function ReadMore({ children }){
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    }
    
      return (
        <p className="read-more-text">
            {isReadMore ? text.slice(0, 132) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
      )
    }

export default ReadMore;
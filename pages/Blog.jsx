import React from "react";

import News from "../components/News";

import New from "../assets/img/ArcNew.svg";

function Blog() {
  return (
    <div className="blog">
      <div
        className="blog__news"
        style={{
          backgroundImage: `url(${New})`,
        }}
      >
        <h4>
          “Arcane” has come to an end. We tell you what happened in the second
          season and what to expect next
        </h4>
      </div>
      <News />
      <div
        className="blog__news"
        style={{
          backgroundImage: `url(${New})`,
        }}
      >
        <h4>
          “Arcane” has come to an end. We tell you what happened in the second
          season and what to expect next
        </h4>
      </div>
    </div>
  );
}

export default Blog;

import React, { useState } from "react";
import Row from "../row/Row";
import request from "../../commons/requests";
import "./Home.css";
import Banner from "../banner/Banner";
function Home() {
  const [requestURL] = useState(request);
  return (
    <div>
      <Banner />
      <div className="poster">
        {requestURL.map((value) => (
          <Row
            key={value.id}
            title={value.title}
            fetchURL={value.URL}
            isLargeRow={value?.isLargeRow}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;

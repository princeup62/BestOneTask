import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./home.scss";

function Home() {
  const history = useHistory();

  const handleRoute = (e: any) => {
    if (e.target.name === "counter") {
      history.push("/counter");
    } else {
      history.push("/employee");
    }
  };

  return (
    <div className="home-outer-wrapper d-flex jsutify-content-center justify-content-center align-items-center">
      <div className="home-inner-wrapper">
        <button
          className="btn-secondary btn px-3 py-3 mr-3"
          name="counter"
          onClick={handleRoute}
        >
          Counter
        </button>

        <button
          className="btn-info btn px-3 py-3 ml-3"
          name="employee"
          onClick={handleRoute}
        >
          Employee
        </button>
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";

const ShortButton = () => {
  const [cities, setCities] = useState([
    "Umarkhed",
    "Nended",
    "Hingoli",
    "Pune",
    "Nagpur",
    "Latur",
    "Yavatmal",
  ]);
  const [buttonClass, setbuttonClass] = useState("bi bi-sort-alpha-down");

  const handleChange = (e) => {
    if (e.target.className == "bi bi-sort-alpha-down") {
      setbuttonClass("bi bi-sort-alpha-up");
      cities.sort();
    }
    else
    {
        setbuttonClass("bi bi-sort-alpha-down");
      cities.reverse();
    }
  };
  return (
    <div>
      <h2>
        List Cities{" "}
        <button className="btn btn-success" onClick={handleChange}>
          <span className={buttonClass}></span>
        </button>
      </h2>
      <ol>
        {
            cities.map(city=>
                <li key={city}>
                    {city.toLocaleUpperCase()}
                </li>
            )
        }
        </ol>
    </div>
  );
};
export default ShortButton;

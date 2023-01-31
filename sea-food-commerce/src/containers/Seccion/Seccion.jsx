import React, { useEffect, useState } from "react";
import SeccionComida from "../SeccionComida/SeccionComida";
import products from "../../products.json";

const Seccion = () => {
  const [food, setfood] = useState({});
  useEffect(() => {
    setfood(products);
    console.log(food);
    console.log(food.calientes);
  }, []);

  return (
    <div>
      {/* <SeccionComida title="Del Cazo" meals={food.delCazo} /> */}
    </div>
  );
};

export default Seccion;

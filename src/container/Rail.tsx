import { useState } from "react";
import Rail from "../components/rail";
import { getFoods } from "assets/common/db";

const RailContainer = () => {

  const [foods, _] = useState(getFoods())
  
  return (
    <Rail foods={foods} />
  )
}

export default RailContainer;
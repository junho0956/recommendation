import { useEffect } from "react";
import Rail from "../components/rail";

const dummyFoods:IFoodData[] = [
    {
      category: "korean",
      name: 'food1'
    },
    {
      category: "china",
      name: 'food2'
    },
    {
      category: "japan",
      name: 'food3'
    },
    {
      category: "korean",
      name: 'food4'
    },
  ]

const RailContainer = () => {
  useEffect(() => {

  }, []);

  return (
    <Rail foods={dummyFoods} />
  )
}

export default RailContainer;
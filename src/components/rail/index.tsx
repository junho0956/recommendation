import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Food from "../food/Food";
import { screen } from "../../assets/utils/screen";
import RailImg from '../../assets/image/foodRail.png';
import { useMobileContext } from "components/layout/Layout";

const railConfig:IRailConfig = {
  desktop: {
    startTop: 0,
    startLeft: 456,
    midTop: 140,
    midLeft: 220,
    lastTop: 650,
    lastLeft: 834 + 150,
    firstAnimationTime: 5000,
    secondAnimationTime: 7000,
    animationTimePer: 1000 / 60
  },
  mobile: {
    startTop: 100,
    startLeft: 300,
    midTop: 300,
    midLeft: 100,
    lastTop: 700,
    lastLeft: 600,
    firstAnimationTime: 2000,
    secondAnimationTime: 3000,
    animationTimePer: 1000 / 60
  },
}

interface Props {
  foods: IFood[];
}

const Rail = ({ foods }:Props) => {

  const { state:mobileContextState } = useMobileContext();
  const [config, setConfig] = useState(mobileContextState ? railConfig.mobile : railConfig.desktop);

  const [currentFoods, setCurrentFoods] = useState<IFood[]>([]);
  const [currentFoodIdx, setCurrentFoodIdx] = useState(0);
  const timerForInsertFood = useRef<NodeJS.Timer>()

  const insertFood = () => {
    setCurrentFoods(prev => {
      return prev.concat(foods[currentFoodIdx])
    });
    setCurrentFoodIdx(prev => {
      if (prev+1 < foods.length) return prev+1;
      return 0;
    })
  }

  const removeFood = (foodId:string) => {
    setCurrentFoods(prev => prev.filter(food => food.id !== foodId));
  }

  const initConfigByUserAgent = () => {
    setConfig(mobileContextState ? railConfig.mobile : railConfig.desktop);
  }

  useEffect(() => {
    initConfigByUserAgent();
  }, [mobileContextState])

  useEffect(() => {
    // 특정 시간마다 음식을 넣기
    timerForInsertFood.current = setInterval(insertFood, 4000);
    // insertFood();

    return () => {
      clearInterval(timerForInsertFood.current);
    }
  }, [currentFoodIdx])
  console.log({currentFoods})
  return (
    <Container>
      <Foods>
        {currentFoods.map(food => (
          <Food
          key={food.id}
          food={food}
          config={config}
          removeFood={removeFood} />
        ))}
      </Foods>
    </Container>
  )
}

export default Rail;

const Container = styled.div`
  background-image: url(${RailImg});
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  overflow: hidden;

  @media ${screen.desktop} { // rail img size
    width: 757px;
    height: 966px;
  }

`

const Foods = styled.ul`
  position: relative;

`

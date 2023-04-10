import styled from "styled-components";
import Food from "../food/Food";
import { useEffect, useRef, useCallback } from "react";

interface Props {
  foods: IFoodData[];
}

const startTop = 100;
const startLeft = 300;
const midTop = 300;
const midLeft = 100;
const lastTop = 700;
const lastLeft = 600;
const firstAnimationTime = 2000;
const secondAnimationTIme = 3000;
const animationTimePer = 1000 / 60;

const Rail = ({ foods }:Props) => {

  const foodsRef = useRef<HTMLUListElement>(null);
  const timerForCalculateLocation = useRef<any>();
  
  // const timerForInsertFood = useRef<NodeJS.Timer>()

  const calculate = (elLeft:number, elTop:number):[number,number] => {
    let nextTop, nextLeft, topPer;

    if (elTop < midTop) { // firstAnimation
      nextTop = elTop + (midTop - startTop) * animationTimePer / firstAnimationTime;
      topPer = (nextTop - startTop) / (midTop - startTop);
      nextLeft = elLeft - (Math.sin(Math.PI/2 + (Math.PI/2 * topPer)) + 0.01) * (startLeft - midLeft) * animationTimePer / firstAnimationTime;
    }
    else { // secondAnimation
      nextTop = elTop + (lastTop - midTop) * animationTimePer / secondAnimationTIme;
      topPer = (nextTop - midTop) / (lastTop - midTop);
      nextLeft = elLeft + (Math.sin(topPer) + 0.01) * (lastLeft - midLeft) * animationTimePer / secondAnimationTIme;
    }

    return [nextLeft, nextTop];
  }

  const calculateLocation = useCallback(() => {
    const foods = [...Array.from((foodsRef.current as HTMLUListElement).children)] as HTMLLIElement[];
    foods.forEach((food) => {
      const [left, top] = calculate(
        Number(food.style.left.split('px')[0]),
        Number(food.style.top.split('px')[0])
      );
      food.style.left = `${left}px`;
      food.style.top = `${top}px`;
    })

    // requestAnimationFrame(calculateLocation)
  }, [])

  useEffect(() => {
    if(!foodsRef.current) return;

    // 유저는 기본적으로 60프레임을 애니메이션이라고 생각한다
    // => 초당 60프레임 = 1000ms / 60fp
    // 16초마다 위치를 계산하는 함수 1개

    (foodsRef.current.firstChild as HTMLLIElement).style.left = '300px';
    (foodsRef.current.firstChild as HTMLLIElement).style.top = '100px';

    timerForCalculateLocation.current = setInterval(() => calculateLocation(), animationTimePer);
    // timerForCalculateLocation.current = requestAnimationFrame(calculateLocation);
    
    // 특정 시간마다 음식을 넣어주는 작업이 필요하다
    // timerForInsertFood.current = setInterval(() => insertFood, 2000);

    return () => {
      clearInterval(timerForCalculateLocation.current);
      // cancelAnimationFrame(timerForCalculateLocation.current);
      // clearInterval(timerForInsertFood.current);
    }
  }, [])

  return (
    <Container>
      <Foods ref={foodsRef}>
        <Food food={foods[0]} />
      </Foods>
    </Container>
  )
}

export default Rail;

const Container = styled.div`
  width: 100%;
  height: 600px; // should this property is fixed
`

const Foods = styled.ul`
  position: relative;
`

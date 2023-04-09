import styled from "styled-components";
import Food from "../food/Food";
import { useEffect, useRef, useCallback } from "react";

interface Props {
  foods: IFoodData[];
}

const Rail = ({ foods }:Props) => {

  const foodsRef = useRef<HTMLUListElement>(null);
  const timerForCalculateLocation = useRef<any>();
  // const timerForInsertFood = useRef<NodeJS.Timer>()

  const calculate = (timeDiff:number, elLeft:number, elTop:number):[number,number] => {
    let timePer = timeDiff / 5000;
    let minY = 100, maxY = 500;
    let minX = 300, midX = 100, maxX = 500;
    
    let nextY = elTop + timePer * (maxY - minY);
    let nextX;

    if (timeDiff <= 2000) {
      nextX = Math.
    } else {
      nextX = elLeft + Math.sin((maxX - midX)*timePer*(nextY - elTop)) * 30;
    }

    return [nextX, nextY];
  }

  const calculateLocation = useCallback(() => {
    const foods = [...Array.from((foodsRef.current as HTMLUListElement).children)] as HTMLLIElement[];
    foods.forEach((food) => {
      const insertTime = Number((food as HTMLLIElement).dataset.inserttime);
      const currentTime = new Date().getTime();
      const [left, top] = calculate(
        currentTime - insertTime,
        Number(food.style.left.split('px')[0]),
        Number(food.style.top.split('px')[0])
      );

      food.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    })

    requestAnimationFrame(calculateLocation)
  }, [])

  useEffect(() => {
    if(!foodsRef.current) return;

    // 유저는 기본적으로 60프레임을 애니메이션이라고 생각한다
    // => 초당 60프레임 = 1000ms / 60fp
    // 16초마다 위치를 계산하는 함수 1개

    (foodsRef.current.firstChild as HTMLLIElement).style.left = '300px';
    (foodsRef.current.firstChild as HTMLLIElement).style.top = '100px';

    // timerForCalculateLocation.current = setInterval(() => calculateLocation(), 1000 / 60);
    // timerForCalculateLocation.current = requestAnimationFrame(calculateLocation);
    
    // 특정 시간마다 음식을 넣어주는 작업이 필요하다
    // timerForInsertFood.current = setInterval(() => insertFood, 2000);

    return () => {
      // clearInterval(timerForCalculateLocation.current);
      cancelAnimationFrame(timerForCalculateLocation.current);
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

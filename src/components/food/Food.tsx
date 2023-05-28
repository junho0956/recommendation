import { screen } from 'assets/utils/screen';
import React, { useEffect, useRef, useCallback } from 'react';
import styled from "styled-components";

interface Props {
  food:IFood;
  removeFood:(foodId:string)=>void;
  config:IRailConfigProperty;
}

const Food = ({ food, removeFood, config }:Props) => {
  
  const foodRef = useRef<HTMLLIElement>(null);
  const timerForCalculateLocation = useRef<any>();

  const calculate = useCallback((elLeft:number, elTop:number):[number,number] => {
    let nextTop, nextLeft, topPer;

    if (elTop < config.midTop) { // firstAnimation
      nextTop = elTop + (config.midTop - config.startTop) * (config.animationTimePer / config.firstAnimationTime) - Math.sin(0.2);
      topPer = (nextTop - config.startTop) / (config.midTop - config.startTop);
      nextLeft = elLeft - (Math.sin(Math.PI/2 + (Math.PI/2 * topPer)) + 0.05) * (config.startLeft - config.midLeft) * config.animationTimePer / config.firstAnimationTime;
    }
    else { // secondAnimation
      nextTop = elTop + (config.lastTop - config.midTop) * config.animationTimePer / config.secondAnimationTime;
      topPer = (nextTop - config.midTop) / (config.lastTop - config.midTop);
      nextLeft = elLeft + (Math.sin(topPer) + 0.1) * (config.lastLeft - config.midLeft) * (config.animationTimePer / 
      config.secondAnimationTime);
    }

    return [nextLeft, nextTop];
  }, [config])

  const setLocation = useCallback(() => {
    if (!foodRef.current) return;

    // 현재 위치 style.left, top 으로부터 다음 위치를 calculate 함수를 통해 계산
    const [left, top] = calculate(
      Number(foodRef.current.style.left.split('px')[0]),
      Number(foodRef.current.style.top.split('px')[0])
    );
    
    foodRef.current.style.left = `${left}px`;
    foodRef.current.style.top = `${top}px`;
    foodRef.current.style.transform = `scale(${((top + 20) / config.lastTop)})`;
    // const currentTop = (top - config.startTop) / (config.lastTop - config.startTop);
    // if (currentTop < 0.2) {
    //   foodRef.current.style.opacity = `${currentTop * 5}`;
    // } else {
    //   foodRef.current.style.opacity = '1';
    // }

    if (left >= config.lastLeft && top >= config.lastTop) {
      removeFood(food.id);
    }
  }, [config])

  const initializeLocation = useCallback(() => {
    if (!foodRef.current) return;
    foodRef.current.style.left = `${config.startLeft}px`;
    foodRef.current.style.top = `${config.startTop}px`;
  }, [config])

  useEffect(() => {
    // 초기위치
    initializeLocation();

    // 유저는 기본적으로 60프레임을 애니메이션이라고 판단
    // 초당 60프레임 -> 1프레임당 시간 => config.animationTimePer
    // 1프레임당 마다 위치를 계산하는 함수 => setLocation
    timerForCalculateLocation.current = setInterval(setLocation, config.animationTimePer);

    return () => {
      clearInterval(timerForCalculateLocation.current);
    }
  }, [config])

  return (
    <Container ref={foodRef}>
      <div className='dish' />
      <div className='img'>
        <img src={food.img} alt={food.name} />
      </div>
    </Container>
  )
}

export default Food;

const Container = styled.li`
  position: absolute;
  will-change: transform, left, top, opacity;
  /* opacity: 0; */

  @media ${screen.desktop} {
    &>.dish {
      position: absolute;
      width: 438px;
      height: 232px;
      border-radius: 50%;
      background: #FFF;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &>.img {
      position: absolute;
      width: calc(438px / 2);
      height: 210px;
      border-radius: 50%;
      overflow: hidden;
      left: 50%;
      bottom: 35px;
      transform: translateX(-50%);
    }
  }
`

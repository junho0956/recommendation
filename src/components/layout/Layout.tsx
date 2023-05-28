import React, { useReducer, useEffect } from 'react';
import styled from "styled-components";
import { isMobile, screen } from '../../assets/utils/screen';
import { Outlet } from 'react-router-dom';
import MobileContext, { MobileContextReducer } from 'context/mobile';
import { contextDispatch_setMobile } from 'context/actionKey';

export const [useMobileContext, MobileContextProvider, MobileContextInitState] = MobileContext();

const Layout = () => {

  const [state, dispatch] = useReducer(MobileContextReducer, MobileContextInitState);

  useEffect(() => {
    function setMobile() {
      const result = isMobile();
      if (result !== state) {
        dispatch({type:contextDispatch_setMobile, payload:result});
      }
    }

    setMobile();
    window.addEventListener('resize', setMobile);
    return () => window.removeEventListener('resize', setMobile);
  }, [])

  return (
    <MobileContextProvider value={{state, dispatch}}>
      <Container>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </MobileContextProvider>
  )
}

export default Layout;

const Container = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  @media ${screen.desktop} {
    position: relative;
    width: 834px;
    margin: 0 auto;
    padding: 0 34px;
  }
  @media ${screen.mobile} {
    width: 100%;
  } 
`

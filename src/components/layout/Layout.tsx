import React from 'react';
import styled from "styled-components";
import { screen } from '../../utils/screen';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  )

}

export default Layout;

const Container = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  @media ${screen.desktop} {
    width: 839px;
    margin: 0 auto;
  }
  @media ${screen.mobile} {
    width: 100%;
  } 
`

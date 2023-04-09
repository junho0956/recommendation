import React from 'react';
import styled from "styled-components";
import { screen } from '../../utils/screen';

const Layout = ({children}:React.PropsWithChildren<{}>) => {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )

}

export default Layout;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  @media ${screen.desktop} {
    max-width: 630px;
    min-width: 630px;
    margin: 0 auto;
  }
  @media ${screen.mobile} {
    width: 100%;
  } 
`

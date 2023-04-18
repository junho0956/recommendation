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

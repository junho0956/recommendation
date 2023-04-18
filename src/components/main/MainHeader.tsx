import { IMAGES } from "assets/common/image";
import styled from "styled-components";
import { screen } from "utils/screen";
import fork from 'assets/image/fork.svg';

const MainHeader = () => {


  return (
    <Header>
      <Title>
        <h1>오메추</h1>
        <div className='fork'>
          <img src={fork} alt='fork' />
        </div>
      </Title>
    </Header>
  )
}

export default MainHeader;

const Header = styled.section`
  @media ${screen.desktop} {
    
  }
`

const Title = styled.div`
  @media ${screen.desktop} {
    display: flex;
    justify-content: space-between;

    &>.fork {
      position: relative;
      width: 20px;
      height: 27px;
    }
  }
`

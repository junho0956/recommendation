import styled from "styled-components";
import { screen } from "assets/utils/screen";
import fork from 'assets/image/fork.svg';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <Header>
      <Main>
        <Link to='/'>
          <h1>오메추</h1>
        </Link>
        <div className='fork'>
          <img src={fork} alt='fork' />
        </div>
      </Main>
      <Sub>
        <div>오늘의 메뉴추천</div>
      </Sub>
    </Header>
  )
}

export default MainHeader;

const Header = styled.section`
  @media ${screen.desktop} {
    margin-bottom: 200px;
  }
`

const Main = styled.div`
  @media ${screen.desktop} {
    display: flex;
    justify-content: space-between;

    & h1 {
      font-size: 34px;
      line-height: 49px;
      color: #7e7e7e;
      font-weight: 700;
    }

    &>.fork {
      position: relative;
      width: 20px;
      height: 27px;
    }
  }
`

const Sub = styled.div`
  &>:first-child {
    font-size: 14px;
    line-height: 17px;
    color: #9e9e9e;
  }
`

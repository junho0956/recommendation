import Button from "components/common/button"
import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <Container>
      <main>
        <h2>오늘의 메뉴 추천</h2>
        <h1>오메추</h1>
        <div>뭘 먹어야</div>
        <div>잘 먹었다고 소문이 날까?</div>
        <Link to='/rec/main'>
          <Button text='뭐먹지' styleClass="btn_56 variant2" />
        </Link>
      </main>
    </Container>
  )
}

const Container = styled.div`
  background: #FF5C00;
  min-height: 100vh;

  &>main {
    width: max-content;
    margin: 0 auto;
    padding: 272px 0 264px;

    &>* {
      color: #FFF;
      text-align: center;
    }
    &>h2 {
      font-size: 14px;
      line-height: 20px;
    }
    &>h1 {
      font-weight: 700;
      font-size: 38px;
      line-height: 55px;
      margin-bottom: 263px;
    }
    &>:nth-child(3),:nth-child(4) {
      font-size: 16px;
      line-height: 23px;
    }
    &>:nth-child(4) {
      margin-bottom: 26px;
    }
  }
`

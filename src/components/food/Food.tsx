import styled from "styled-components";

const Food = ({ food }:{ food:IFoodData }) => {
  return (
    <Container
    data-inserttime={new Date().getTime()}>

    </Container>
  )
}

export default Food;

const Container = styled.li`
  position: absolute;
  width: 30px;
  height: 30px;
  background: red;
`

import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  text-align: center;
  margin: 20px;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 300;
`;

const Message = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Title>404</Title>
        <Message>PAGE NOT FOUND</Message>
        <Link
          to={"/"}
          style={{
            margin: "5px opx",
            fontSize: 12,
            textDecoration: "underline",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          Go to Home
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NotFound;

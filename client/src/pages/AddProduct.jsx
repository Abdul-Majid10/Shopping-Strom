import styled from "styled-components";
import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { addproduct } from "../redux/apiCalls";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  margin: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;

  margin: 10px 40px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

// const Error = styled.span`
//   color: red;
// `;

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userRequest.post("/products", {
      title,
      desc,
      img,
      categories,
      size,
      color,
      price,
    });
  };

  // useEffect(() => {
  //   const createProduct = async () => {
  //     try {
  //       const res = await userRequest.post("/products", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item._quantity,
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch {}
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE A NEW PRODUCT</Title>
        <Form>
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input placeholder="Desc" onChange={(e) => setDesc(e.target.value)} />
          <Input
            placeholder="Img's Live link"
            onChange={(e) => setImg(e.target.value)}
          />
          <Input
            placeholder="categories"
            onChange={(e) => setCategories(e.target.value)}
          />
          <Input
            placeholder="size XL X S"
            type="text"
            onChange={(e) => setSize(e.target.value)}
          />
          <Input
            placeholder="Color Red"
            type="text"
            onChange={(e) => setColor(e.target.value)}
          />
          <Input
            placeholder="price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
          {/* <Button onClick={handleClick} disabled={isFetching}> */}
          <Button onClick={handleClick}>CREATE</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;

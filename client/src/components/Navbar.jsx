import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile, tab, miniTab } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${miniTab({ display: "none" })}
  ${mobile({ display: "none" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
  ${tab({ width: "70px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${tab({ fontSize: "1.2rem" })}
  ${miniTab({ fontSize: "1rem" })}
    ${mobile({ fontSize: "0.8rem" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1.5, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${tab({ fontSize: "12px", marginLeft: "10px" })}
  ${miniTab({ fontSize: "12px", marginLeft: "10px" })}
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
            <Logo>SHOPPING STROM</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to={"/products"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItem>Add Product</MenuItem>
          </Link>
          <Link
            to={"/register"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to={"/login"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link
            to={"/Cart"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

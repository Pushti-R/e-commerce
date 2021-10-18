import  styled  from "styled-components"
import { mobile } from "../Responsive"
import { tablet } from "../Responsive"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ProductList from "../pages/ProductList";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "25vh"})}
    ${tablet({height: "40vh"})}
    ${tablet({width: "80%", margin: "10px 60px"})}
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/`}>
            <Image src= {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem

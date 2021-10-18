import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../Responsive"
import { tablet } from "../Responsive"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex; 
    ${mobile({padding: "10px", flexDirection: "column"})};
    ${tablet({padding: "10px", flexDirection: "column"})};
`

const ImgC = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};
    ${tablet({height: "50vh"})};
`

const InfoC = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})};
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterC = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})};
    ${tablet({width: "100%"})};
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddC = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: "100%"})};
    ${tablet({width: "100%"})};

`

const AmountC = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover{
        background-color: black;
        color: white;
        transform: scale(1);
    }
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgC>
                    <Image src = "https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgC>
                <InfoC>
                    <Title> Denim Jumpsuit </Title>
                    <Desc> Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Cum 
                    quas fuga, natus suscipit quam 
                    neque perferendis fugit cupiditate 
                    sit quod accusantium repellendus 
                    vel nesciunt velit libero asperiores 
                    maxime ut ipsam dolorum aperiam ex, 
                    aut est eaque molestiae. Qui, placeat culpa! </Desc>
                    <Price> $ 20</Price>
                    <FilterC>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color ="black"/>
                            <FilterColor color ="darkblue" />
                            <FilterColor color ="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterC>
                    <AddC>
                        <AmountC>
                            <Remove />
                            <Amount> 1 </Amount>
                            <Add />
                        </AmountC>
                        <Button>ADD TO CART</Button>
                    </AddC>
                </InfoC>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product

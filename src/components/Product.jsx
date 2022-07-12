
import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from "@mui/icons-material"
import styled from "styled-components"
const Info= styled.div`
   opacity: 0;
   //La opacitypropriété spécifie l'opacité/transparence d'un élément.
// y5ali l icon ta5tafi 5atir hiya déja f wistha l icin l info 

   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.2); // y5ali les hoto yodhhoro wra l icon 
   z-index: 3; // y5ali les photo mit5obin
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.5s ease;
   cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    minn-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    &:hover ${Info}{
        opacity: 1;

    }

`
const Circle= styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;

`

const Image= styled.img`
    height: 75%;
    z-index: 2;
`



const Icon= styled.div`
     width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 10px;
     transition: all 0.5s ease;
     *:hover{
        background-color: white;
        transform: scale(1.1);
     }


     
`






 const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
            
        </Info>
    </Container>
  )
}

export default Product
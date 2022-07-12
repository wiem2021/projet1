import styled  from "styled-components"

const Container = styled.div`
  flex 1;
  margin: 3px;//tba3ad les photo ala b3adhhom
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`
const Info = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  
`
const Ti = styled.h2`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: white;
   cursor: pointer;
   font-weight: 600;
  

`




const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Image src= {item.img}/>
        <Info>
           <Ti>{item.ti}</Ti>
           <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoriesItem;

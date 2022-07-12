import { ArrowLeftOutlined, ArrowRightOutlined, Title } from "@mui/icons-material"
import styled from "styled-components"
import {useState} from "react"
import {sliderItems} from "../data"
const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
`
//sahem 
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    // y5ali l ashom wahda 3al limin wa7da al lisar 
    left: ${props => props.direction === "left" && "10px" };
    right: ${props => props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.5; // y5alihom transparent
    z-index: 2;
`;
const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease ;// t5alihom yetza7l9o  yemhiw m photo l photo b facon o5ra 
   // bach sahem ywali ye5dem
   transform: translatex(${props=>props.slideIndex * -100}vw);

`
const Slide = styled.div`
     height: 100vh;
     width: 100vw;
     display: flex;
     align-items: center;
     background-color: ${props=> props.bg};
`
const ImgContainer = styled.div`
   height: 100%;
   display: flex;
`
const Image = styled.img `
     height: 80%;
`;
const InfoContainer = styled.div`
   display: flex;
   padding: 50px;

`;
const Ti = styled.h1`
     font-size: 20px;

`;
const Desc = styled.p`
     margin: 50px 0px;
     font-size: 20px;
     font-weight: 300;
     letter-spacing: 2px;
`;
const Button = styled.button`
padding: 6px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`; 


const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
      if(direction ==="left"){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      } else {
         setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
      }
   };
  return (
    <div>
       <Container>
          <Arrow direction= "left" onClick={()=>handleClick("left")}>
              <ArrowLeftOutlined/>
          </Arrow>
          <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (
               <Slide bg = {item.bg}  key={item.id}   >
                <ImgContainer>
                 <Image src= {item.img}/>
               </ImgContainer>
            <InfoContainer>
               <Ti> {item.ti}</Ti>
               <Desc>{item.desc}</Desc>
               <Button>SHOW NOW</Button> 
            </InfoContainer>
               </Slide>
             ))}
          </Wrapper>
          <Arrow direction= "right" onClick={()=> handleClick("right")}>
              <ArrowRightOutlined/>
          </Arrow>

       </Container>
    </div>
  )
}

export default Slider

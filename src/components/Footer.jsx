import { Email, Facebook, Instagram, LocalPhone, Pinterest, Room, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'   



const Container = styled.div`
     display: flex;
`
const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;

`
const Logo = styled.h1`
     

`
const Desc = styled.p`
     margin: 20px 0px;

`
const SocialContainer = styled.div`
     display: flex;
`
const SocialIcon = styled.div`
     width: 50px;
     height: 40px;
     border-radius: 50%;
     display:  flex; // y5ali l icon mrigla f west
     align-items: center;
     justify-content: center;
     margin-right: 20px; // tba3adhom ala badhhom
     color: white; // radinahom hna blanc les icon bach nlawnohom wahadna 
     background-color: #${props=>props.color};
`    


 


const Center = styled.div`
     flex: 1;
     padding: 20px;

  `
const Ti = styled.h3`
     margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;
const ListItem = styled.li`
     width: 50%;
     margin-bottom: 10px;

`;



const Right = styled.div`
     flex: 1;
     padding: 20px;
`
 const ContactItem = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;
 `
const Payment = styled.img`
      width: 50%;
 `

 const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>WIMAA.</Logo>
        <Desc>
            n,kliukjhgthrgehfgdsbffvdsdsjfsdhdhdkcjqhuhkgjkcsljdhhguhutoieujbndsjkghihjb
        </Desc>
        <SocialContainer>
             <SocialIcon color='3B5999'>
                <Facebook/>
             </SocialIcon >
             <SocialIcon color='E4405F'>
                <Instagram/>
             </SocialIcon >
             <SocialIcon color='55ACEE'>
                <Twitter/>
             </SocialIcon>
             <SocialIcon  color='E60023'>
                <Pinterest/>
             </SocialIcon>
             <SocialIcon color="FA8072">
                <YouTube/>
             </SocialIcon>
             
        </SocialContainer>
        </Left>

        <Center>
             <Ti>Useful Links</Ti>
             <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>ww</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

             </List>
        </Center>


        <Right>
               <Ti>Contact</Ti>
               <ContactItem>
                <Room style= {{marginRight:"10px"}}/>
               Avenue Habib Thamer, 8000 Nabeul
               </ContactItem>
               <ContactItem>
                <LocalPhone style={{marginRight:"10px"}}/>
               (+216) 29 597 300
               </ContactItem>
               <ContactItem>
                <Email style= {{marginRight:"10px"}}/>
               ultimaofficielbtique@gmail.com
               </ContactItem>
               <Payment src= "https://e7.pngegg.com/pngimages/848/507/png-clipart-logo-brand-payment-product-design-paypal-text-payment.png"/>

        </Right>

    </Container>
  )
}
export default Footer
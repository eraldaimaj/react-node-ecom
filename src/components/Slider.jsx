import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react"
import styled from "styled-components"
import hat from "../images/hat.jpg"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    margin-top:20px; `;

const Wrapper = styled.div`
    height: 100%`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center`; 
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;`;
const Image = styled.img`
    height: 80%;
`;  
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;`;  

const Title = styled.h1``;     
const Description = styled.h1``;
const Button = styled.h1``;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display:flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5`;

const Slider =()=>{
    return(
            <Container>
               <Arrow direction="left">
                   <ArrowLeftOutlined/>
               </Arrow> 
               <Wrapper>
                   <Slide>
                   <ImgContainer>
                   <Image src={hat}/>
                   </ImgContainer>
                   <InfoContainer></InfoContainer>
                   </Slide>
               </Wrapper>
               <Arrow direction="right">
                   <ArrowRightOutlined/>
               </Arrow> 
            </Container>
    )
}
export default Slider
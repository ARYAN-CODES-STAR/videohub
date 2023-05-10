import React from 'react';
import { Box, Container, Heading, Image, Stack, Img, Text } from '@chakra-ui/react';
// import { Img } from '@chakra-ui/react';
import{ Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%, -50%)",
  textTransform:"uppercase",
  p:'4',
  size:"4xl"

}

const Home = () => {
  return <Box>

  {/* <MyCarousel /> */}
  
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
    <Box w="full" h={"100vh"}>
    <Img src={img1} bgColor={'red'}/>
     
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Do do da
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
    <Img src={img2} />
     
      <Heading bg={'whiteAlpha.700'} color={'black'}  {...headingOptions}>
        Do do da dg
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
    <Img src={img3} />
     
      <Heading bg={'whiteAlpha.700'} color={'black'}  {...headingOptions}>
        Night Life is cool
      </Heading>
    </Box>

    <Box w="full" h={"100vh"}>
    <Img src={img4} />
     
      <Heading bg={'whiteAlpha.700'} color={'black'}  {...headingOptions}>
        Aryan Sharma
      </Heading>
    </Box>


    {/* car */}
    <Box w="full" h={"100vh"}>
    <Img src={img5} />
     
      <Heading bg={'whiteAlpha.700'} color={'black'}  {...headingOptions}>
        Happy Sharma
      </Heading>
    </Box>

  </Carousel>
  
  <Container maxW ={'container.xl'} minH={'100vh'} p="16" >
    <Heading 
      textTransform={"uppercase"}
      py="2" 
      w={"fit-content"} 
      borderBottom={"2px solid"}
      m="auto"
    > 
    Services 
    </Heading>

    <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}

      >

      <Image src={img5} h={["40","400"]} filter={'hue-rotate(-130deg)'}/>

      <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore omnis nisi voluptates sit tenetur distinctio quia, esse porro officiis quaerat delectus, beatae ipsam? Temporibus, error? In, repellendus ratione ipsam vero aut incidunt, illum ipsa minus cum veniam excepturi laboriosam nam! Quod odit placeat tenetur?
      </Text>
    </Stack>
  </Container>


  </Box>
};

// const MyCarousel = ({img1, img2}) =>{
//   <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
//     <Box w="full" h={"100vh"}>
//     <Img src="./assets/1.jpg" bgColor={'red'}/>
     
//       <Heading bgColor={'blackAlpha.600'} color={'white'}>
//         Do do da
//       </Heading>
//     </Box>
//     <Box w="full" h={"100vh"}>
//     <Img src={img2} />
     
//       <Heading bg={'blackAlpha.600'} color={'white'}>
//         Do do da dg
//       </Heading>
//     </Box>

//   </Carousel>
// }

export default Home;

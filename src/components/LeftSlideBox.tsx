import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props{
    children : ReactNode
}

const LeftSlideBox = ({children}:Props) => {
      const MotionBox = motion(Box);
  const backgroundColor = useColorModeValue("gray.50", "blue.900");

  return (
    <MotionBox
        position={"absolute"}
        left={"-100%"}
        animate={{ left: "auto" }}
        transition={{ duration: 0.5 }}
        height={"auto"}
        minW={{ base: "90vw", md: "70vw" }}
        bgColor={backgroundColor}
        rounded={"md"}
        padding={4}
        paddingY={8}
      >{children}</MotionBox>
  )
}

export default LeftSlideBox
import { Box, Text, Icon } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { useColorMode } from "@chakra-ui/react";
import { AiFillSun } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg="primary.header">
        <Box maxW="1200px" m="0 auto">
          <Box p="10px">
            <Text color="primary.htext" textAlign="center" fontSize="16px">
              Summer Sale for All Swim Suits and Free Delivery !{" "}
              <Icon fontSize="24px">
                <CiDeliveryTruck />
              </Icon>
              <Icon
                onClick={toggleColorMode}
                fontSize="24px"
                ml="30px"
                cursor="pointer"
              >
                {colorMode === "light" ? <AiFillSun /> : <AiOutlineSun />}
              </Icon>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;

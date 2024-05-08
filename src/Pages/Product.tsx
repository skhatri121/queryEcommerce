import { Button, Spinner } from "@chakra-ui/react";
import { fetchProduct } from "../Queries/query";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useCountStore from "../Store/useCountStore";
const Product = () => {
  const { productId } = useParams();
  const { count, inc, desc } = useCountStore();
  const {
    isLoading,
    isError,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => fetchProduct(productId),
  });

  console.log(product);

  if (isLoading) return <Spinner />;
  if (isError) return `Error:${error.message}`;

  return (
    <>
      <Box>
        <Box maxW="1200px" m="0 auto" h="86vh">
          <Box pt="20px" display="flex">
            <Image src={product.thumbnail} w="auto" h="300px" />
            <Box pl="19px" w="450px">
              <Text size="lg">
                <u>Product Name</u>: <b> {product.title}</b>
              </Text>
              <Text>
                <u>Product Description</u>: <b>{product.description}</b>{" "}
              </Text>
              <Text>
                <u>Product Price</u> :<b> Rs. {product.price}</b>
              </Text>
              <Box display="flex" gap="10px" pt="10px">
                <Button size="sm" onClick={desc}>
                  -
                </Button>
                <Text fontSize="20px">{count}</Text>
                <Button size="sm" onClick={inc}>
                  +
                </Button>
              </Box>
              <Box pt="15px" display="flex" gap="15px">
                <Button>Buy Now</Button>
                <Button variant="ghost" bg="green" color="primary.htext">
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;

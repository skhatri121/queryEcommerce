import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchProducts } from "../Queries/query";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Spinner,
  Card,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Dashboard = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: products = [],
    errorMessage,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log("Deleted");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });

  const handleDelete = (productId) => {
    deleteProductMutation.mutate(productId);
  };

  if (isError) return `Error: ${errorMessage}`;

  return (
    <>
      <Box>
        <Box p="40px">
          {isLoading ? (
            <Box textAlign="center">
              <Spinner />
            </Box>
          ) : (
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
              {products.products.map((product) => (
                <Card>
                  <Box key={product.id}>
                    <Image
                      src={product.thumbnail}
                      w="100%"
                      h="200px"
                      objectFit="cover"
                      cursor="pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                    />
                    <Box px="10px" py="10px">
                      <Text as="b" size="sm">
                        {product.title}
                      </Text>
                      <Text>Rs. {product.price}</Text>
                    </Box>
                  </Box>
                  <ButtonGroup
                    py="10px"
                    px="10px"
                    size={{ base: "xs", md: "md" }}
                  >
                    <Button>Add to Cart</Button>
                    <Button variant="ghost" bg="green" color="primary.htext">
                      Buy Now
                    </Button>
                    <Button onClick={(e) => handleDelete(product.id)}>
                      <AiFillDelete />
                    </Button>
                  </ButtonGroup>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

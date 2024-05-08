import { useQuery } from "@tanstack/react-query";
import { fetchCategoryList } from "../Queries/query";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Category"],
    queryFn: fetchCategoryList,
  });

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Box bg="primary.mainbg" p="7px">
        <Box maxW="1200px" m="0 auto">
          {isLoading ? (
            <Spinner />
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                textTransform="capitalize"
                cursor="pointer"
                rightIcon={<BiChevronDown />}
              >
                Categories
              </MenuButton>
              <MenuList>
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    textTransform="capitalize"
                    onClick={() => navigate(`/products/category/${category}`)}
                  >
                    {category}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CategoryFilter;

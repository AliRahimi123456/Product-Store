import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Message:", message);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, name: e.target.value }))
              }
            />

            <input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, price: e.target.value }))
              }
            />

            <input
              placeholder="Image URL"
              name="image"
              type="text"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, image: e.target.value }))
              }
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;

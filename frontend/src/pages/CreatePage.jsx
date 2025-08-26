import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: ""
  })
  const handleAddProduct = () => {
    console.log(newProduct);
  }
  return <Container maxW={'container.sm'}>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        roundedBottom={"3xl"}
        roundedTop={"3xl"}
        p={6}
        rounded={"1g"}
        shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <Input
            placeholder='Product Image'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <Input
            placeholder='Product Price'
            name='price'
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
            Add Product
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage

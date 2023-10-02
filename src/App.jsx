import InputForm from "./components/InputForm"
import Modal from "./components/Modal"
import { useState,Suspense  } from "react";
import { Box } from "@chakra-ui/react";
import Loader from "./components/Loader";
const App = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to update the selected product
  const handleProductChange = (productInfo) => {
    setSelectedProduct(productInfo);
  };

  return (
    <Box className='page'>
    <InputForm onProductChange={handleProductChange} />
        <Suspense fallback={<Loader />}>
        <Modal product={selectedProduct} />
        </Suspense>
    </Box>
  )
}

export default App

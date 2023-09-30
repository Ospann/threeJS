import InputForm from "./components/InputForm"
import Modal from "./components/Modal"
import { useState,Suspense  } from "react";
import { Box } from "@chakra-ui/react";
const App = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to update the selected product
  const handleProductChange = (productInfo) => {
    setSelectedProduct(productInfo);
  };

  return (
    <Box className='page'>
      <InputForm onProductChange={handleProductChange} />
      {selectedProduct && (
        <Suspense fallback={<div>Loading...</div>}> {/* Use Suspense */}
          <Modal product={selectedProduct} />
        </Suspense>
      )}
    </Box>
  )
}

export default App

import { Box, Input, Button, Select, Heading } from "@chakra-ui/react";
import Data from "../utils/consts";
import { useState } from "react";

const InputForm = ({ onProductChange }) => {
    
    const [selectedLine, setSelectedLine] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedShowerPan, setSelectedShowerPan] = useState("");

    const handleLineChange = (event) => {
        setSelectedLine(event.target.value);
        setSelectedProduct("");
    };

    const handleProductChange = ({target}) => {
        setSelectedProduct(target.value);


    };

    const handleShowerPanChange = ({target}) => {
        const productInfo = Data[selectedLine][selectedProduct].find(
            (product) => product.name === target.value
        );

        if (productInfo) {
            onProductChange(productInfo);
        }
        setSelectedShowerPan(target.value);
    };

    return (
        <Box className="input-form">
            <Heading size="lg">FC Custom Shower Pans Ordering Page</Heading>
            <Select placeholder='Select Distributor' onChange={handleLineChange} value={selectedLine}>
                {Object.keys(Data).map((line) => (
                    <option key={line} value={line}>
                        {line}
                    </option>
                ))}
            </Select>
            <Select
                placeholder="Select product Line"
                onChange={handleProductChange}
                value={selectedProduct}
            >
                {selectedLine && Object.keys(Data[selectedLine]).map((lineProduct) => (
                    <option key={lineProduct} value={lineProduct}>
                        {lineProduct}
                    </option>
                ))}
            </Select>
            <Select 
            onChange={handleShowerPanChange}
            value={selectedShowerPan}
            placeholder="Select shower Pan">
            {selectedProduct && Data[selectedLine][selectedProduct].map(product=>(
                    <option key={product.name} value={product.name}>{product.name}</option>
            ))}
            </Select>
            <Input placeholder="Store" />
            <Input placeholder="Salesperson’s Name" />
            <Input placeholder="Salesperson’s Number" />
            <Input placeholder="Salesperson’s Email Address" />
            <Button>Submit</Button>
        </Box>
    )
}

export default InputForm;
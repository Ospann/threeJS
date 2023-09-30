import { Box, Input, Button, Select, Heading } from "@chakra-ui/react";
import Data from "../utils/consts";
import { useState } from "react";

const InputForm = ({ onProductChange }) => {

    const [selectedLine, setSelectedLine] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleLineChange = (event) => {
        setSelectedLine(event.target.value);
        setSelectedProduct("");
    };

    const handleProductChange = (event) => {
        const productName = event.target.value;
        setSelectedProduct(productName);

        // Find and send the selected product info to the parent component
        const productInfo = Data[selectedLine].find(
            (product) => product.name === productName
        );

        if (productInfo) {
            onProductChange(productInfo);
        }
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
                {selectedLine && Data[selectedLine].map((product) => (
                    <option key={product.name} value={product.name}>
                        {product.name}
                    </option>
                ))}
            </Select>
            <Select placeholder="Select shower Pan">

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
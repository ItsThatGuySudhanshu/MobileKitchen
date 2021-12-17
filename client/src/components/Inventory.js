import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import '../styles/inventory.css';


const Inventory = () => {
    let [space, setSpace] = useState(false);
    let [ingredient, setIngredient] = useState(false);
    let createSpace = (e) => {

    }

    let triggerSpacePopup = () => {

    }

    return (
        <Container>
            <Container id="space-container">
                <Container id="fridge-container">

                </Container>
            </Container>
            <Container id="plus-button-container">
                <Button id="plus-button-space" onClick={() => triggerSpacePopup()}>+</Button>
            </Container>
        </Container>
    )
}
export default Inventory;
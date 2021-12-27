import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import '../styles/inventory.css';
import SpacePopup from "./SpacePopup";
import IngredientPopup from "./IngredientPopup";


const Inventory = () => {
    let [spacePopup, setSpacePopup] = useState(false);
    let [ingredientPopup, setIngredientPopup] = useState(false);
    let []


    let triggerSpacePopup = () => {
        setSpacePopup(true);
        // Will render the space popup only if ingredient popup is false

    }

    let triggerIngredientPopup = () => {
        setIngredientPopup(true);
        // Will render the space popup only if ingredient popup is false

    }

    let submittedSpace = (e) => {

    }

    let submittedIngredient = (e) => {

    }



    return (
        <Container>
            <Container id="space-container">
                <Container id="fridge-container">

                </Container>
            </Container>
            {spacePopup && !ingredientPopup && <SpacePopup setSpacePopup={setSpacePopup} onSubmit={submittedSpace} /> }
            {!spacePopup && ingredientPopup && <IngredientPopup onSubmit={submittedIngredient}/> }
            <Container id="plus-button-container">
                <Button id="plus-button-space" onClick={() => triggerSpacePopup()} set>+</Button>
            </Container>
        </Container>
    )
}
export default Inventory;
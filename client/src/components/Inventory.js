import { Button } from "@mui/material";
import { Container, Spinner } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect, useRef } from "react";
import '../styles/inventory.css';
import SpacePopup from "./SpacePopup";
import IngredientPopup from "./IngredientPopup";
import axios from 'axios';
import { useAuth0,  } from "@auth0/auth0-react";
import SpaceContainer from "./SpaceContainer";


const Inventory = () => {
    const user = useAuth0();
    let [loading, setLoading] = useState(false);
    let [spacePopup, setSpacePopup] = useState(false);
    let [ingredientPopup, setIngredientPopup] = useState(false);
    let [spaceList, setSpaceList] = useState([]);
    let [spaceNameChanged, setSpaceNameChanged] = useState(false);


    let triggerSpacePopup = () => {
        setSpacePopup(true);
        // Will render the space popup only if ingredient popup is false

    }

    let triggerIngredientPopup = () => {
        setIngredientPopup(true);
        // Will render the space popup only if ingredient popup is false

    }

    useEffect(() => {
        let email = JSON.stringify(user.user.email);
        email = email.substring(1, email.length - 1)
        const awaitSpaces = async (email) => {
            try {

                setLoading(true);
                let spaceListDummy = await axios.get(`http://localhost:3001/api/inventory/${email}/spaces`);
                setSpaceList(spaceListDummy.data);

                setLoading(false);
                console.log(spaceListDummy.data);

            } catch (e) {
                console.log(e);
            }
            // getting spaces and populating them on the dom


        }

        awaitSpaces(email);

    }, [spaceNameChanged, spacePopup]);

    if (loading) {
        return (
            <div className="text-center mt-5 pt-5" >
                <Spinner animation="border" size="lg" role="status" style={{ color: '#CC0000', width: '5rem', height: '5rem' }}/>
            </div>
            )
        }


    return (
        <Container>
            <Container id="space-container">
                <SpaceContainer spaceList={spaceList} />
            </Container>
            {spacePopup && !ingredientPopup && <SpacePopup setSpacePopup={setSpacePopup} setSpaceNameChanged={setSpaceNameChanged}/> }
            {!spacePopup && ingredientPopup && <IngredientPopup/> }
            <Container id="plus-button-container">
                <Button id="plus-button-space" onClick={() => triggerSpacePopup()} set>+</Button>
            </Container>
        </Container>
    );
}
export default Inventory;
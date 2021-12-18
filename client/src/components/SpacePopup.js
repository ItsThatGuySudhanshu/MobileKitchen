import { Button, Container } from "react-bootstrap";
import { useState } from "react";


const SpacePopup = ({setSpacePopup}) => {
    const toggleOff = (e) => {
        return false;
    }
    return (
        <Container>
            <Container className="popupContainer">
                <p>Add a space to the kitchen</p>

                <Button variant="danger" onClick={(e) => setSpacePopup(toggleOff(e))}> close button</Button>
            </Container>

        </Container>
    )
}

export default SpacePopup;
import { Container, Button } from "react-bootstrap";
import '../styles/spacecontainer.css';
const SpaceContainer = ({spaceList}) => {

    //Style the spaces and the ingredients
    const renderSpaces = () => {
        let listComponents = []
        spaceList.forEach(space => {

            const element= (
            <div className="indSpaceContainer" id={space.name} key={space.name + Math.floor(Math.random * 20)}>
                {space.name + "-container"}
                <Button variant="danger" className="addIngredientBtn" id={space.name + "-submit-btn"} onClick={e => clickAddIngredient(e)}>+</Button>
            </div>
            );
            listComponents.push(element);
        })
        return listComponents;
    }

    const clickAddIngredient = (e) => {
        const spaceContName = e.target.id;
        const spaceNameId = spaceContName.split('-')[0];
        console.log(spaceNameId);
    }

    return (
        <Container >
            <ul id="hello">
                {renderSpaces()}
            </ul>

        </Container>
    );
}

export default SpaceContainer;
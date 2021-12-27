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
                <Button variant="danger" className="addIngredientBtn">+</Button>
            </div>
            );
            listComponents.push(element);
        })
        return listComponents;
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
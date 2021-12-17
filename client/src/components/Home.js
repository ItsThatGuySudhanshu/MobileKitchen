import { Container } from 'react-bootstrap';
import '../styles/home.css'
import {PieChart, Pie, Cell, ResponsiveContainer, LabelList} from 'recharts';
function Home() {
    const data = [{
        "name": "Protein",
        "value" : 50
    }, {
        "name": "Carbohydrates",
        "value" : 120

    }, {
        "name": "Fats",
        "value" : 30

    }]

    let renderNameLabel = function(entry) {
        return entry.name;
    }

    const colors = ["#8884d8", "#82ca9d", "green"]
    return (
        <div id="home">

            <Container id="home-title-container">
                <h6 id="home-title">Mobile Kitchen</h6>
            </Container>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart width={730} height={250}>
                    <Pie label={renderNameLabel} data={data} nameKey="name" dataKey="value" cx="50%" cy="50%" outerRadius={80} >
                    {
                        data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                    <LabelList dataKey="value" style={{fontSize: '10px', fontFamily: 'Arial', fontWeight:'lighter'}} position="inside" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>


    );
}

export default Home;
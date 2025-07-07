import Container from '@mui/material/Container';
import ToggleButton from '../../shared/components/ToggleButton/ToggleButton';

import Main from "../../modules/Main/Main";

import MyNotes from "../../modules/MyNotes/MyNotes";

const HomePage = ()=> {
    return (
        <Main>
            <Container>
                <ToggleButton>Click me</ToggleButton>
                <MyNotes />
            </Container>
        </Main>
    )
}

export default HomePage;
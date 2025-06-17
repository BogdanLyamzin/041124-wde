import { useSelector } from "react-redux";

import Main from "../../modules/Main/Main";
import Container from "../../shared/components/Container/Container";

import MyNotesList from "../../modules/MyNotes/MyNotesList/MyNotesList";

import { selectImportantNotes } from "../../redux/notes/notes-selectors";

const ImportantNotesPage = ()=> {
    const importantNotes = useSelector(selectImportantNotes);

    return (
        <Main>
            <Container>
                <MyNotesList items={importantNotes} />
            </Container>
        </Main>
    )
}

export default ImportantNotesPage;
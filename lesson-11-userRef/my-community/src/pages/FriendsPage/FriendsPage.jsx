import { useState } from "react";

import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import CollapsedItem from "../../shared/components/CollapsedItem/CollapsedItem";
import Button from "../../shared/components/Button/Button";
import Modal from "../../shared/components/Modal/Modal";
import LongScrollableText from "../../shared/components/LongScrollableText/LongScrollableText";
import Timer from "../../shared/components/Timer/Timer";

import paragraphs from "../../data/paragraphs";

const FriendsPage = ()=> {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = ()=> setModalOpen(prevModalOpen => !prevModalOpen);

    return (
        <Main>
            <Container>
                <PageTitle>Friends page</PageTitle>
                <Timer />
                <CollapsedItem title="How do I reserve a vehicle?" text="To secure a vehicle, you can use our Reserve Now option, which allows you to hold a vehicle for 48 hours by paying a  R 2,500 holding deposit." />
                <Button onClick={toggleModal}>{modalOpen ? "Colse modal" : "Show modal"}</Button>
                {modalOpen && <Modal close={toggleModal}><h2>Some text</h2></Modal>}
                <LongScrollableText paragraphs={paragraphs} />
            </Container>
        </Main>
    )
}

export default FriendsPage;
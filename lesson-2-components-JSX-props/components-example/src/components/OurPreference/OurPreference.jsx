const OurPreference = ({items = []})=> {
    const elements = items.map(text => <li key={text}>{text}</li>);

    if(!items.length) {
        return <p>Преимуществ пока нет</p>
    }

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default OurPreference;
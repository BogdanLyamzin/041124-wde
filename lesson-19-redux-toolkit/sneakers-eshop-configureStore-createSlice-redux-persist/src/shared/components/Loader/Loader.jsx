const Loader = ({loading})=> {
    if(!loading) return null;

    return <p>Loading...</p>
}

export default Loader;
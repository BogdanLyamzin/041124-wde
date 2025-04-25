import Button from "../Button/Button";

const Header = ()=> {
    return (
        <header>
            <div className="container">
                <Button text="Purchase UI Kit" variant="contained" />
                <Button text="Learn More" variant="outlined" />
            </div>
        </header>
    )
}

export default Header;
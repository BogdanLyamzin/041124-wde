import Button from "../Button/Button";

const Header = ()=> {
    return (
        <header>
            <div className="container">
                <Button text="Purchase UI Kit" variant="contained" />
                {/* 
                const props = {
                    text: "Purchase UI Kit",
                    type: "button"
                };
                Button(props);
                */}
                <Button text="Learn More" variant="outlined" />
            </div>
        </header>
    )
}

export default Header;
import react from "react";
let year = new Date();

function Footer(){
    return <footer>
        <p>&copy; Ankur {year.getFullYear()}</p> 
    </footer>
}

export default Footer;
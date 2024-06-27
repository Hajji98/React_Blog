import "./TopBar.css"


const TopBar = () => {
    return (
        <div className="top">
            <div className="topleft">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">Home</li>
                    <li className="toplistitem">About</li>
                    <li className="toplistitem">Contact</li>
                    <li className="toplistitem">Write</li>
                    <li className="toplistitem">Logout</li>
                    </ul>                
            </div>
            <div className="topright">
                <img className="topimg" src="./img/ali.jpg" alt="" />
                <li className="topsearchicon fas fa-search"></li>
            </div>
            
        </div>
    );
};

export default TopBar;
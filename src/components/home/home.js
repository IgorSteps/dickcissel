import BasicNavbar from "../navbar/navbar"

export default function Home(props) {
    return (
        <><BasicNavbar />
        <div className="home-page-container">
            <div className="home-page-content">
                <h3 className="home-page-title">Home</h3>
                <div className="home-page-image">
                    <img
                        src="dickcissel.jpeg"
                        width="500"
                        height="361"
                        className="d-inline-block align-top"
                        alt="Dickcissel Photo"
                    />
                </div>
                <div className="home-page-about">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div></>
    )
}
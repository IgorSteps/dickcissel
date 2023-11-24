import BasicNavbar from "../navbar/navbar"

export default function Home(props) {
    return (
        <><BasicNavbar />
        <div className="home-page-container">
            <div className="home-page-content">
                <h3 className="home-page-title">Bird Of The Week</h3>
                <h3 className="home-page-title">Dickcissel [duhk·si·sl]</h3>
                <div className="home-page-image">
                    <img
                        src="dickcissel.jpeg"
                        width="500"
                        height="361"
                        className="d-inline-block align-top"
                        alt="Dickcissel"
                    />
                </div>
                <div className="home-page-about">
                    The <b>dickcissel</b> (Spiza americana) is a small seed-eating migratory bird in the family Cardinalidae. It breeds on the prairie grasslands of the Midwestern United States and winters in Central America, northern Colombia, and northern Venezuela. It is the only member of the genus Spiza, though some sources list another supposedly extinct species.
                </div>
            </div>
        </div></>
    )
}
import './AboutPage.css'

const AboutPage = () => {
    return (
        <section className="AboutPage">
            <h2>About us ✋</h2>
            <hr />
            <p>Hi! We are Lara and Pedro, two web development enthusiasts. We are creating an apartment rental project in React to learn and have fun. Lara brings the cool design, Pedro the magical code. Get ready to find your new home in an epic way with us! 🚀🏠</p>
            <p>In this project, we are practicing the use of React and its various functionalities, such as Routing, layout, states, hooks, conditional rendering, etc.</p>
            <p>If you would like to get in touch with us, here are the links:</p>
            <p><strong>Pedro:</strong></p>
            <ul>
                <li>
                    <a target="_blank" href='https://www.linkedin.com/in/pedro-roca-de-togores-'>LinkedIn</a>
                </li>
                <li>
                    <a target="_blank" href='https://github.com/Blasdelezo1'>GitHub</a>
                </li>
            </ul>
            <p><strong>Lara: </strong></p>
            <ul>
                <li>
                    <a target="_blank" href='https://www.linkedin.com/in/lara-aguerre-developer/'>LinkedIn</a>
                </li>
                <li>
                    <a target="_blank" href='https://github.com/Laguerre91/'>GitHub</a>
                </li>
            </ul>

        </section>
    )
}

export default AboutPage
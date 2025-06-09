import './styles/theme.css';
import './styles/global.css';

// Components
import { Container } from './components/Container';
import { Logo } from './components/Logo';

function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <section>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi voluptate nisi repellendus minima possimus rerum at
                    quam itaque ratione voluptatibus?
                </section>
            </Container>
        </>
    );
}

export default App;

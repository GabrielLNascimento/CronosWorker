import './styles/theme.css';
import './styles/global.css';

// Components
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';

function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form action="">
                    <div className="formRow">
                        <Input
                            id="meuInput"
                            type="text"
                            labelText="tasks"
                            placeholder="Digite algo"
                        />
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>
                </form>
            </Container>
        </>
    );
}

export default App;

import './styles/theme.css';
import './styles/global.css';

// bibliotecas
// import { useState } from 'react';

// Components
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { Button } from './components/Button';
import { Footer } from './components/Footer';

// Icons
import { CirclePlay } from 'lucide-react';

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

                    <div className="formRow">
                        <Cycles />
                    </div>
                </form>
            </Container>

            <Container>
                <Button icon={<CirclePlay />} color="green" />
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}

export default App;

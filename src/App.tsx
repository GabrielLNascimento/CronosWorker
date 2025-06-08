import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Timer } from 'lucide-react';

function App() {
    console.log('Estou no console');
    return (
        <>
            <Heading>
                Seja bem vindos ao meu site
                <button>
                    <Timer />
                </button>
            </Heading>
        </>
    );
}

export default App;

import { CirclePlay } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function MainForm() {
    return (
        <>
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
            
            <Button icon={<CirclePlay />} color="green" />
        </>
    );
}

import styles from './styles.module.css';

type ButtonProps = {
    icon: React.ReactNode; // iconde do lucide Icons
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function Button({ icon, color = 'green', ...props }: ButtonProps) {
    return (
        <>
            <div className={styles.buttonContainer}>
                <button
                    className={`${styles.button} ${
                        color === 'green' ? styles.greenColor : styles.redColor
                    }`}
                    {...props}
                >
                    {icon}
                </button>
            </div>
        </>
    );
}

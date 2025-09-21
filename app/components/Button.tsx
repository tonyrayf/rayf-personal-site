import styles from '@/app/styles/Button.module.css';
import localFont from 'next/font/local';

const font = localFont({ src : '../../fonts/Manrope.ttf' });

export default function Button({name} : {name : string}) {
    return (
        <div className={`${styles.button} ${font.className}`}>
            {name}
        </div>
    );
}
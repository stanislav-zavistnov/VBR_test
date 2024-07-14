import { IProduct } from '../../interfaces';
import styles from './card.module.css';

interface IProps {
    data: IProduct
}

export function Card(props: IProps) {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.cardTitleWrap}>
                <div className={styles.cardIcon} style={{ backgroundImage: `url('${props.data.logo}')` }} />
                <span className={styles.cardTitle}>
                    {props.data.name}
                </span>
            </div>
            <div className={styles.cardSumWrap}>
                <span className={styles.cardSumTitle}>
                    Сумма
                </span>
                <span className={styles.cardSumValue}>
                    {`${props.data.amount.toLocaleString('ru-RU')} `}&#8381;
                </span>
            </div>
        </div>
    );
}
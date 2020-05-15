import { parseISO, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from './styles.module.css';

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time className={styles.time} dateTime={dateString}>
      Há {formatDistanceToNow(date, { locale: ptBR })}
    </time>
  )
}
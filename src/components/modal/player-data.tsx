import styles from './styles.module.css'

interface PlayerDataProps {
    id: number;
    discordId: string;
    score: number;
    position: number;
}

const PlayerData = ({ id, discordId, position, score }: PlayerDataProps) => {
    let positionIcon = null;

    switch (position) {
        case 0:
            positionIcon =  <img src='' alt='' />
            break;
        case 1:
            positionIcon = <img src='' alt='' />
            break;
        case 2:
            positionIcon = <img src='' alt='' />
            break;
        
        default:
            positionIcon = null;
            break;
    }

    return (
        <li className={styles.playerData} key={id}>
            { positionIcon }
            <div className={styles.playerDetails}>
                <h3 className={styles.playerId}>{ discordId }</h3>
                <span className={styles.playerScore}>{ score }</span>
            </div>
        </li>
    )
}

export default PlayerData
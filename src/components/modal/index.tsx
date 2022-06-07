// import { useState } from 'react'
import ModalOption from './modal-option'
import PlayerData from './player-data'
import styles from './styles.module.css'
import { sortedSampleLeaderboard } from '../../utils/data'

interface ModalContainerProps {
    children: React.ReactNode | React.ReactNode[]
}

const ModalContainer = ({children}: ModalContainerProps) => {
    return (
        <div className={styles.modalContainer}>
            {children}
        </div>
    )
}


const PauseMenuModal = () => {
    return (
        <ModalContainer>
            <div className={styles.pauseMenuContainer}>
                <h1 className={styles.pauseMenuTitle}>Paused</h1>
                <ul className={styles.pauseMenuOptions}>
                    <ModalOption name='Resume' hasToggle={false} className={styles.pauseMenuOption} />
                    <ModalOption name='Options' hasToggle={false} className={styles.pauseMenuOption} />
                    <ModalOption name='Leaderboard' hasToggle={false} className={styles.pauseMenuOption} />
                    <ModalOption name='Quit' hasToggle={false} className={styles.pauseMenuOption} />
                </ul>
            </div>
        </ModalContainer>
    )    
}

const OptionsModal = () => {
    return (
        <ModalContainer>
            <div className={styles.optionsMenuContainer}>
                <h1 className={styles.optionsMenuTitle}>Paused</h1>
                <ul className={styles.optionsMenuOptions}>
                    <ModalOption name='Resume' hasToggle={false} className={styles.optionsMenuOption} />
                    <ModalOption name='Sound' hasToggle={true} className={styles.optionsMenuOption} />
                    <ModalOption name='Music' hasToggle={true} className={styles.optionsMenuOption} />
                    <ModalOption name='Quit' hasToggle={false} className={styles.optionsMenuOption} />
                </ul>
            </div>
        </ModalContainer>
    )
}

const LeaderboardModal = () => {
    // Will update this to get leaderboard data as props
    return (
        <ModalContainer>
            <div className={styles.leaderboardMenuContainer}>
                <div className={styles.leaderboardMenuTitle}>
                    <button>
                        {/* arrow back */}
                    </button>
                    <h1 className={styles.optionsMenuTitle}>Leaderboard</h1>
                </div>
                <ol className={styles.leaderboardList}>
                    {
                        sortedSampleLeaderboard.map((player,idx) => {
                            return (
                                <PlayerData
                                    id={player.id}
                                    discordId={player.discordId}
                                    score={player.score}
                                    position={idx}
                                />
                            )
                        })  
                    }
                </ol>
            </div>
        </ModalContainer>
    )
}

const ConfirmModal = () => {
    return (
        <ModalContainer>
            <div className={styles.confirmModalContainer}>
                <h1 className={styles.confirmModalTitle}>are you sure you want to quit?</h1>
                <div className={styles.confirmModalOptions}>
                    <button className={styles.confirmModalOption}>yes</button>
                    <button className={styles.confirmModalOption}>no</button>
                </div>
            </div>
        </ModalContainer>
    )
}

export {
    PauseMenuModal,
    OptionsModal,
    LeaderboardModal,
    ConfirmModal
}
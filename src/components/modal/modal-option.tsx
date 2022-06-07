import styles from './styles.module.css'

interface ModalOptionsProps {
    name: string;
    link?: string;
    hasToggle: boolean;
    className: string;
}

const ModalOption = ({name, link, hasToggle, className}: ModalOptionsProps) => {
    return (
        <>
            {
                !hasToggle
                ?
                (
                    <li className={className}>
                        <a href={link}>{ name }</a>
                    </li>
                )
                :
                (
                    <li className={className}>
                        <h3>{name}</h3>
                        <label className={styles.switch}>
                            <input type={styles.checkbox} />
                            <span className={styles.roundSlider}></span>
                        </label>
                    </li>
                )
            }
        </>
    )
}

export default ModalOption

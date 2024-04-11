import { FC } from 'react'
import IconArrowDown from '../assets/common/icon-arrow-down.svg?react'

type ButtonProps = {
    showMoreInfo: boolean
    setShowMoreInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const Button:FC<ButtonProps> = ({ showMoreInfo, setShowMoreInfo }) => {
    return (
        <button onClick={() => setShowMoreInfo(prevState => !prevState)} aria-expanded={showMoreInfo}>
            {showMoreInfo ? 'LESS' : 'MORE'}
            <div className={`${showMoreInfo ? 'opened' : ''}`}>
                <IconArrowDown />
            </div>
        </button>
    )
}

export default Button
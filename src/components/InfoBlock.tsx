import { FC } from 'react';

const InfoBlock: FC<{ title: string, value: string | number}> = ({ title, value }) => (
    <div className="info-block">
        <h5>{title}</h5>
        <h2>{value}</h2>
    </div>
)

export default InfoBlock
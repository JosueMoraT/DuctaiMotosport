import { FC } from 'react' ;
import './Tag.styles.scss' ;

interface TagProps {
    label: string;
    color: string;
    backgroundColor: string;
}

const Tag: FC<TagProps> =({
    label,
    color,
    backgroundColor
}) => {
    return <div
        className='tag' 
        style={{
        color,
        backgroundColor
    }}>{label}</div>
}

export { Tag };
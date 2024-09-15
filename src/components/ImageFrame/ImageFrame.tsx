import { FC } from "react";

interface ImageFrameProps {
    src: string;
    alt: string;
    width: string
}

const ImageFrame: FC<ImageFrameProps> = ({ src, alt, width}) => {
    return <img src={src} alt={alt} width={width} />
}

export default ImageFrame
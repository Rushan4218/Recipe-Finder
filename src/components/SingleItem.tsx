import React from "react";

interface singleItemProps {
    id: number,
    image: string,
    title: string
    fetchDetails: (id: number) => void,
    setShowDetails: (value: boolean) => void
}
const SingleItem: React.FC<singleItemProps> = ({ id, image, title, fetchDetails, setShowDetails}) => {
    return (
        <div 
            className="single-item" 
            onClick={() => {
                setShowDetails(true);
                fetchDetails(id);
            }}
        >
            <img 
                src={image}
                alt="IMGNOTLOADED"
                className="item-image"
            />
            <h2 className="item-title">{title}</h2>
        </div>
    )
}

export default SingleItem;
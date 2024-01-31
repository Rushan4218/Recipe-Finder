import React from "react";
import { IoMdClose } from "react-icons/io";

interface detailsProps {
    setShowDetails: (value: boolean) => void,
    itemDetails: any
}
const Details: React.FC<detailsProps> = ({ itemDetails, setShowDetails }) => {
    return (
        <div className="details">
            <div className="close-button" onClick={() => setShowDetails(false)}>
                <IoMdClose className="close-button-icon" />
            </div>
            <img 
                src={itemDetails.image}
                alt="IMAGENOTLOADED"
                className="details-img"
            />
            <h1 className="details-title">{itemDetails.title}</h1>
            <h2 className="details-subtitle">Ingredients</h2>
            <ul className="ingredient-list">
                {
                    itemDetails.ingredients.map(
                        (ingredient: any, index: number) => {
                            return <li 
                                        className="content" 
                                        key={index}>{ingredient.name}
                                    </li>
                    })
                }
            </ul>
            <h2 className="details-subtitle"></h2>
            <p className="content">{itemDetails.instructions}</p>
        </div>
    )
}

export default Details;
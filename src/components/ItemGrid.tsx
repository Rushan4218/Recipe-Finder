import React from "react"
import SingleItem from "./SingleItem";

interface itemGridProps {
    itemList: any[],
    setItemDetails: (value: any) => void,
    setLoading: (value: boolean) => void,
    setShowDetails: (value: boolean) => void
}

const ItemGrid: React.FC<itemGridProps> = ({itemList, setItemDetails, setLoading, setShowDetails}) => {
    
    const apiKey = "7dc40d83134e45b6ad519ccae9956e72";

    const fetchDetails = async (id: number) => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
            const details = await response.json();
            setItemDetails(
                {
                    title: details.title,
                    image: details.image,
                    ingredients: details.extendedIngredients,
                    instructions: details.instructions
                }
            )
            setLoading(false);
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    return (
        <div className="item-grid">
            {
                itemList?.map((item: any) => {
                    return <SingleItem 
                                key={item.id}
                                id={item.id}
                                image={item.image} 
                                title={item.title}
                                fetchDetails={fetchDetails}
                                setShowDetails={setShowDetails}
                    />
                })
            }
        </div>
    )
}

export default ItemGrid;
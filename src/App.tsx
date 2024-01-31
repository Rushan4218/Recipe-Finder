import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ItemGrid from "./components/ItemGrid";
import Details from "./components/Details";

const App: React.FC = () => {

    const [input, setInput] = useState<string>("");
    const changeValue = (value: string) => setInput(value);


    interface objectSubset {
        id: number,
        title: string,
        image: string
    }

    const [foodItems, setFoodItems] = useState<objectSubset[]>([]);

    const apiKey = "7dc40d83134e45b6ad519ccae9956e72";

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${input}`);
            const data = await response.json();
            setFoodItems(data.results);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchData();
    }

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [itemDetails, setItemDetails] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);


    return (
        <div className="main-container">
            <SearchBar 
                value={input} 
                changeValue={changeValue} 
                handleSubmit={handleSubmit}
            />
            <div className="item-container">
                {showDetails && !loading && <Details setShowDetails={setShowDetails} itemDetails={itemDetails}/>}
                <ItemGrid 
                    itemList={foodItems}
                    setItemDetails={setItemDetails}   
                    setShowDetails={setShowDetails} 
                    setLoading={setLoading}
                />
            </div>
        </div>

    )
}

export default App;
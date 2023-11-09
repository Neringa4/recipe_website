import './AdvancedSearchCategory.css';
import {useState, useEffect} from 'react';

const AdvancedSearchCategory = ({category, allSelectedLabels, setAllSelectedLabels}) => {
    const [selectedLabels, setSelectedLabels] = useState([])

    const name = Object.keys(category)[0]

    const handleLabelClick = (e) => {
        e.preventDefault();
        if (['Meals', 'Dishes', 'Cuisine'].includes(name)) {
            setSelectedLabels(e.target.value)
        } else {
            if (selectedLabels.includes(e.target.value)) {
                const labelsCopy = [...selectedLabels];
                const index = labelsCopy.indexOf(e.target.value);
                if (index > -1) { 
                    labelsCopy.splice(index, 1); 
                }
                setSelectedLabels(labelsCopy);
            } else {
                const labelsCopy = [...selectedLabels];
                labelsCopy.push(e.target.value)
                setSelectedLabels(labelsCopy);
            }
        }
    }

    useEffect(() => {
        const newLabels = {...allSelectedLabels}
        newLabels[`${name}`] = selectedLabels
        setAllSelectedLabels(newLabels)
    }, [selectedLabels])

    
    const labels = category[`${name}`].map((label, index) => {
        return(
            <button key={index} className={selectedLabels.includes(label.url) ? "selected-label" : "label"} value={label.url} onClick={handleLabelClick}>{label.displayTitle}</button>
        )
    }) 

    return(
        <>
            <h2 className="category-name">{name}</h2>
            <div className="label-container">
                {labels}
            </div>
        </>
    )
}

export default AdvancedSearchCategory;
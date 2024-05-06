import features from '../../database/Features.json';
import {Checkbox} from "@mui/material";

export const CheckboxFeatures = ({onFeatureChange}) => {
    const handleChange = (event) => {
        onFeatureChange(event.target.value, event.target.checked);
    }
    
    return (
        <div className='features-container'>
            {
                features.map((feature, id) => {
                    return (
                        <div key={id}>
                            <Checkbox 
                                value={feature.value} 
                                onChange={handleChange} 
                                sx={{'&.Mui-checked': {color: '#d51a33'}}}
                            />
                            <label> { feature.description } </label>
                        </div>
                    )
                })
            }
        </div>
    )
}
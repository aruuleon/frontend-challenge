import {CheckboxFeatures, SelectGroups} from './Filter/00-index';

export const FilterForm = ({onOptionChange, onFeatureChange}) => {
  const handleSelectChange = (selectedValue) => {
    onOptionChange(selectedValue);
  }

  return (
    <div className='filter-form-container'>
      <div className='filter-title'>
        <h4> Filter by </h4>
      </div>
      <SelectGroups onGroupChange={handleSelectChange} />
      <CheckboxFeatures onFeatureChange={onFeatureChange} />
    </div>
  )
}
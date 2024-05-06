import {useState, useEffect} from 'react';
import {CarList, FilterForm} from "../components/index"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [checkedFeatures, setCheckedFeatures] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
  }
  const handleFeatureChange = (feature, isChecked) => {
    if (isChecked) {
      setCheckedFeatures(prev => [...prev, feature]);
    } else {
      setCheckedFeatures(prev => prev.filter(f => f !== feature));
    }
  };
  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="home-container">
      <FilterForm onOptionChange={handleOptionChange} onFeatureChange={handleFeatureChange} />
      <CarList optionSelected={selectedOption} checkedFeatures={checkedFeatures} />
      {isVisible && (
        <div onClick={scrollToTop} style={{position: 'fixed', bottom: '0', right: '15px', cursor: 'pointer'}}>
          <ExpandLessIcon sx={{fontSize: 40, color: '#d51a33'}} />
        </div>
      )}
    </div>
  )
}
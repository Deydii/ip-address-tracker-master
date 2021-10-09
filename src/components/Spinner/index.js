import FadeLoader from 'react-spinners/FadeLoader';

import './style.scss';

const Spinner = () => {
  return(
    <div className="spinner">
        <FadeLoader 
          color={"#5A78E1"} 
          loading={true} 
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
    </div>
  );
};

export default Spinner;
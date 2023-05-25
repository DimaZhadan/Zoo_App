import './switcher.scss';

const Switcher = ({ value, onChange }) => {

   return (
      <div className="theme-switch" onClick={onChange} defaultValue={value}>
      </div>
   )

}

export default Switcher;
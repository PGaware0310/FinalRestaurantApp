import classes from './Input.module.css';
const Input=props=>{
return(
    <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
            type={props.type}
            id={props.id}
            min={props.min}
            defaultValue={props.defaultValue}
        />
    </div>
);
};

export default Input;
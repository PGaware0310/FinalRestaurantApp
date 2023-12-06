import classes from './Input.module.css';
const Input=props=>{
return(
    <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input className={classes.input1}
            type={props.type}
            id={props.id}
            min={props.min}
            max={props.max}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
        />
    </div>
);
};

export default Input;
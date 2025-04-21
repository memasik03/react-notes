import classes from './Inputs.module.css'

export default function input({ onChange, value, placeholder, style }) {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={classes.input}
			value={value}
			onChange={onChange}
			style={style}
		/>
	)
}

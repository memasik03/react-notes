import classes from './Inputs.module.css'

export default function Textarea({ onChange, value, placeholder, style }) {
	return (
		<textarea
			className={classes.textarea}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			style={style}
		></textarea>
	)
}

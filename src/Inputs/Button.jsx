import clsx from 'clsx'
import classes from './Inputs.module.css'

export default function Button({ onClick, style, children, className }) {
	return (
		<button
			onClick={e => {
				e.preventDefault()
				onClick && onClick()
			}}
			style={style}
			className={clsx(classes.button, className)}
		>
			{children}
		</button>
	)
}

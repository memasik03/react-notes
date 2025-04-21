import { useEffect, useState } from 'react'
import classes from './Error.module.css'

export default function Error({ title, description }) {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
	const [isVisible, setIsVisible] = useState(true)
	useEffect(() => {
		function handleMouseMove(event) {
			setCoordinates({ x: event.clientX, y: event.clientY })
		}
		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			console.log('lala')

			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		isVisible && (
			<div
				className={classes.error}
				style={{ left: coordinates.x, top: coordinates.y }}
			>
				<h3 className={classes.title}>{title}</h3>
				<h3 className={classes.description}>{description}</h3>
			</div>
		)
	)
}

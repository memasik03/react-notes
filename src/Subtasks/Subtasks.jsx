import Button from '../Inputs/Button'
import Subtask from '../Subtask/Subtask'
import classes from './Subtasks.module.css'

export default function Subtasks({
	subtasks,
	onChange,
	onRemove,
	onAddedSubtask,
}) {
	return (
		<>
			<div className={classes.top}>
				<h2 className={classes.title}>Subtasks:</h2>
				<Button onClick={() => onAddedSubtask('')} className={classes.add}>
					+
				</Button>
			</div>
			{subtasks[0] && (
				<ul className={classes.subtasks}>
					{Array.from(subtasks).map(subtask => (
						<Subtask
							info={subtask}
							key={subtask.id}
							onChange={e => onChange(e, subtask.id)}
							onRemove={() => onRemove(subtask.id)}
						/>
					))}
				</ul>
			)}
		</>
	)
}

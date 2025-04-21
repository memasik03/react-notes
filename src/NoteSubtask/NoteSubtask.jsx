import clsx from 'clsx'
import { MdDone } from 'react-icons/md'
import classes from './NoteSubtask.module.css'

export default function NoteSubtask({ info, onTriggeredSubtask }) {
	return (
		<li className={classes.note_subtask}>
			<button
				className={clsx(classes.checkbox, info.isFinished && classes.finished)}
				onClick={() => onTriggeredSubtask()}
			>
				<MdDone
					className={clsx(
						classes.icon,
						info.isFinished && classes.icon_finished
					)}
				/>
			</button>
			<h3>{info.name}</h3>
		</li>
	)
}

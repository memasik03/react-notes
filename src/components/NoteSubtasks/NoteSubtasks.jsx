import NoteSubtask from '../NoteSubtask/NoteSubtask'
import classes from './NoteSubtasks.module.css'

export default function NoteSubtasks({ subtasks, noteId, onTriggeredSubtask }) {
	return (
		<ul className={classes.note_subtasks}>
			{subtasks.map(subtask => (
				<NoteSubtask
					info={subtask}
					onFinished={null}
					onTriggeredSubtask={() => onTriggeredSubtask(noteId, subtask.id)}
					key={subtask.id}
				/>
			))}
		</ul>
	)
}

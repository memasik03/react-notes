import Note from '../Note/Note'
import classes from './NoteList.module.css'

export default function NotesList({
	notes,
	onNoteRemove,
	onNoteFinished,
	onTriggeredSubtask,
}) {
	return (
		<div
			className={classes.notes_list}
			style={!notes[0] ? { width: '0%' } : { width: '100%' }}
		>
			{Array.from(notes).map(note => (
				<Note
					note={note}
					key={note.index}
					onNoteRemove={onNoteRemove}
					onNoteFinished={onNoteFinished}
					onTriggeredSubtask={onTriggeredSubtask}
				/>
			))}
		</div>
	)
}

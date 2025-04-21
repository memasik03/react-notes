import FormSection from '../FormSection/FormSection'
import NotesList from '../NotesList/NotesList'
import classes from './NoteBook.module.css'

function NoteBook({
	onAddedNote,
	onNoteRemove,
	onNoteFinished,
	notes,
	onTriggeredSubtask,
}) {
	return (
		<div className={classes.note_book}>
			<h1 className={classes.title}>
				Wellcome to <span className={classes.name}>"Zalupnotik"</span>!
			</h1>
			<div className={classes.content}>
				<FormSection onAddedNote={onAddedNote}></FormSection>
				<NotesList
					onNoteRemove={onNoteRemove}
					onNoteFinished={onNoteFinished}
					onTriggeredSubtask={onTriggeredSubtask}
					notes={notes}
				/>
			</div>
		</div>
	)
}

export default NoteBook

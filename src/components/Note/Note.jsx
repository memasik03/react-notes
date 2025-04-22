import clsx from 'clsx'
import React, { useState } from 'react'
import { MdDone, MdOutlineDelete } from 'react-icons/md'
import Button from '../Inputs/Button'
import NoteSubtasks from '../NoteSubtasks/NoteSubtasks'
import classes from './Note.module.css'

export default function Note({
	onNoteRemove,
	onNoteFinished,
	note,
	onTriggeredSubtask,
}) {
	const [isOpen, setIsOpen] = useState(false)

	function triggerIsOpen() {
		setIsOpen(!isOpen)
	}

	function noteOnClick(event) {
		if (['svg', 'BUTTON', 'path'].includes(event.target.tagName)) return
		triggerIsOpen()
	}

	const descriptionFirstLine = note.description.split('\n')[0]

	function renderDescription(description) {
		return description
			.trim()
			.split('\n')
			.map((line, index) => (
				<React.Fragment key={index}>
					{line}
					<br />
				</React.Fragment>
			))
	}

	return (
		<div
			className={clsx(classes.note, note.isFinished && classes.finished)}
			onClick={e => noteOnClick(e)}
		>
			<div className={clsx(classes.info, classes.hidden)}>
				<h3 className={classes.name}>{note.name}</h3>
				<h3 className={clsx(classes.description, !isOpen && classes.hidden)}>
					{renderDescription(!isOpen ? descriptionFirstLine : note.description)}
				</h3>
				<ul>
					{isOpen && (
						<NoteSubtasks
							subtasks={note.subtasks}
							onTriggeredSubtask={onTriggeredSubtask}
							noteId={note.index}
						/>
					)}
				</ul>
			</div>
			<div className={classes.actions}>
				<Button
					onClick={() => onNoteFinished(note.index)}
					className={classes.done}
					style={{ aspectRatio: '1/1', backgroundColor: '#4ed649' }}
				>
					<MdDone className={classes.icon} />
				</Button>
				<Button
					onClick={() => onNoteRemove(note.index)}
					style={{ aspectRatio: '1/1', backgroundColor: '#d64949' }}
				>
					<MdOutlineDelete className={classes.icon} />
				</Button>
			</div>
		</div>
	)
}

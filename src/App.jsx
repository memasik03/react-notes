import { useState } from 'react'
import './App.css'
import NoteBook from './components/NoteBook/NoteBook'

export default function App() {
	const [notes, setNotes] = useState([])
	const [noteIndex, setNoteIndex] = useState(0)

	function removeNote(index) {
		setNotes(notes.filter(note => note.index !== index))
	}

	function getNote(index) {
		for (let i = 0; i < notes.length; i++) {
			const element = notes[i]
			if (element.index === index) {
				return element
			}
		}
	}

	function finishNote(index) {
		const currentNote = getNote(index)
		currentNote.isFinished = !currentNote.isFinished
		removeNote(index)
		if (currentNote.isFinished) {
			setNotes(prevNotes => [...prevNotes, currentNote])
		} else {
			setNotes(prevNotes => [currentNote, ...prevNotes])
		}
	}

	function triggerSubtaskIsFinished(note_id, subtask_id) {
		let note = Array.from(notes).filter(note => note.index === note_id)[0]

		let subtasks = note.subtasks

		let targetSubtask = subtasks.filter(subtask => subtask.id === subtask_id)[0]
		targetSubtask.isFinished = !targetSubtask.isFinished

		let filteredsSubtasks = subtasks.filter(
			subtask => subtask.id !== subtask_id
		)
		filteredsSubtasks.splice(subtask_id, 0, targetSubtask)
		note.subtasks = filteredsSubtasks
		let newNotes = notes.filter(notee => notee.index !== note_id)
		newNotes.splice(note_id, 0, note)

		setNotes(newNotes)
	}

	function addNote(name, description, subtasks) {
		Array.from(subtasks).map(subtask => (subtask.isFinished = false))

		setNotes(prevNotes => [
			{
				name: name,
				description: description,
				index: noteIndex,
				isFinished: false,
				subtasks: subtasks,
			},
			...prevNotes,
		])
		setNoteIndex(noteIndex + 1)
	}
	return (
		<div className='app'>
			<NoteBook
				onAddedNote={addNote}
				onNoteRemove={removeNote}
				onNoteFinished={finishNote}
				onTriggeredSubtask={triggerSubtaskIsFinished}
				notes={notes}
			/>
		</div>
	)
}

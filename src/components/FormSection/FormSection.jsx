import { useState } from 'react'
import Error from '../Error/Error'
import Button from '../Inputs/Button'
import Input from '../Inputs/Input'
import Textarea from '../Inputs/Textarea'
import Subtasks from '../Subtasks/Subtasks'
import classes from './FormSection.module.css'

export default function FormSection({ onAddedNote }) {
	const [form, setForm] = useState({
		name: '',
		description: '',
	})
	const [subtasks, setSubtasks] = useState([])
	const [subtaskId, setSubtaskId] = useState(0)
	const [isError, setIsError] = useState(false)

	function addSubtask(name) {
		setSubtasks(prev => [...prev, { name: name, id: subtaskId }])
		setSubtaskId(subtaskId + 1)
	}

	function callError() {
		setIsError(true)
		setTimeout(() => setIsError(false), 3000)
	}

	function removeSubtask(id) {
		setSubtasks(subtasks.filter(subtask => subtask.id !== id))
	}

	function onChangeName(event) {
		setForm(prev => ({ ...prev, name: event.target.value }))
	}

	function onChangeDescription(event) {
		setForm(prev => ({ ...prev, description: event.target.value }))
	}

	function onChangeSubtask(event, id) {
		let targetSubtask = subtasks.filter(subtask => subtask.id === id)[0]
		targetSubtask.name = event.target.value

		let filteredsSubtasks = subtasks.filter(subtask => subtask.id !== id)
		filteredsSubtasks.splice(id, 0, targetSubtask)

		setSubtasks(filteredsSubtasks)
	}

	function removeEmptySubtasks() {
		return subtasks.filter(subtask => subtask.name !== '')
	}

	function addNote() {
		if ((form.name || form.description) === '' || form.name === '') {
			callError()
			return
		}
		onAddedNote(form.name, form.description, removeEmptySubtasks())
		clearForm()
	}

	function clearForm() {
		setForm({ name: '', description: '' })
		setSubtasks([])
		setSubtaskId(0)
	}

	return (
		<div className={classes.form_section}>
			{isError && (
				<Error
					title={'Error'}
					description={'You have not filled out the form'}
				/>
			)}
			<form className={classes.form}>
				<Input
					onChange={e => onChangeName(e)}
					value={form?.name}
					placeholder='Note name'
				/>
				<Textarea
					onChange={e => onChangeDescription(e)}
					value={form?.description}
					placeholder='Note description'
					style={{ height: '50vh' }}
				/>
				<Subtasks
					subtasks={subtasks}
					onChange={onChangeSubtask}
					onRemove={removeSubtask}
					onAddedSubtask={addSubtask}
				/>
				<div className={classes.buttons}>
					<Button
						onClick={() => addNote()}
						style={{ backgroundColor: '#4ed649' }}
					>
						Create note
					</Button>
					<Button
						onClick={() => clearForm()}
						style={{ backgroundColor: '#d64949' }}
					>
						Clear form
					</Button>
				</div>
			</form>
		</div>
	)
}

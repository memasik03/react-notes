import { MdOutlineDelete } from 'react-icons/md'
import Button from '../Inputs/Button'
import Input from '../Inputs/Input'
import classes from './Subtask.module.css'

export default function Subtask({ info, onChange, onRemove }) {
	return (
		<li className={classes.subtask}>
			<Input
				onChange={onChange}
				value={info.name}
				placeholder={'Subtask name'}
			/>
			<Button onClick={() => onRemove()} className={classes.remove}>
				<MdOutlineDelete className={classes.icon} />
			</Button>
		</li>
	)
}

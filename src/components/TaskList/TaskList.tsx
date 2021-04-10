import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'

const tasks = [
  'Break into components',
  'Create layout',
  'Add task (simple text)',
  'Mark task as done',
  'Edit task',
  'Save to local storage',
  'Undo task',
  'Add details',
  'Add date and time',
  'Add subtasks',
]

const TaskList = (): JSX.Element => {
  return (
    <ul className="tasks">
      {tasks.map((e, i) => (
        <TaskItem content={e} key={i} />
      ))}
    </ul>
  )
}

export default TaskList
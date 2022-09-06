import { Task } from '../../task.slice'

export interface TaskItemProps {
  task: Task
  onToggleDone: (taskId: string) => void
  onRemove: (taskId: string) => void
}

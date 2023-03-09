/* eslint-disable no-console */
import { useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';

interface DailyPlannerProps {
  date: Date | undefined;
}

interface Task {
  id: number;
  name: string;
  time: string;
}
// eslint-disable-next-line unused-imports/no-unused-vars
interface DateFormatOptions {
  month?: 'long' | 'short';
  day?: 'numeric' | '2-digit';
}

const DailyPlanner: React.FC<DailyPlannerProps> = ({ date }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');

  const addTask = () => {
    if (newTaskName && newTaskTime) {
      const newTask: Task = {
        id: tasks.length + 1,
        name: newTaskName,
        time: newTaskTime,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
      setNewTaskTime('');
    }
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const today = new Date();
  const options: DateFormatOptions = { day: 'numeric', month: 'long' };
  // eslint-disable-next-line unused-imports/no-unused-vars
  const formattedDate = today.toLocaleDateString('pt-BR', options);

  const now = new Date();
  const currentTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const message = `No tasks yet. The time is ${currentTime}.`;

  return (
    <div className='flex h-full flex-col items-center'>
      <div className='mb-2 text-lg font-medium text-gray-700'>
        {/* {format(date, 'EEEE, MMMM d')} */}
      </div>
      <div className='flex w-full max-w-md flex-col space-y-4'>
        <div className='rounded-md bg-white p-4 shadow-md'>
          <div className='mb-2 text-sm text-gray-800'>New Task</div>
          <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
            <input
              type='text'
              placeholder='Task name'
              className='flex-grow rounded-md border border-primary-orangelight px-2 py-1'
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
            <div className='flex items-center space-x-2'>
              <FiClock className='text-gray-500' />
              <input
                type='text'
                placeholder='00:00'
                className='w-16 rounded-md border border-gray-400 px-2 py-1'
                value={newTaskTime}
                onChange={(e) => setNewTaskTime(e.target.value)}
              />
            </div>
            <button
              className='rounded-md bg-green-500 px-4 py-2 text-white'
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          {tasks.map((task) => (
            <div
              key={task.id}
              className='flex items-center justify-between rounded-md bg-white px-4 py-2 shadow-md'
            >
              <div>
                <div className='font-medium text-gray-700'>{task.name}</div>
                <div className='text-sm text-gray-500'>{task.time}</div>
              </div>
              <button onClick={() => deleteTask(task.id)}>
                <HiOutlineTrash className='text-red-500' />
              </button>
            </div>
          ))}
        </div>
      </div>
      {tasks.length === 0 && (
        <div className='text-sm text-gray-500'>{message}</div>
      )}
    </div>
  );
};

export default DailyPlanner;

import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../context';

export function App () {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

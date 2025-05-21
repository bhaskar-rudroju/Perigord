import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DynamicForm } from './pages/DynamicForm'
import formSchema from "./config/registration.metadata.json";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DynamicForm formSchema={formSchema} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu.tsx'
import { MenuProducer } from './components/MenuProducer.tsx'
import { EventListUser } from './components/EventListUser.tsx'
import { EventDetailUser } from './components/EventDetailUser.tsx'
import { EventsContext, EventsProvider } from './api/context/events.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EventsProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='producer' element={<MenuProducer />}></Route>
            <Route path='user' element={<EventListUser />}>
              <Route path=':id' element={<EventDetailUser />}></Route>
            </Route>

          </Route>
        </Routes>
      </EventsProvider>
    </BrowserRouter>
    <App />
  </StrictMode>,
)

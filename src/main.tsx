import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu.tsx'
import { MenuProducer } from './components/MenuProducer.tsx'
import { EventListUser } from './components/EventListUser.tsx'
import { EventDetailUser } from './components/EventDetailUser.tsx'
import { EventsProvider } from './api/context/events.context.tsx'
import { AddProducer } from './components/AddProducer.tsx'
import { ProducerDetail } from './components/ProducerDetail.tsx'
import { EventDetailProducer } from './components/EventDetailProducer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EventsProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='producer' element={<MenuProducer />}></Route>
            <Route path='user' element={<EventListUser />}></Route>
            <Route path='user/:id' element={<EventDetailUser />}></Route>
            <Route path="producers/AddProducer" element={<AddProducer />} />
            <Route path="producers/ProducerDetails/:email" element={<ProducerDetail />} />
            <Route path="producers/EventDetailProducer/:id" element={<EventDetailProducer />} />
          </Route>
        </Routes>
      </EventsProvider>
    </BrowserRouter>
    <App />
  </StrictMode>,
)

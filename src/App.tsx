import Header from './components/Header'
import Navigation from './components/Navigation'
import Profile from './components/Profile'

import './app.scss'

/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
|
| ...
|
*/

export default function App() {
  return (
    <div className="sidebar bg-app-gray pb-8 rounded-xl">
      <Header />
      <Profile />
      <Navigation />
    </div>
  )
}

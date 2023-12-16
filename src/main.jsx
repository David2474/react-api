import ReactDOM from 'react-dom/client'

import App from './App'
import { Button } from './components/Button'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>

    <h1>hola mundo</h1>
    <App></App>

    <Button text="Anterior"/>
    <Button text="Siguente"/>
    </>
)

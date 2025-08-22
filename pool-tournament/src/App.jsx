import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Registration from './pages/Registration'
import Groups from './pages/Groups'
import Viewer from './pages/Viewer'


export default function App(){
return (
<div>
<Navbar />
<Routes>
<Route path="/" element={<Navigate to="/register" replace />} />
<Route path="/register" element={<Registration />} />
<Route path="/groups" element={<Groups />} />
<Route path="/viewer" element={<Viewer />} />
<Route path="*" element={<div className="page">Not Found</div>} />
</Routes>
</div>
)
}
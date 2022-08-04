import {Link} from 'react-router-dom'
function Navigation() {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200">
            Airport
            <Link to="/auth">Auth</Link>
        </nav>
    )
}
export default Navigation
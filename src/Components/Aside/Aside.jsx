import './Aside.css'
import { NavLink } from 'react-router-dom'
import Subscription from '../Subscriptions/Subscription'
import useModal from '../../Hook/useModal'
import useTheme from '../../Hook/useTheme'

function Aside() {
    let [open] = useModal()
    let [theme, setTheme] = useTheme()
    return (
        <aside>
            {open && <nav className="nav__list">
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/'>Home</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Trending'>Trending</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Subscriptions'>Subscriptions</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Library'>Library</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/History'>History</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Watch'>Watch later</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Favourites'>Favourites</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Liked'>Liked</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Music'>Music</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Games'>Games</NavLink>
                <NavLink className={theme!=='dark'?'nav__link-dark':'nav__link'} to='/Show more'>Show more</NavLink>
                <div>
                    <h3 className={theme !== 'dark' ? 'Subscriptions-dark' : 'Subscriptions '}>Subscriptions</h3>
                    <Subscription />
                </div>
                <NavLink className={theme !== 'dark' ? 'nav__link-dark' : 'nav__link'} to='/Setting'>Setting</NavLink>
            </nav>

            }
        </aside>


    )
}

export default Aside
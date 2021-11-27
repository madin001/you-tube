import './Subscription.css'
import { Users } from '../../Contents/Post'
import { NavLink } from 'react-router-dom'
import useTheme from '../../Hook/useTheme'


function Subscription() {
    let [theme]=useTheme()
    return (
        <ul>
          {Users.filter((user)=>user.id<=6).map((user)=>{
              return(
             <li className="user__link" key={user.id}>
                 <img src={user.image} alt="" width="30" height="30" />
                      <NavLink className={theme !== 'dark' ? 'user__link-aside-dark' :"user__link-aside"} to={`/channel/${user.id}`} >{user.name}</NavLink>
             </li>)
          })}
        </ul>
    )
}

export default Subscription
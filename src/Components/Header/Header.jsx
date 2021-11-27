import './Header.css'
import guy from '../../Assides/Images/GuyImg.png'
import useModal from '../../Hook/useModal'
import useTheme from '../../Hook/useTheme'
import darkLogo from '../../Assides/Images/darkLogo.svg'
import lupaDark from '../../Assides/Images/lupaDark.svg'
import videoDark from '../../Assides/Images/videoDark.svg'
import CombinedShapeDark from '../../Assides/Images/CombinedShapeDark.svg'
import ringDark from '../../Assides/Images/ringDark.svg'


function Header({ menu, logo, lupa, ring, video, combination ,menuDark }) {
    let [open, setOpen] = useModal(true)
    let[theme, setTheme]=useTheme()
    return (
        <header className="header">
            <button onClick={()=>{
                setOpen(!open)
            }} className="menu__btn">

                {theme !== 'dark' ? <img src={menuDark} /> : <img src={menu} />}
            </button>
            <a href='#tab' className="logo__link">
                {theme !== 'dark' ? <img src={darkLogo} /> : <img src={logo} alt="" /> }
                </a>

            <div className={theme!=='dark'?"label-light":"label"} >
                <input type="text" id="lupa" className="input__seach" placeholder="search" />
                <label htmlFor="lupa">
                {theme !== 'dark' ? <img src={lupaDark} alt="" /> : <img src={lupa} alt="" /> }

                </label>
               
            </div>

            <select className="select" onChange={(e) => setTheme(e.target.value)}>
                <option value="light">light</option>
                <option value="dark" >dark</option>
            </select>

            <button className="header__btn">       {theme !== 'dark' ? <img src={videoDark} alt="" /> : <img src={video} alt="" />}</button>
            <button className="header__btn">
                       {theme !== 'dark' ? <img src={CombinedShapeDark} alt="" /> : <img src={combination} alt="" />}</button>
            <button className="header__btn"> 
                  {theme !== 'dark' ? <img src={ringDark} alt="" />: <img src={ring} alt="" />}</button>
            <a className="profile" href="#tab">
                <img src={guy} alt="" />
            </a>

        </header>
    )
}

export default Header
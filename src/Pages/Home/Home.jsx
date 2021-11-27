import { Users, Posts } from "../../Contents/Post"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useModal from "../../Hook/useModal"

import "./Home.css"
import useTheme from "../../Hook/useTheme"


function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 2,
        sliderToScroll: 2,
    }

    var settingsSecond = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 3,
        sliderToScroll: 1,
    }

    var settingsThird = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 3,
        sliderToScroll: 2.5,
    }

    let [setOpen] = useModal()
    let[theme]=useTheme()


    return (
        <div className="home">
       

            <ul className="user__list">
                {Users.filter((user) => user.name === 'Dollie Blair').map((user) => {
                    return (
                        <>
                            <li className="user__item" key={user.id}>
                                <img src={user.image} alt="" />
                                <Link to={`/channel/${user.id}`} className={theme!=="dark"?"user__name-dark":"user__name"}>{user.name}</Link>
                            </li>
                            
                            <Slider {...settings} className="posts__list" >
                                {Posts.filter((post) => post.postId === user.id).map((post) => {
                                    
                                    return (
                                        <div className="posts__item" key={post.id}>
                                            <Link to={`/video/${post.id}`} onClick={()=>setOpen('false')}>
                                                <img className="slider__img" src={post.image} width="" height="150" />
                                            </Link>
                                            <h3 className={theme !== "dark" ? "post__title-dark" : "post__title"}>{post.title}</h3>
                                            <span className={theme !== "dark" ? "view-dark" : "view"}>{post.view + 'K'}</span>
                                            <span className={theme !== "dark" ? "time-dark" : "time"}>{post.time + "month ago"}</span>
                                            <NavLink className={theme !== "dark"? "userToChannel-dark" : "userToChannel"} to={`/channel/${user.id}`}>{post.name}</NavLink>

                                        </div>
                                    )
                                })}
                               
                            </Slider>
                           
                           

                        </>
                    )


                })}
            </ul>
            <ul className="recom__list">



                <h2 className="title__rec">Recommended</h2>

                <Slider {...settingsSecond} className="rec__list">
                    {Posts.filter((post) => post.rec === true).map((post) => {
                        return (

                            <li className="rec__item" key={post.id}>
                                <Link to={`/video/${post.id}`} onClick={() => setOpen(false)}>
                                    <img src={post.image} alt="" width="540" height="250" />
                                </Link>
                                <h3 className={theme !== "dark" ? "title__rec-dark" : "title__rec"}>{post.title}</h3>
                                <span className={theme !== "dark" ? "view-dark" : "view"}>{post.view + "view"}{post.view + 'K'}</span>
                                <span className={theme !== "dark" ? "time-dark" : "time"}>{post.time + "month ago"}{post.time + "month ago"}</span>
                                <NavLink className={theme !== "dark" ? "userToChannel-dark" : "userToChannel"} to={`/channel/${post.postId}`}>{post.name}</NavLink>

                            </li>
                        )

                    })}
                </Slider>



            </ul>

            <ul className="user__list">
                {Users.filter((user) => user.name === 'Food & Drink').map((user) => {
                    return (
                        <>
                            <li className="user__item" key={user.id}>
                                <img src={user.image} alt="" />
                                <NavLink to={`/channel/${user.id}`} className="user__name">{user.name}</NavLink>
                            </li>
                            <Slider {...settingsThird} className="posts__list">
                                {Posts.filter((post) => post.postId === user.id).map((post) => {
                            
                                    return (
                                        <li className="posts__item" key={post.id}>
                                            <Link to={`/video/${post.id}`}>
                                                <img src={post.image} width="" height="150" />
                                            </Link>
                                            <h3 className={theme !== "dark" ? "post__title-dark" : "post__title"}>{post.title}</h3>
                                            <span className={theme !== "dark" ? "view-dark" : "view"}>{post.view + 'K'}</span>
                                            <span className={theme !== "dark" ? "time-dark" : "time"}>{post.time + "month ago"}</span>
                                            <NavLink className={theme !== "dark" ? "userToChannel-dark" : "userToChannel"} to={`/channel/${user.id}`}>{post.name}</NavLink>

                                        </li>
                                    )
                                })}
                            </Slider>









                        </>
                    )


                })}
            </ul>

        </div>
    )
}
export default Home
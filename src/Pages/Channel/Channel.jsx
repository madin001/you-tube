import green from '../../Assides/Images/green.png'
import { Link, useParams } from 'react-router-dom'
import { Channels } from '../../Contents/Post'

import { NavLink } from 'react-router-dom'
import { Users,Posts } from '../../Contents/Post'

import { useState } from 'react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Channel.css'
import useTheme from '../../Hook/useTheme'

function Channel({ ring ,lupa}) {
    var settingsThird = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 4,
        sliderToScroll: 1,
    }
   let[theme]=useTheme()

    let [index, setIndex]=useState(1)
    const { id } = useParams()
    console.log(typeof (id))

    let activeTab=(i)=>{
        return(
            setIndex(i)
        )
    }
    return (
        <div className="channel">
            <div className="box">
                <img src={green} alt="" width="1200" height="280" />
            </div>

            <ul className="channel__list">
                {Users.filter((user) => user.id === Number(id)).map((user) => {
                    console.log(user)
                    return (<>

                        <li className="channel__item" key={user.id}>
                            <img src={user.image} alt="" />
                            <div className="right">
                                <NavLink className="channel__nav" to={`/channel/${id}`}>{user.name}</NavLink>
                                <p className="subs__text">{user.subscribed + "K Subscribed"}</p>
                            </div>
                            <div className="buttons">
                                <button className="ring__btn">
                                    <img src={ring} alt="" />
                                </button>

                                <button className="subscribe__btn">Subscribe 2.3m</button>
                            </div>

                        </li>
                        <div className="section__tab-content">
                            <ul className="block__tab">
                                <li className="block__tab-item">
                                    <button onClick={() => activeTab(1)} className={index === 1 ? "block__tab-btn tab-active" : "block__tab-btn", theme !== 'dark' ? 'block__tab-btn-dark' : 'block__tab-btn'}>Home</button>
                                </li>
                                <li className="block__tab-item">
                                    <button onClick={() => activeTab(2)} className={index === 2 ? "block__tab-btn tab-active" : "block__tab-btn", theme !== 'dark' ? 'block__tab-btn-dark' : 'block__tab-btn'}>Videos</button>
                                </li>
                                <li className="block__tab-item">
                                    <button onClick={() => activeTab(3)} className={index === 3 ? "block__tab-btn tab-active " : "block__tab-btn", theme !== 'dark' ? 'block__tab-btn-dark ' : 'block__tab-btn'}>Playlists</button>
                                </li>
                                <li className="block__tab-item">
                                    <button onClick={() => activeTab(4)} className={index === 4 ? "block__tab-btn tab-active" : "block__tab-btn", theme !== 'dark' ? 'block__tab-btn-dark  '   : 'block__tab-btn'}>Channels</button>
                                </li>
                                <li className="block__tab-item">
                                    <button onClick={() => activeTab(5)} className={index === 5 ? "block__tab-btn " : "block__tab-btn", theme !== 'dark' ? 'block__tab-btn-dark ' :'block__tab-btn'}> Discussion</button>
                                </li>
                                <li className="block__tab-item">
                                    <button onClick={() => activeTab(6)} className={index === 6 ? "block__tab-btn tab-active" : "block__tab-btn", theme !== 'dark' ? 'block__tab-btn-dark ' : 'block__tab-btn'}>About</button>
                                </li>
                                <li><img src={lupa} alt="" /></li>
                            </ul>
                            <div className="content__tabs">
                                <div  className={index === 1 ? "content content-active" : "content"}>
                                    {Channels.filter((channel) => channel.channelId === user.id).map((channel)=>{
                                        return(
                                            <div className="box__channel" key={channel.id} >
                                                {/* <Link to={`video/${post.id}`}> */}
                                                <img src={channel.image} alt="" width="540" height="250" />
                                                {/* </Link> */}
                                                <div className="box__channel-right">
                                                    <h3 className={theme !== "dark" ? "channel__title-dark" : "channel__title"}>{channel.title}</h3>
                                                    <p className={theme !== "dark" ? "channel__text-dark" : "channel__text"}>{channel.body}</p>
                                                    <span className={theme !== "dark" ? "view-dark" : "view"}>{channel.view+"k view"}</span>
                                                    <span className={theme !== "dark" ? "time-dark" : "time"}>{channel.time +"month ago"}</span>
                                                </div>
                                                
                                                
                                            
                                            </div>
                                        )
                                    })}

                                </div>
                                <div  className={index === 2 ? "content content-active" : "content"}>
                                    {Channels.filter((channel) => channel.channelId === user.id).map((channel) => {
                                      
                                        return (
                                            <div className="box__list"  >
                                                {channel.video.map((videos)=>{
                                                    return(
                                                        <img src={videos.url} alt="" width="300" height="200" />
                                                    )
                                                })}
                                              
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={index === 3 ? "content content-active" : "content"}>
                                    {Channels.filter((channel) => channel.channelId === user.id).map((channel) => {

                                        return (
                                            <div className="box__list"  >
                                                <p className={theme !== "dark" ? "text-playlist-dark" : "text-playlist"}>{channel.playlist}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={index === 4 ? "content content-active" : "content"}>
                                    {Channels.filter((channel) => channel.channelId === user.id).map((channel) => {

                                        return (
                                            <div className="box__list"  >
                                                <p className={theme !== "dark" ? "text-playlist-dark" : "text-playlist"}>{channel.channels}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={index === 5? "content content-active" : "content"}>
                                    {Channels.filter((channel) => channel.channelId === user.id).map((channel) => {

                                        return (
                                            <div className="box__list"  >
                                                <p className={theme !== "dark" ? "text-playlist-dark" : "text-playlist"}>{channel.discussion}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={index === 6 ? "content content-active" : "content"}>
                                    {Channels.filter((channel) => channel.channelId === user.id).map((channel) => {

                                        return (
                                            <div className="box__list"  >
                                                <p className={theme !== "dark" ? "text-playlist-dark" : "text-playlist"}>{channel.about}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                        </>

                    )
                })}
            
          
            
            </ul>

            <ul className="user__list">
                {Users.filter((user) => user.id === Number(id)).map((user) => {
                    return (
                        <>
                            <h2 className="title__rec">{user.name}</h2>
                            <Slider {...settingsThird} className="posts__list">
                                {Posts.filter((post) => post.postId === user.id).map((post) => {
                                    return (
                                        <li className="posts__item" key={post.id}>
                                            <Link to={`/video/${post.id}`}>
                                            <img className="posts__img" src={post.image} width="250" height="150"  />
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

export default Channel
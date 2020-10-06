import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, getRepos } from "../store/index"
import css from "../App.css"

export default () => {
  const dispatch = useDispatch()
  const profileData = useSelector((appState) => appState.profile)
  const reposData = useSelector((appState) => appState.repos)
  // console.log(reposData)

  useEffect(() => {
    dispatch(getProfile())
    dispatch(getRepos())
  }, [])

  // useEffect(() => {
  //   dispatch(getProfile(repos))
  // }, [])

  return (
    <div className="container">
      <div className="subNavBar">
        <nav>
          <a href="#">
            <i class="far fa-book-open"></i> Overview
          </a>{" "}
          <a href="#">
            <i class="far fa-bookmark"></i> Repositories{" "}
            <span className="reposAmount">{reposData.length}</span>
          </a>
          <a href="#">
            <i class="far fa-chart-bar"></i> Projects
          </a>{" "}
          <a href="#">
            <i class="far fa-cube"></i> Packages
          </a>
        </nav>
      </div>

      <div className="sideBar">
        <div>
          <img className="aviVeg" src={profileData.avatar_url} />
        </div>
        <h2 className="profileName">{profileData.name}</h2>
        <div className="log-In">{profileData.login}</div>
        <div>{profileData.bio}</div>

        <div>
          <button className="button2">Edit Profile</button>
        </div>
        {/* <div>{profileData.blog}</div> */}
        <div className="following">
          <i class="far fa-user-friends"></i> {profileData.followers} followers
          · {profileData.following} following ·<i class="far fa-star"></i> 1
        </div>
        <div className="sideBarLocation">
          <i class="far fa-map"></i> {profileData.location}
        </div>
        <div className="sideBarEmail">
          <i class="fas fa-envelope-open-text"></i>{" "}
          {profileData.email || "Oscar@gmail.com"}
        </div>

        <div>
          <i class="far fa-link"></i> {profileData.html_url}
        </div>
      </div>

      <div className="bodyCon">
        <div className="searchBar">
          <input
            className="inputTextArea"
            placeholder=" Find a repository..."
          ></input>
          <button className="button3">
            Type: All <i class="fas fa-caret-down"></i>
          </button>
          <button className="button5">
            Language: All <i class="fas fa-caret-down"></i>
          </button>
          <button className="button4">
            <i class="far fa-bookmark"></i> New
          </button>
        </div>
        {reposData.map((item) => (
          <div className="eachRepo">
            <a href="#">{item.name} </a>
            <button className="starBtn">
              <i class="far fa-star"></i>Star
            </button>
            <div className="middleEachRepo"> Forked From {item.node_id}</div>
            <div className="bottomEachRepo">
              <div className="itemLanguage">
                {item.language || "Language: N/A"}
              </div>{" "}
              <div className="itemFork">
                <i class="fas fa-code-branch"></i> {item.forks}
              </div>{" "}
              <div className="itemUpdated">{item.updated_at}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

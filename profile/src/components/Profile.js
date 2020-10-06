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
          <button>Edit Profile</button>
        </div>
        {/* <div>{profileData.blog}</div> */}
        <div>
          <i class="far fa-map"></i> {profileData.location}
        </div>
        <div>
          <i class="fas fa-envelope-open-text"></i>{" "}
          {profileData.email || "Oscar@gmail.com"}
        </div>

        <div>
          <i class="far fa-link"></i> {profileData.html_url}
        </div>
      </div>

      <div className="bodyCon">
        {reposData.map((item) => (
          <div className="eachRepo">
            <a href="#">{item.name}</a>
            <div className="middleEachRepo"> Forked From {item.node_id}</div>
            <div className="bottomEachRepo">
              {item.language} <i class="fas fa-code-branch"></i> {item.forks}{" "}
              {item.updated_at}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

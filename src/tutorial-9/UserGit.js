import React from 'react'

const UserGit = ({data}) => {
    return (
      <div className="app-user">
        <div className="app-user_info">
          <div className="app-user_image">
            <img
              style={{ width: "140px", borderRadius: "100px" }}
              src={data.avatar_url}
              alt=""
            />
          </div>
          <div className="app-user_data">
            <h1 className="app-user_name">
              {data.name}
              <span>{data.login}</span>
            </h1>
            <p className="app-user_about">{data.bio}</p>
          </div>
        </div>
        <ul className="app-user_stats">
          <li className="app-user_stats-item">
            Репозитории
            <span>{data.public_repos}</span>
          </li>
          <li className="app-user_stats-item">
            Подписчиков
            <span>
              {data.length ? (data.followers / 1000).toFixed(2) : "0"}К
            </span>
          </li>
          <li className="app-user_stats-item">
            Звёзд
            <span>{data.public_gists}</span>
          </li>
        </ul>
        <ul className="app-user_location">
          <li className="app-user_location-item">{data.location}</li>
          <li className="app-user_location-item">
            <a href={data.blog}>{data.blog}</a>
          </li>
          <li className="app-user_location-item">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${data.login}`}
            >
              Link to GitHub
            </a>
          </li>
        </ul>
      </div>
    );
}

export default UserGit

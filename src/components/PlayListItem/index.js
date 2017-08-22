import React from 'react'
import './index.css'


class PlayListItem extends React.Component {
  render() {
    return(
      <div className="song-card">
        <p>Username: {this.props.song.userName}</p>
        <p>Artist: {this.props.song.arist}</p>
        <p>Song Title: {this.props.song.songTitle}</p>
        <p>Notes: {this.props.song.notes}</p>
      </div>
    )
  }
}

export default PlayListItem

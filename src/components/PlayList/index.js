import React from 'react'
import PlayListItem from '../PlayListItem'
import map from 'lodash/map'
import './index.css';

class PlayList extends React.Component {
  render() {
    return(
      <div>
        {map(this.props.songs, (song, index) => (
          <div key={index}>
            <PlayListItem key={index} song={song}/>
          </div>
        ))}
      </div>
    )
  }
}

export default PlayList

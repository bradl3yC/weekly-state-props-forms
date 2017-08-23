import React from 'react'
import PlayListItem from '../PlayListItem'
import map from 'lodash/map'
import './index.css';

class PlayList extends React.Component {
  render() {
    return(
      <div>
        {map(this.props.songs, (song) => (
          <div>
            <PlayListItem song={song}/>
          </div>
        ))}
      </div>
    )
  }
}

export default PlayList

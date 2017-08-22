import React from 'react'
import PlayListItem from '../PlayListItem'
import map from 'lodash/map'

class PlayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
    }
  }

  fetchPlayList() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log(this.state.songs)
      })
  }

  componentDidMount() {
    this.fetchPlayList()
  }

  render() {
    return(
      <div>
        {map(this.state.songs, (song) => (
          <div>
            <PlayListItem song={song}/>
          </div>
        ))}
      </div>
    )
  }
}

export default PlayList

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
      })
  }

  componentDidMount() {
    this.fetchPlayList()
  }

  render() {
    //map over songs and pass each song into PlayListItem as props?
    return(
      <div>
        {map(this.props.songs, (song) => (
          <PlayListItem song={song}/>
        ))}
      </div>
    )
  }
}

export default PlayList

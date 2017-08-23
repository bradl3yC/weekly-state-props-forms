import React, { Component } from 'react';
import Navbar from '../Navbar'
import PlayList from '../PlayList'
import PlayListForm from '../PlayListForm'
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: "",
    }
  }

  addSong = (song) => {
      let listItem = JSON.stringify(song);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      this.fetchPlayList()
    }).catch(err => {
      console.log(err);
    });
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
    return (
      <div className="app">
        <Navbar />
        <div className="form-and-list">
          <PlayList songs={this.state.songs} />
          <PlayListForm addSong={this.addSong}/>
        </div>
      </div>
    );
  }
}

export default App;

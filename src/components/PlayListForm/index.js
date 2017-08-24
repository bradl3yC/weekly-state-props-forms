import React from 'react'
import PropTypes from 'prop-types'
import './index.css';

const INITIAL_STATE = {
    userName: "",
    songArtist: "",
    songTitle: "",
    songNotes: "",
}

class PlayListForm extends React.Component {
  static propTypes = {
    addSong: PropTypes.func.isRequired,
  }
  constructor(props){
    super(props)
    this.state = INITIAL_STATE
  }

  onChangeHandler = (key, value) => {
    this.setState({[key]: value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addSong(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={(event) => this.onChangeHandler('userName', event.target.value)} type="text" name="userName" placeholder="Username" value={this.state.userName}/>
          <input onChange={(event) => this.onChangeHandler('songArtist', event.target.value)} type="text" name="songArtist" placeholder="Artist" value={this.state.songArtist}/>
          <input onChange={(event) => this.onChangeHandler('songTitle', event.target.value)} type="text" name="songTitle" placeholder="Song Title" value={this.state.songTitle}/>
          <textarea onChange={(event) => this.onChangeHandler('songNotes', event.target.value)} placeholder="Song Notes:" value={this.state.songNotes}></textarea>
          <button>Add Song!</button>
        </form>
      </div>
    )
  }
}

export default PlayListForm

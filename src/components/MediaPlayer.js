import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import CustomPlayPause from './CustomPlayPause';
import CurrentTime from './CurrentTime';
import MusicPlayer from 'react-responsive-music-player'
const { PlayPause, MuteUnmute } = controls

class MediaPlayer extends Component {


  
  render() {
    const playlist = [
  {
    url: 'https://picosong.com/wmueW.mp3',
    cover: 'path/to/jpg',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  },
  {
    url: 'path/to/mp3',
    cover: 'path/to/jpg',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  }
]
    return (
      <div>
         <MusicPlayer playlist={playlist} />
      </div>
    )
  }
}

export default MediaPlayer
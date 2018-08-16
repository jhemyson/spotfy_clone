import React from 'react'
import { Container, NewPlayList } from './styles'
import addPlayListIcon from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
  <Container>
    <div/>

    <NewPlayList>
      <img src={addPlayListIcon} alt="Adicionar playlist"/>
      Nova playlist
    </NewPlayList>
  </Container>
)

export default Sidebar

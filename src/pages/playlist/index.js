import React from 'react'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const PlayList = () => (

  <Container>
    <Header>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
        alt="PlayList"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 musicas</p>
        <button>PLAY</button>
      </div>

    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração"/></th>
      </thead>
      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid</td>
          <td>3:23</td>
        </tr>
      </tbody>
    </SongList>
  </Container>

)

export default PlayList

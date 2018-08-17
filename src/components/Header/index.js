import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Buscar" />
    </Search>

    <User>
      <img src="https://forum.fidelityjogos.net/uploads/profile/photo-13537.jpg?_r=1508185585"
      alt="Avatar"/>
      Jhemyson Sousa
    </User>
  </Container>
)

export default Header

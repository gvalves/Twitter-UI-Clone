import React from 'react';

import { Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  Followage,
  LocationIcon,
  CakeIcon
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>
          Editar Perfil
        </EditButton>

        <h1>Gustavo V. Alves</h1>
        <h2>@574r50f71w3</h2>

        <p>
          Developer at <a href="#!">@Geekcode</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de Junho de 2001
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong> 677</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;

import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
	const { signOut } = useAuth();
	return (
		<Container>
			<Header>
				<HeaderContent>
					<img src={logoImg} alt="Gobarber" />

					<Profile>
						<img
							src="https://avatars2.githubusercontent.com/u/33159326?s=400&u=5a82be8963d06c627b4f59131823d83c70fb3334&v=4"
							alt="Hádamo"
						/>
						<div>
							<span>Bem-vindo(a),</span>
							<strong>Hádamo</strong>
						</div>

					</Profile>

					<button type="button" onClick={signOut} >
						<FiPower />
					</button>
				</HeaderContent>
			</Header>
		</Container>
	);
};

export default Dashboard;

import { gql, useQuery } from '@apollo/client';

const GET_CLENTS = gql`
	query getClients {
		clients {
			id
			name
			email
			phone
		}
	}
`;

const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLENTS);
};

export default Clients;

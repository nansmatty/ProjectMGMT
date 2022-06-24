import { gql } from '@apollo/client';

export const GET_CLENTS = gql`
	query getClients {
		clients {
			id
			name
			email
			phone
		}
	}
`;

import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../Mutations/clientMutations';
import { GET_CLIENTS } from '../Queries/clientQueries';

const ClientRow = ({ client }) => {
	const [deleteClient] = useMutation(DELETE_CLIENT, {
		variables: { id: client.id },
		// refetchQueries: [{ query: GET_CLIENTS }],
		update(cache, { data: { deleteClient } }) {
			const { clients } = cache.readQuery({ query: GET_CLIENTS });
			cache.writeQuery({
				query: GET_CLIENTS,
				data: {
					clients: clients.filter((client) => client.id !== deleteClient.id),
				},
			});
		},
	});

	return (
		<tr>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>
				<button onClick={deleteClient} className='btn btn-danger btn-sm'>
					<FaTrash />
				</button>
			</td>
		</tr>
	);
};

export default ClientRow;

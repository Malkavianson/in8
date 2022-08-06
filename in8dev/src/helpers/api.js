const UserRouters = {
	in8EndPoint: () => `${Api.baseUrl}`,
	usersList: () => `${UserRouters.in8EndPoint()}/users`,
	userById: id => `${UserRouters.in8EndPoint()}/users/${id}`,
	userCreate: () => `${UserRouters.in8EndPoint()}/users`,
	updateUserById: id => `${UserRouters.in8EndPoint()}/users/${id}`,
	deleteUserById: id => `${UserRouters.in8EndPoint()}/users/${id}`,
};
const Api = {
	// baseUrl: 'https://localhost:3333',
	baseUrl: 'https://in8.onrender.com',
	...UserRouters,
};
export default Api;

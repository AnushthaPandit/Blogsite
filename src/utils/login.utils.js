import localtoragekeys from "../constants/localstorage.constants";

export function getToken() {
	const localToken = localStorage.getItem(localtoragekeys.token);

	if (!localToken) {
		return false;
	}

	return localToken;
}

export function getRole() {
	return localStorage.getItem(localtoragekeys.role);
}

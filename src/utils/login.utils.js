import localtoragekeys from "../constants/localstorage.constants";

export function getToken() {
	const localToken = localStorage.getItem(localtoragekeys.token);

	if (!localToken) {
		return true;
	}

	return localToken;
}

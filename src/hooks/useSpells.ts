import { AxiosError } from 'axios';
import { useContext } from 'react';
import { FetchContext } from '../context/FetchContext';

const useSpells = () => {
	const fetchContext = useContext(FetchContext);

	const getSpells = async () => {
		try {
			const data = await fetchContext?.axiosInstance.get('/spells');
			return data?.data;
		} catch (error) {
			const errorObj = error as AxiosError;
			return errorObj?.response?.data;
		}
	};

	const getSpellDetails = async (id: string) => {
		try {
			const data = await fetchContext?.axiosInstance.get(`/spells/${id}`);
			return data?.data;
		} catch (error) {
			const errorObj = error as AxiosError;
			return errorObj?.response?.data;
		}
	};
	return { getSpells, getSpellDetails };
};

export default useSpells;

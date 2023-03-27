import { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../services/api';
import useDebounce from './useDebounce';
import {
  setLoading,
  setPage,
  setRepositories,
  setSearch,
  State,
} from '../redux/slices/repositories';

type Response = {
  total_count: number;
  items: Repository[];
};

export type Repository = {
  id: number | null;
  name: string | null;
  watchers_count: number | null;
  description: string | null;
  language: string | null;
  stargazers_count: number | null;
  owner: {
    login: string | null;
    stargazers_count: number | null;
    avatar_url: string | null;
  };
};

const useRepositories = () => {
  const dispatch = useDispatch();
  const state = useSelector(
    (state: { repositories: State }) => state.repositories,
  );

  const debouncedSearch = useDebounce<string>(state.search, 500);

  const getRepository = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const response = await api.get<Response>('search/repositories', {
        params: {
          page: state.page,
          per_page: 20,
          q: debouncedSearch.length > 0 ? debouncedSearch : 'react',
        },
      });

      if (response.data) {
        dispatch(
          setRepositories({
            repositories: response.data.items,
            total: Math.ceil(response.data.total_count / 20),
          }),
        );
      } else {
        dispatch(setLoading(false));
        throw Error('Problem with getting data');
      }
    } catch (e) {
      var message = 'Something went wrong, please try again';
      if (typeof e === 'string') {
        message = e;
      } else {
        message = (e as Error)?.message;
      }

      alert(message);
      dispatch(setLoading(false));
    }
  }, [debouncedSearch, dispatch, state.page]);

  useEffect(() => {
    getRepository();
  }, [getRepository]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearch(event.target.value));

  const handlePageChange = (selectedItem: { selected: number }) => {
    // The pagination package starts counting from 0, so we have to increase this value by 1
    dispatch(setPage(selectedItem.selected + 1));
  };

  return {
    loading: state.loading,
    repositories: state.repositories,
    handlePageChange,
    handleSearch,
    totalPages: state.totalPages,
    page: state.page,
  };
};

export default useRepositories;

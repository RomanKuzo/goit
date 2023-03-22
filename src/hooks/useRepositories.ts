import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import api from '../services/api';
import useDebounce from './useDebounce';

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
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce<string>(search, 500);
  const [loading, setLoading] = useState(false);

  const getRepository = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<Response>('search/repositories', {
        params: {
          page: page,
          per_page: 20,
          q: debouncedSearch.length > 0 ? debouncedSearch : 'react',
        },
      });

      if (response.data) {
        setRepositories(response.data.items);
        setTotalPages(Math.ceil(response.data.total_count / 20));
      } else {
        setLoading(false);
        throw Error('Problem with getting data');
      }

      setLoading(false);
    } catch (e) {
      var message = 'Something went wrong, please try again';
      if (typeof e === 'string') {
        message = e;
      } else {
        message = (e as Error)?.message;
      }

      alert(message);
      setLoading(false);
    }
  }, [debouncedSearch, page]);

  useEffect(() => {
    getRepository();
  }, [getRepository]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected);
  };

  return {
    repositories,
    page,
    loading,
    totalPages,
    handlePageChange,
    handleSearch,
  };
};

export default useRepositories;

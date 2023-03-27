import { createSlice } from '@reduxjs/toolkit';
import { Repository } from '../../hooks/useRepositories';

export type State = {
  repositories: Repository[];
  loading: boolean;
  page: number;
  totalPages: number;
  search: string;
};

type Action<T> = {
  payload: T;
};

const initialState: State = {
  repositories: [],
  loading: true,
  page: 1,
  totalPages: 0,
  search: '',
};

const repositories = createSlice({
  initialState,
  name: 'repositories',
  reducers: {
    init: () => initialState,

    setRepositories: (
      state,
      action: Action<{ repositories: Repository[]; total: number }>,
    ) => {
      state.repositories = action.payload.repositories;
      state.totalPages = action.payload.total;
      state.loading = false;
    },

    setLoading: (state, action: Action<boolean>) => {
      state.loading = action.payload;
    },

    setPage: (state, action: Action<number>) => {
      state.page = action.payload;
    },

    setSearch: (state, action: Action<string>) => {
      state.search = action.payload;
    },
  },
});

export const { init, setRepositories, setLoading, setPage, setSearch } =
  repositories.actions;

export default repositories.reducer;

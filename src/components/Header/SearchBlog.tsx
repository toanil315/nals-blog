import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { InputGroup, InputGroupText } from 'reactstrap';
import { Input } from '../Input';
import { SearchIcon } from '../icons';

const getInitialSearch = () => {
  const search = new URLSearchParams(window.location.search).get('search');
  return search || '';
};

const SearchBlog = () => {
  const { t } = useTranslation();
  const [search, setSearch] = React.useState(getInitialSearch());
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchBlog = (e: React.FormEvent) => {
    e.preventDefault();
    searchParams.delete('search');
    searchParams.delete('order');
    searchParams.delete('page');
    if (search) {
      searchParams.append('search', search);
      searchParams.append('page', '1');
    }
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSearchBlog}>
      <InputGroup className='flex rounded-lg bg-white border border-gray-400 overflow-hidden focus-within:!border-green-500 focus-within:shadow-green-200 focus-within:shadow-sm transition-all duration-150 ease-in-out [&>div]:flex-1'>
        <Input
          className='min-w-[300px] md:flex-0 !py-3 !shadow-none !border-none'
          name='search'
          placeholder={t('search')}
          size='sm'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <InputGroupText className='!bg-white !border-l-0 !border-none'>
          <SearchIcon />
        </InputGroupText>
      </InputGroup>
    </form>
  );
};

export default SearchBlog;

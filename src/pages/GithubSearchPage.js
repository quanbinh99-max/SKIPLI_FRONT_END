import { useEffect, useState } from 'react';
import { getUserByPhoneNumber } from '../components/api/authApi';
import { likeGithubUser, searchGithubUsers } from '../components/api/githubApi';
import GithubList from '../components/Github/GithubList';
import Pagination from '../components/Github/GithubPagination';
import Navbar from '../components/Layout/Navbar';
import { getPhoneFromLocalStorage } from '../utils/storage';

export default function GithubSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const phoneNumber = getPhoneFromLocalStorage();

  useEffect(() => {
    if (query) {
      async function fetchGithubUsers() {
        const users = await searchGithubUsers(query, page, perPage)
        setResults(users);
      }
      fetchGithubUsers()
    }
  }, [query, page, perPage]);

  useEffect(() => {
    async function fetchUser() {
      const result = await getUserByPhoneNumber(phoneNumber);
      setLikedIds(result?.favorite_github_users?.map((user) => user.id) || []);
    }
    fetchUser()
  }, []);

  const handleLike = (id) => {
    if (likedIds.includes(id)) {
      likeGithubUser(phoneNumber, likedIds.filter((likedId) => likedId !== id));
      setLikedIds(likedIds.filter((likedId) => likedId !== id));
    } else {
      likeGithubUser(phoneNumber, [...likedIds, id]);
      setLikedIds([...likedIds, id]);
    }
  };

  return (
    <>
      <Navbar likedIds={likedIds} query={query} setQuery={setQuery} />
      <GithubList users={results} likedIds={likedIds} onLike={handleLike} />
      {results.length === 0 ? <p>No results found</p> : <Pagination currentPage={page} perPage={perPage} onChangePage={setPage} onChangePerPage={setPerPage} />}

    </>
  );
}

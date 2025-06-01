import { useEffect, useState } from 'react';
import { getPhoneFromLocalStorage } from '../../utils/storage';
import { findGithubUserProfile } from '../api/githubApi';

export default function ProfileModal({ likedIds }) {
  const [profiles, setProfiles] = useState([]);
  const phone = getPhoneFromLocalStorage();

  useEffect(() => {
    async function fetchProfiles() {
      const findProfiles = await Promise.all(likedIds.map((id) => findGithubUserProfile(id)));
      setProfiles(findProfiles);
    }
    fetchProfiles();
  }, [likedIds]);

  if (profiles.length === 0) return null
  return (
    <div>
      <h3>Phone: {phone}</h3>
      {profiles?.map(profile => (
        <div key={profile.id}>
          <p>{profile.login}</p>
          <img src={profile.avatar_url} alt="" width={40} />
        </div>
      ))}
    </div>
  );
}

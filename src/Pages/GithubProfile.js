import React, { useEffect, useState } from 'react';

function GithubProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/johndoe');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="github-profile">
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <img src={userData.avatar_url} alt="Avatar de John Doe" />
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          {/* Ajoutez d'autres informations si nécessaire */}
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default GithubProfile;
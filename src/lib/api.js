
const api = {
  fetchUser(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    return fetch(url)
      .then(res => res.json(), err => console.log(err))
  },
  fetchUserRepos(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url)
      .then(res => res.json(), err => console.log(err))    
  }
}

export default api;
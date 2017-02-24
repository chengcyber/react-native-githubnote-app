
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
  },
  getNotes(username) {
    username = username.toLowerCase().trim();
    const url = `https://githubnotetaker-4c439.firebaseio.com/${username}.json`;
    return fetch(url)
      .then(res => res.json(), err => console.log(err))
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    const url = `https://githubnotetaker-4c439.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(note)
    }).then(res => res.json(), err => console.log(err))
  }
}

export default api;
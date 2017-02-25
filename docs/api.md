# API

## Github API

[Official Doc](https://developer.github.com/v3/)

```
GET
https://api.github.com/users/${username}
response:
{
  "login": "kimochg",
  "id": 16147702,
  "avatar_url": "https://avatars.githubusercontent.com/u/16147702?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kimochg",
  "html_url": "https://github.com/kimochg",
  "followers_url": "https://api.github.com/users/kimochg/followers",
  "following_url": "https://api.github.com/users/kimochg/following{/other_user}",
  "gists_url": "https://api.github.com/users/kimochg/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kimochg/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kimochg/subscriptions",
  "organizations_url": "https://api.github.com/users/kimochg/orgs",
  "repos_url": "https://api.github.com/users/kimochg/repos",
  "events_url": "https://api.github.com/users/kimochg/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kimochg/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Cheng",
  "company": "Sfit",
  "blog": "kimochg.github.io",
  "location": "Shanghai",
  "email": "kimochg@outlook.com",
  "hireable": null,
  "bio": null,
  "public_repos": 40,
  "public_gists": 13,
  "followers": 3,
  "following": 9,
  "created_at": "2015-12-04T07:11:56Z",
  "updated_at": "2017-02-18T09:27:28Z"
}
```
```
GET
https://api.github.com/users/${username}/repos
response:
[
  {
    "id": 77868489,
    "name": "100-days-of-code",
    "full_name": "kimochg/100-days-of-code",
    "owner": {
      "login": "kimochg",
      "id": 16147702,
      "avatar_url": "https://avatars.githubusercontent.com/u/16147702?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kimochg",
      "html_url": "https://github.com/kimochg",
      "followers_url": "https://api.github.com/users/kimochg/followers",
      "following_url": "https://api.github.com/users/kimochg/following{/other_user}",
      "gists_url": "https://api.github.com/users/kimochg/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kimochg/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kimochg/subscriptions",
      "organizations_url": "https://api.github.com/users/kimochg/orgs",
      "repos_url": "https://api.github.com/users/kimochg/repos",
      "events_url": "https://api.github.com/users/kimochg/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kimochg/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/kimochg/100-days-of-code",
    "description": "Fork this template for the 100 days journal - to keep yourself accountable",
    "fork": true,
    "url": "https://api.github.com/repos/kimochg/100-days-of-code",
    "forks_url": "https://api.github.com/repos/kimochg/100-days-of-code/forks",
    "keys_url": "https://api.github.com/repos/kimochg/100-days-of-code/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/kimochg/100-days-of-code/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/kimochg/100-days-of-code/teams",
    "hooks_url": "https://api.github.com/repos/kimochg/100-days-of-code/hooks",
    "issue_events_url": "https://api.github.com/repos/kimochg/100-days-of-code/issues/events{/number}",
    "events_url": "https://api.github.com/repos/kimochg/100-days-of-code/events",
    "assignees_url": "https://api.github.com/repos/kimochg/100-days-of-code/assignees{/user}",
    "branches_url": "https://api.github.com/repos/kimochg/100-days-of-code/branches{/branch}",
    "tags_url": "https://api.github.com/repos/kimochg/100-days-of-code/tags",
    "blobs_url": "https://api.github.com/repos/kimochg/100-days-of-code/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/kimochg/100-days-of-code/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/kimochg/100-days-of-code/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/kimochg/100-days-of-code/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/kimochg/100-days-of-code/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/kimochg/100-days-of-code/languages",
    "stargazers_url": "https://api.github.com/repos/kimochg/100-days-of-code/stargazers",
    "contributors_url": "https://api.github.com/repos/kimochg/100-days-of-code/contributors",
    "subscribers_url": "https://api.github.com/repos/kimochg/100-days-of-code/subscribers",
    "subscription_url": "https://api.github.com/repos/kimochg/100-days-of-code/subscription",
    "commits_url": "https://api.github.com/repos/kimochg/100-days-of-code/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/kimochg/100-days-of-code/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/kimochg/100-days-of-code/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/kimochg/100-days-of-code/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/kimochg/100-days-of-code/contents/{+path}",
    "compare_url": "https://api.github.com/repos/kimochg/100-days-of-code/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/kimochg/100-days-of-code/merges",
    "archive_url": "https://api.github.com/repos/kimochg/100-days-of-code/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/kimochg/100-days-of-code/downloads",
    "issues_url": "https://api.github.com/repos/kimochg/100-days-of-code/issues{/number}",
    "pulls_url": "https://api.github.com/repos/kimochg/100-days-of-code/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/kimochg/100-days-of-code/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/kimochg/100-days-of-code/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/kimochg/100-days-of-code/labels{/name}",
    "releases_url": "https://api.github.com/repos/kimochg/100-days-of-code/releases{/id}",
    "deployments_url": "https://api.github.com/repos/kimochg/100-days-of-code/deployments",
    "created_at": "2017-01-02T23:28:14Z",
    "updated_at": "2017-01-02T22:56:00Z",
    "pushed_at": "2017-02-23T13:30:56Z",
    "git_url": "git://github.com/kimochg/100-days-of-code.git",
    "ssh_url": "git@github.com:kimochg/100-days-of-code.git",
    "clone_url": "https://github.com/kimochg/100-days-of-code.git",
    "svn_url": "https://github.com/kimochg/100-days-of-code",
    "homepage": null,
    "size": 27,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": false,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  ...
]
```

## Firebase
[Official Doc](https://firebase.google.com/docs/)

```
GET
https://githubnotetaker-4c439.firebaseio.com/${username}.json
response:
{
  "codedstring": "value"
}
error:
{
  "error": "error message"
}
```

```
POST
https://githubnotetaker-4c439.firebaseio.com/${username}.json
response:
{
  "name": "codedstring"
}
error:
{
  "error": "erorr message"
}
```
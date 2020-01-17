function user() {
  var name = document.getElementById("name").value;
  console.log(name);
  var repos;
    var list = document.getElementById("list");
  fetch("https://api.github.com/users/" + name)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // console.log(data.avatar_url)
      document.getElementById("user_profile").src = data.avatar_url;
      repos = data.repos_url;
      console.log(data.public_repos);
      return repos
    })
    .then(
      repos => fetch(repos)
        .then(response => response.json())
        .then(data => {
        //   console.log(data);
          data.forEach( item => {
            var repoDiv = document.createElement("div");
            repoDiv.classList.add("repo");
            var repoName = document.createElement("h2");
            repoName.setAttribute("id","repo_name");
            repoName.setAttribute("class","repo_name");
            repoName.innerText = item.name;
            var starDiv = document.createElement("div");
            starDiv.setAttribute("id","stars");
            starDiv.setAttribute("class","stars");
            starDiv.innerHTML = "Stars: "+item.stargazers_count;
            var watcherDiv = document.createElement("div");
            watcherDiv.setAttribute("id","watcherv");
            watcherDiv.setAttribute("class","watcher");
            watcherDiv.innerHTML = "Watchers: "+item.watchers_count;
            var forkDiv = document.createElement("div");
            forkDiv.setAttribute("id","forks");
            forkDiv.setAttribute("class","forks");
            forkDiv.innerHTML = "Forks: "+item.forks_count;

            repoDiv.appendChild(repoName);
            repoDiv.appendChild(forkDiv);
            repoDiv.appendChild(watcherDiv);
            repoDiv.appendChild(starDiv);

            list.appendChild(repoDiv);
            
            console.log(item.full_name)
          })
        })
    )
    .catch(error => console.log(error));
}

function createElement(payload, success, fail) {
  let element;
  if (payload.type) {
    element = document.createElement(payload.type);
  } else {
    console.log("Element type is not supported");
    return undefined;
  }

  if (Array.isArray(payload.attributes)) {
    payload.attributes.forEach(attribute => {
      element.setAttribute(attribute.key, attribute.value);
    });
  }

  if (payload.classList) {
    element.classList = payload.classList.join(" ");
  }
  element.innerText = payload.innerText ? payload.innerText : "";

  if (payload.parent) {
    payload.parent.appendChild(element);
  }
  return element;
}

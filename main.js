"use strict"

let header = document.querySelector("h1");
header.innerHTML="My Github Profile";




let container = document.createElement('div');

axios.get("https://api.github.com/users/AronWinston?access_token=ea1e16998e31da6948773e59562827c5be997cf3")
.then(response => {
    let data = response.data;
    
    // let container = document.createElement('div');
    let avatar = document.createElement('img');
    let repnum = document.createElement('p');
    let anchor = document.createElement('a');

    avatar.src += data.avatar_url;
    repnum.innerHTML += data.public_repos;
    anchor.innerHTML = `<strong>"visit my github"</strong>`;
    anchor.href = data.html_url;

    document.body.appendChild(container);
    container.appendChild(avatar);
    container.appendChild(repnum);
    container.appendChild(anchor);
});

axios.get("https://api.github.com/users/AronWinston/repos")
.then(res => {
    let repos=res.data;

    for(let i = 0; i<repos.length; ++i){

        let projects = document.createElement('a');
        projects.innerHTML += "<br/>";
        projects.innerHTML += "<br/>";
        projects.innerHTML += `<li><em>Repository Name: ${repos[i].name}</em></li>`;
        projects.href += repos[i].html_url;
        

        container.appendChild(projects);



    }







});
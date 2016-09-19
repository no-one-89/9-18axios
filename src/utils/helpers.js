import axios from 'axios';

function searchGit(name){
  let add = `https://api.github.com/users/${name}`
   return axios.get(add)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
export { searchGit }

function getJson(){
  let add = `https://raw.githubusercontent.com/no-one-89/demodata/master/card.json`
   return axios.get(add)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
export { getJson }

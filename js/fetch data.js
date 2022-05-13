function fetchData(){
fetch('https://reqres.in/api/users')
  .then(response => {
    if(!response.ok){
     throw Error("ERROR");
    }
    return response.json();
})
  .then(data => {
      console.log(data.data);
      const hml=data.data
      .map(user=>
        {
            return `
            <div class="new">
            <p><img src=${user.avatar} alt=${user.first_name}></p>
            <p>ID: ${user.id}</p>
            <p>First Name: ${user.first_name}</p>
            <p>Last Name: ${user.last_name}</p>
            <p>Email ID: ${user.email}</p>
            </div>
            
            
        `;
        })
        .join(' ');
      console.log(hml);
      document
      .querySelector('#note').
      insertAdjacentHTML('afterbegin',hml);
})
  .catch(error => {
      console.log(error);
});
}
fetchData();
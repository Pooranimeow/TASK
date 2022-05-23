function reDirect(){
  const tech=user.id;  
  const base_url="https://api.themoviedb.org/3/movie/";
  const base2_url="?api_key=0d48df695a8e8902e4aa3437ac7a6091";
  const items=base_url.concat(tech,base2_url);
    
  fetch(items)
    .then(response => {
      if(!response.ok){
       throw Error("ERROR");
      }
      return response.json();
  })
    .then(datas => {
      console.log(datas);
      let text1 = "http://image.tmdb.org/t/p/w200/";
      let text2 = datas.poster_path;
      let result = text1.concat(text2);
      let text3 = datas.backdrop_path;
      let results = text1.concat(text3);

      const cont=       
             `<div class="new">
              <p><img src=${results} alt="" class="big"></p>
             <div class="new1">
             <p><img src=${result} alt=""class="bigs"></p>
             </div>
             <div class="new2">
             <p style="color:red; font-size:30px; font-weight:bolder;"> ${datas.original_title}</p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Movie ID:<span style="color:blue; font-size:16px;"> ${datas.id}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">IMDB ID:<span style="color:blue; font-size:16px;"> ${datas.imdb_id}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Movie Release Date:<span style="color:blue; font-size:16px;"> ${datas.release_date}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Tag line:<span style="color:blue; font-size:16px;"> ${datas.tagline}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Status:<span style="color:blue; font-size:16px;"> ${datas.status}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Language:<span style="color:blue; font-size:16px;"> ${datas.original_language}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Popularity:<span style="color:blue; font-size:16px;"> ${datas.popularity}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Overview:<span style="color:blue; font-size:16px;"> ${datas.overview}</span></p>
             <p style="color:black; font-size:16px; font-weight:bolder;">Movie Budget:<span style="color:blue; font-size:16px;">${datas.budget}</p>
              <p style="color:black; font-size:16px; font-weight:bolder;">Vote Average:<span style="color:blue; font-size:16px;"> ${datas.vote_average}</span></p>
              <p style="color:black; font-size:16px; font-weight:bolder;">Vote Count:<span style="color:blue; font-size:16px;"> ${datas.vote_count}</span></p>
              <p style="color:black; font-size:16px; font-weight:bolder;">Revenue:<span style="color:blue; font-size:16px;"> ${datas.revenue}</span></p>
              <p style="color:black; font-size:16px; font-weight:bolder;">Run time:<span style="color:blue; font-size:16px;"> ${datas.runtime}</span></p>
              </div>
              </div>
          `;
      
  })
    .catch(error => {
        console.log(error);
  });
  }










function fetchData(){
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0d48df695a8e8902e4aa3437ac7a6091')
      .then(response => {
        if(!response.ok){
         throw Error("ERROR");
        }
        return response.json();
    })
      .then(data => {
        console.log(data);
      

        let text1 = "http://image.tmdb.org/t/p/w200/";
        
        let hml=data.results.map(user=>      
            {
              var tech=user.id;
              console.log(tech);
            let text2 = user.poster_path;
            let result = text1.concat(text2);
                return `
                <div class="new">
                <p><button onclick="reDirect();"><img src=${result} alt=""></button></p>
                <p style="color:red; font-size:20px; font-weight:bold;">${user.original_title}</p>
                <p style="color:red; font-size:14px; font-weight:bold;">Movie ID:<span style="color:blue; font-size:14px;"> ${user.id}</span></p>
              
                </div>
            `;
            }).join(' ');

        console.log(hml);
        document.querySelector('#note').insertAdjacentHTML('afterbegin',hml);
    })
      .catch(error => {
          console.log(error);
    });
    }
    fetchData();


  
    

    
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/clases', (req, res, next) => {

  console.log('Llega aquí');

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query= ';

  let consultaBuena = 'prefix%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%20prefix%20%3A%20%3Chttp%3A%2F%2Fwww.grupo7.semanticweb.uniandes.edu.co%2Fcurso%2Farticles%2F%3E%20select%20distinct%20%3Fclase%20where%20%7B%20%3Finstancia%20rdf%3Atype%20%3Fclase.%20filter%28%20strstarts%28str%28%3Fclase%29%2Cstr%28%3A%29%29%20%29%20%20%7D';

  

  let finalUrl2 = url + consultaBuena;
  console.log(finalUrl2);

  fetch(finalUrl2, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

  }).then((response) => {
    console.log('Respuestaaaaaaaaaaaaaa');
    //console.log(response);
    
    return response.json();
  
  }).then((json) => {
    console.log('Jsoooooooooooooooooon');
    console.log(json);
    
    res.status(200).json(json);

  })
    .catch((error) => console.log(error));

});

module.exports = router;
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


//GET todas las clases
router.get('/clases', (req, res, next) => {

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query= ';

  let consultaBuena = 'prefix%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%20prefix%20%3A%20%3Chttp%3A%2F%2Fwww.grupo7.semanticweb.uniandes.edu.co%2Fcurso%2Farticles%2F%3E%20select%20distinct%20%3Fclase%20where%20%7B%20%3Finstancia%20rdf%3Atype%20%3Fclase.%20filter%28%20strstarts%28str%28%3Fclase%29%2Cstr%28%3A%29%29%20%29%20%20%7D%20limit%2010000';

  

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



//GET instancias de la clase específica
router.get('/instanciasClase/:idClase', (req, res, next) => {

  const uriClaseEncoded = req.params.idClase;
  const uriClaseDecoded = decodeURIComponent(uriClaseEncoded);

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query= ';

  let consulta = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX : <http://www.grupo7.semanticweb.uniandes.edu.co/curso/articles/> SELECT ?instancia WHERE{ ?instancia rdf:type <' + uriClaseDecoded + '>. } LIMIT 10000';

  let consultaEncoded = encodeURIComponent(consulta);

  let finalUrl = url + consultaEncoded;
  console.log(finalUrl);

  fetch(finalUrl, {
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


//GET todas las propiedades
router.get('/propiedades', (req, res, next) => {

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query= ';

  let consulta = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX : <http://www.grupo7.semanticweb.uniandes.edu.co/curso/articles/> SELECT DISTINCT ?propiedad WHERE{ ?instancia ?propiedad ?objeto. FILTER( STRSTARTS(STR(?propiedad),str(:)) ) }	LIMIT 10000';
  let consultaEncoded = encodeURIComponent(consulta);

  let finalUrl = url + consultaEncoded;
  console.log(finalUrl);

  fetch(finalUrl, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

  }).then((response) => {
    console.log('Respuestaaaaaaaaaaaaaa');
    console.log(response);
    
    return response.json();
  
  }).then((json) => {
    console.log('Jsoooooooooooooooooon');
    console.log(json);
    
    res.status(200).json(json);

  })
    .catch((error) => console.log(error));

});


//GET suejetos de la propiedad específica
router.get('/instanciasPropiedad/:idPropiedad', (req, res, next) => {

  const uriPropiedadEncoded = req.params.idPropiedad;
  const uriPropiedadDecoded = decodeURIComponent(uriPropiedadEncoded);

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query= ';

  let consulta = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX : <http://www.grupo7.semanticweb.uniandes.edu.co/curso/articles/> SELECT DISTINCT ?sujeto WHERE{ ?sujeto <' + uriPropiedadDecoded + '> ?objeto. } LIMIT 10000';

  let consultaEncoded = encodeURIComponent(consulta);

  let finalUrl = url + consultaEncoded;
  console.log(finalUrl);

  fetch(finalUrl, {
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


//GET información de la instancia específica
router.get('/infoInstancia/:idInstancia', (req, res, next) => {

  const uriInstanciaEncoded = req.params.idInstancia;
  const uriInstanciaDecoded = decodeURIComponent(uriInstanciaEncoded);

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query= ';

  let consulta = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX : <http://www.grupo7.semanticweb.uniandes.edu.co/curso/articles/> SELECT * WHERE{ <' + uriInstanciaDecoded + '> ?propiedad ?objeto. } LIMIT 10000';

  let consultaEncoded = encodeURIComponent(consulta);

  let finalUrl = url + consultaEncoded;
  console.log(finalUrl);

  fetch(finalUrl, {
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

router.get('/citationGraph', (req, res, next)=>{

  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query=';
  let dict = {};

  let consulta = 'PREFIX%20%3A%20%3Chttp%3A%2F%2Fwww.grupo7.semanticweb.uniandes.edu.co%2Fcurso%2Farticles%2F%3E%20select%20distinct%20%3Fsource%20%3Ftarget%20%3FsourceName%20%3FtargetName%20%3FinstitutionSourceName%20%3FinstitutionTargetName%20where%20%7B%20%20%3Fsource%20%3AreferenceToAuthor%20%3Ftarget%20.%20%3Fsource%20%3AaffiliatedTo%20%3FinstitutionSource%20.%3Ftarget%20%3AaffiliatedTo%20%3FinstitutionTarget%20.%20%3FinstitutionSource%20%3ApublisherName%20%3FinstitutionSourceName%20.%20%3FinstitutionTarget%20%3ApublisherName%20%3FinstitutionTargetName%20.%20%3Fsource%20%3AfullName%20%3FsourceName%20.%20%3Ftarget%20%3AfullName%20%3FtargetName%20%7D%20LIMIT%20100';
  let urlCompleta = url + consulta;
  let nodes = [];
  let links = [];
  fetch(urlCompleta, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then((response)=>{
    return response.json();
  }).then((json)=>{
    let queryResults = json.results.bindings;
    let link;
    let node;
    for(let i = 0; i < queryResults.length; i++){
      link = {
        "source": queryResults[i].source.value,
        "target": queryResults[i].target.value
      }
      links.push(link);
      if(dict[queryResults[i].source.value] === undefined){
        node = {
          "id": queryResults[i].source.value,
          "name": queryResults[i].sourceName.value,
          "institution": queryResults[i].institutionSourceName.value
        }
        nodes.push(node);
        dict[queryResults[i].source.value] = queryResults[i].sourceName.value;
      }
      if(dict[queryResults[i].target.value] === undefined){
        node = {
          "id": queryResults[i].target.value,
          "name": queryResults[i].targetName.value,
          "institution": queryResults[i].institutionTargetName.value
        }
        nodes.push(node);
        dict[queryResults[i].target.value] = queryResults[i].targetName.value;
      }
    }
    let data = {
      "nodes": nodes,
      "links": links
    }
    res.status(200).json(data);
  });
});

router.get('/coauthoryGraph', (req, res, next)=>{
  let url = 'http://172.24.101.58:8080/repositories/grupo07repo?query=';
  let dict = {};

  let consulta = 'PREFIX%20%3A%20%3Chttp%3A%2F%2Fwww.grupo7.semanticweb.uniandes.edu.co%2Fcurso%2Farticles%2F%3E%20select%20distinct%20%3Fsource%20%3Ftarget%20%3FsourceName%20%3FtargetName%20%3FinstitutionSourceName%20%3FinstitutionTargetName%20where%20%7B%20%20%3Fsource%20%3AcoauthorWith%20%3Ftarget%20.%20%3Fsource%20%3AaffiliatedTo%20%3FinstitutionSource%20.%20%3Ftarget%20%3AaffiliatedTo%20%3FinstitutionTarget%20.%20%3FinstitutionSource%20%3ApublisherName%20%3FinstitutionSourceName%20.%20%3FinstitutionTarget%20%3ApublisherName%20%3FinstitutionTargetName%20.%20%3Fsource%20%3AfullName%20%3FsourceName%20.%20%3Ftarget%20%3AfullName%20%3FtargetName%7D%20LIMIT%20100';
  let urlCompleta = url + consulta;
  let nodes = [];
  let links = [];

  fetch(urlCompleta,{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then((response)=>{
    return response.json();
  }).then((json)=>{
    let queryResults = json.results.bindings;
    let link;
    let node;
    for(let i = 0; i < queryResults.length; i++){
      link = {
        "source": queryResults[i].source.value,
        "target": queryResults[i].target.value
      }
      links.push(link);
      if(dict[queryResults[i].source.value] === undefined){
        node = {
          "id": queryResults[i].source.value,
          "name": queryResults[i].sourceName.value,
          "institution": queryResults[i].institutionSourceName.value
        }
        nodes.push(node);
        dict[queryResults[i].source.value] = queryResults[i].sourceName.value;
      }
      if(dict[queryResults[i].target.value] === undefined){
        node = {
          "id": queryResults[i].target.value,
          "name": queryResults[i].targetName.value,
          "institution": queryResults[i].institutionTargetName.value
        }
        nodes.push(node);
        dict[queryResults[i].target.value] = queryResults[i].targetName.value;
      }
    }
    let data = {
      "nodes": nodes,
      "links": links
    }
    res.status(200).json(data);
  })
});



module.exports = router;
import Planeta from './Planeta.js';


/*---- funciones -----*/
class lity{
  constructor(){
    let ids = [...document.querySelectorAll("#id")].map(obj => parseInt(obj.value));
    let names = [...document.querySelectorAll("#nombre")].map(obj => obj.value);
    let distances = [...document.querySelectorAll("#distancia")].map(obj => parseFloat(obj.value));
    let sizes = [...document.querySelectorAll("#tamanio")].map(obj => parseFloat(obj.value));
    this.objPlanetas = [];
    this.setPlaneta(ids, names, distances, sizes);
  }

  setPlaneta(ids, names, distances, sizes){
    this.objPlanetas = [];

    for(let i=0; i<ids.length; ++i){
      if(isNaN(ids[i])) continue;

      let currPlanet = new Planeta(names[i]);
      currPlanet.set_Data(ids[i], distances[i], sizes[i]);
      this.objPlanetas.push(currPlanet);
      currPlanet.print();
    }
  }

  send(){
    if(!objPlanetas.length){
      Swal.fire("Aun no has enviado los datos");
      return false;
    }

    return true;
  }

  sort_by_id(){
    // if(!this.send()) return;
  
    let tmpId = this.objPlanetas.map(e => [e.id, e]);
    tmpId.sort((a, b) =>{
      return a[0] - b[0];
    });

    tmpId.forEach( (e , i)=> {
      this.objPlanetas[i] = e[1];
    });

    this.putInformation();
  }

  

  //en construccion:

  // sort_by_name(){
  //   let tmpName = this.objPlanetas.map(e => [e.name, e]);
  //   tmpName.sort((a, b) =>{
  //     return a[0] - b[0];
  //   });

  //   tmpId.forEach( (e , i)=> {
  //     this.objPlanetas[i] = e[1];
  //   });

  //   this.putInformation();
  // }


  
  putInformation(){
    /*TODO: ponerlo en matriz*/
  
    let ids = [...document.querySelectorAll("#id")];
    let names = [...document.querySelectorAll("#nombre")];
    let distances = [...document.querySelectorAll("#distancia")];
    let sizes = [...document.querySelectorAll("#tamanio")];
  
    this.objPlanetas.forEach((planet, index) => {
      let currData = planet.get_Data();
      ids[index].value = currData[0];
      names[index].value = currData[1];
      distances[index].value = currData[2];
      sizes[index].value = currData[3];
    });
  }
  
}

let AH = "FLAG";

document.getElementById("submit").addEventListener('click', () =>{
  AH = new lity();
  alert("creado");
});

document.getElementById("ordenar").addEventListener('click', () =>{
  if(AH == "FLAG") alert("no ha enviado los datos");
  else{
    AH.sort_by_id();


  }

});




/*
- ordenar por id
- ordenar por nombre
- fitrar
- buscar por nombre

*/

 
  const sort=[
    {
      name: "nanadkishor",
      age: 105,

    },
    {
      name: "munna",
      age: 82,

    },
    {
      name: "mohan",
      age: 78,
    },
    {
      name: "kamal",
      age: 78,

    },
    {
      name: "jagdish",
      age: 78,

    },
    {
      name: "harish",
      age: 78,

    },
    {
      name: "hariom",
      age: 78,
    },
    {
      name: "tejas",
      age: 78,

    },
    {
      name: "koushal",
      age: 78,

    },
    {
      name: "goutam",
      age: 78,

    },
    {
      name: "raman",
      age: 78,

    },
    {
      name: "rinku",
      age: 78,
    },
    {
      name: "aman",
      age: 78,

    },
    {
      name: "gagan",
      age: 78,

    },
    {
      name: "rahul",
      age: 78,

    },
    {
      name: "shyam",
      age: 78,

    },
    {
      name: "rajesh",
      age: 78,
    },
    {
        name: "Harkala yadav",
        age: 55

    },
    {
      name: "rahul",
      age: 78,

    }
   
  
]  

    function ascending() { 
      let temp;
      for(let k= (sort.length-1);k>0;k--){
          for(let i=0;i<k;i++){
              let j=i+1;
              if(sort[j].age<sort[i].age){
                  // console.log(sort[j].age,sort[i].age)
                  temp=sort[j]
                  sort[j]=sort[i]
                  sort[i]=temp
              }
          }
      }
      console.log(sort)
  }

  ascending()
  
// function descending(){
//   let temp;
//   for(let k= (sort.length-1);k>0;k--){
//       for(let i=0;i<k;i++){
//           let j=i+1;
//           if(sort[j].age>sort[i].age){
//               // console.log(sort[j].age,sort[i].age)
//               temp=sort[j]
//               sort[j]=sort[i]
//               sort[i]=temp
//           }
//       }
//   }
//   console.log(sort)
//  }      


export default sort;
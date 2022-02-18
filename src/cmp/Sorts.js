import Button from 'react-bootstrap/Button';
import {ListGroup,Card} from 'react-bootstrap'
 
 
 const Sorts = () => {  
  const data = [
     {
      name: "nanadkishor",
      age: 105,
      wifename: "gayatri",
      mothername: "rani",
      sonname: "harmit",
      daughtername: "Krishna ",
      fathername: "narayan",
    },
     {
      name: "munna",
      age: 82,
      wifename: "Narayani",
      fathername: "nandkishor",
      mothername: "Nisha",
      sonname: "Govind",
      daughtername: "Kshma",
      daughter: "Kshma Rekha Rama",
    },
     {
      name: "Ram",
      age: 78,
      wifename: "rama",
      fathername: "munna",
      mothername: "jasmin",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    {
      name: "mohan",
      age: 78,
      wifename: "kavya",
      fathername: "munna",
      mothername: "shanti",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "kamal",
      age: 78,
      wifename: "babli",
      fathername: "munna",
      mothername: "priyanka",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "jagdish",
      age: 78,
      wifename: "manju",
      fathername: "Ram",
      mothername: "lakshmi",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "harish",
      age: 78,
      wifename: "sangita",
      fathername: "kamal",
      mothername: "rajni",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "hariom",
      age: 78,
      wifename: "sheetal",
      fathername: "kamal",
      mothername: "tejaswini",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    {
      name: "tejas",
      age: 78,
      wifename: "amrita",
      fathername: "nandni",
      mothername: "Neha",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "koushal",
      age: 78,
      wifename: "akansha",
      fathername: "tejas",
      mothername: "akira",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "goutam",
      age: 78,
      wifename: "meena",
      fathername: "tejas",
      mothername: "chama",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },

    {
      name: "raman",
      age: 78,
      wifename: "chanchu",
      fathername: "goutam",
      mothername: "minakshi",
      son: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "rinku",
      age: 78,
      wifename: "himani",
      fathername: "goutam",
      mothername: "himanshi",
      son: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughter: "Shila",
    },
   {
      name: "aman",
      age: 78,
      wifename: "nitu",
      fathername: "goutam",
      mothername: "ranu",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughter: "Shila",
    },
    {
      name: "gagan",
      age: 78,
      wifename: "teena",
      fathername: "goutam",
      mothername: "sangita",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "rahul",
      age: 78,
      wifename: "reena",
      fathername: "gagan",
      mothername: "heena",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "shyam",
      age: 78,
      wifename: "Narayani",
      fathername: "gagan",
      mothername: "bhuri",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "rajesh",
      age: 78,
      wifename: "meenu",
      fathername: "tejas",
      mothername: "manisha",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
     {
      name: "rahul",
      age: 78,
      wifename: "rashmi",
      fathername: "Phoolchand",
      mothername: "rishika",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
  ];
  
  
    return ( 
      
      <div className="users"> 
      <h1 style={{textAlign: "center"}}> FamilyTree data</h1>
        {data.map((user) => ( 
          <> 
          {/* <div className="user">{user.id}</div>  
          <div className="user">{user.name}</div>     */}
         
          <Card bg="primary" style={{  width: '18rem',display: 'inline-block' , margin: '10px' ,marginTop: "10px"}} > 
          <Card.Title style={{textAlign: "center"}}>{user.name}</Card.Title>
  <ListGroup variant="flush">
    <ListGroup.Item> name is  {user.name}</ListGroup.Item>
    <ListGroup.Item> age is {user.age}</ListGroup.Item> 
    <ListGroup.Item> mother name is {user.mothername}</ListGroup.Item> 
    <ListGroup.Item> wife name is {user.wifename}</ListGroup.Item> 
    <ListGroup.Item> father name is {user.fathername}</ListGroup.Item>
    <ListGroup.Item> son name is {user.sonname}</ListGroup.Item>
    <ListGroup.Item> daughter name is {user.daughtername}</ListGroup.Item>
  </ListGroup>
  {/* <Button> submit </Button> */}
</Card> 

         
          {/* <div class="card border-primary mb-3" style="max-width: 18rem;"> */}
  {/* <div class="card-header">{user.id}</div>
  <div class="card-body text-primary">
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{user.body}</p>
  </div>
</div> */} 
          </>
        ))}
      </div>
    );
  }; 

  export default Sorts;
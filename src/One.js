const sort=[
    {
        name: "Bondu lal yadav",
        age: 68

    },
    {
        name: "Rambhagas yadav",
        age: 70

    },
    {
        name: "Parashram yadav",
        age: 62

    },
    {
        name: "Bharat yadav",
        age: 58

    },
    {
        name: "Santosh yadav",
        age: 48

    },
    {
        name: "Vidhya yadav",
        age: 53

    },
    {
        name: "Krishan yadav",
        age: 56

    },
    {
        name: "Rinku yadav",
        age: 38

    },
    {
        name: "Ganesh yadav",
        age: 36

    },
    {
        name: "Mangla yadav",
        age: 33

    },
    {
        name: "Mohan yadav",
        age: 32

    },
    {
        name: "Rohit yadav",
        age: 29

    },
    {
        name: "Pranjal yadav",
        age: 22

    },
    {
        name: "Riya yadav",
        age: 19

    },
    {
        name: "Rishal yadav",
        age: 15

    },
    {
        name: "Keshav yadav",
        age: 13

    },
    {
        name: "Champi bai yadav",
        age: 67

    },
    {
        name: "Harkala yadav",
        age: 55

    },
    {
        name: "Harkala yadav",
        age: 63

    },
    {
        name: "Gayatri yadav",
        age: 57

    },
    {
        name: "Binita yadav",
        age: 53

    },
    {
        name: "Rekha yadav",
        age: 42

    },
    {
        name: "Swara yadav",
        age: 1

    },
    {
        name: "Mansi yadav",
        age: 6

    }
]  



const ascending=function(){
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
ascending();


const descending=function(){
    let temp;
    for(let k= (sort.length-1);k>0;k--){
        for(let i=0;i<k;i++){
            let j=i+1;
            if(sort[j].age>sort[i].age){
                // console.log(sort[j].age,sort[i].age)
                temp=sort[j]
                sort[j]=sort[i]
                sort[i]=temp
            }
        }
    }
    console.log(sort)
}
descending();

// console.log(sort); 
// rafce



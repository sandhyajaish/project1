import React from "react";
import "./Sort.css";
function Sort() {
  function sorting() {
    const sort = [
      {
        name: "nanadkishor",
        age: 105,
      },
      {
        name: "munna",
        age: 82,
      },
      {
        name: "Ram",
        age: 78,
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
        name: "rahul",
        age: 78,
      },
    ]; 

    const ascending = function () {
      let temp;
      for (let k = sort.length - 1; k > 0; k--) {
        for (let i = 0; i < k; i++) {
          let j = i + 1;
          if (sort[j].age < sort[i].age) {
            // console.log(sort[j].age,sort[i].age)
            temp = sort[j];
            sort[j] = sort[i];
            sort[i] = temp;
          }
        }
      }
      // console.log(sort)
    };
    ascending();

    const descending = function () {
      let temp;
      for (let k = sort.length - 1; k > 0; k--) {
        for (let i = 0; i < k; i++) {
          let j = i + 1;
          if (sort[j].age > sort[i].age) {
            // console.log(sort[j].age,sort[i].age)
            temp = sort[j];
            sort[j] = sort[i];
            sort[i] = temp;
          }
        }
      }
      console.log(sort);
    };
    // descending();

    // console.log(sort);

    function datadisplay(sort) {
      let tabledata = "";
      let data;
      sort.forEach(function (body) {
        console.log(body.name);
        console.log(body.age);
        data = `<tr>
                <td>${body.name}</td>
                <td>${body.age}</td>
                </tr>`;
        tabledata += data;
      });
      document.getElementById("body").innerHTML = tabledata;
    }
    // datadisplay(body);

    let tabledata = "";
    let data;
    sort.forEach((data) => {
      console.log(data.name);
      console.log(data.age);
      data = `<tr>
                <td>${data.name}</td>
                <td>${data.age}</td>
                </tr>`;
      tabledata += data;
    });

    document.getElementById("body").innerHTML = tabledata;
  }

  return (
    <div>
      <div id="maindiv">
        <div class="table">
          <div className="parent"> </div>
          <h5 style={{ color: "navy", fontSize: "20px" }}>
            Data in Ascending order
          </h5>
          <table
            border="3"
            style={{ padding: "20px", backgroundColor: "navy" , position: "relative" , right:"60px" , top: "0px" }}
          >
            <thead id="head">
              <tr>
                <th style={{ padding: "20px", backgroundColor: "navy" }}>
                  Name
                </th>
                <th style={{ padding: "20px", backgroundColor: "navy" }}>
                  Age
                </th>
              </tr>
            </thead>
            <tbody id="body"></tbody>
          </table>
          <button
            style={{
              width: "200px",
              height: "50px",
              position: "relative" , right:"0px" , top: "0px",
              marginTop: "20px"
            }}
            className="btn btn-primary"
            onClick={sorting}
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sort;

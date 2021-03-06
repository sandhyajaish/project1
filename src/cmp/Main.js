import React, { useState } from "react";
import Nav from './Nav'
// import React from 'react';
import { Link } from "react-router-dom";
import "./Main.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import Box from "@material-ui/core/Box";
// import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Typography from '@material-ui/coree/Typography';
import InputBase from "@material-ui/core/InputBase";
// import MenuIcon from '@material-ui/core/Menu';
// // import SearchIcon from '@material-ui/core/searchIcon';
// import SearchIcon from '@material-ui/core/Search';
// var resultData; 

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    ???
  </Box>
);

const Main = () => {
  function detail() {
    Swal.fire({
      title: "Details",
      text: ` ${data} fathers name is ${familyDetail[data].fathername} mother name is ${familyDetail[data].mothername} son  name is ${familyDetail[data].sonname}`,

      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    console.log("more details");
  }

  const familyDetail = {
    Nandkishor: {
      name: "nanadkishor",
      age: 105,
      wifename: "gayatri",
      mothername: "rani",
      sonname: "",
      daughter: "Krishna ",
      fathername: "narayan",
    },
    munna: {
      name: "munna",
      age: 82,
      wifename: "Narayani",
      fathername: "nandkishor",
      mothername: "Nisha",
      sonname: "Govind",
      daughtername: "Kshma",
      daughter: "Kshma Rekha Rama",
    },
    Ram: {
      name: "Ram",
      age: 78,
      wifename: "rama",
      fathername: "munna",
      mothername: "jasmin",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    mohan: {
      name: "mohan",
      age: 78,
      wifename: "kavya",
      fathername: "munna",
      mothername: "shanti",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    kamal: {
      name: "kamal",
      age: 78,
      wifename: "babli",
      fathername: "munna",
      mothername: "priyanka",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    jagdish: {
      name: "jagdish",
      age: 78,
      wifename: "manju",
      fathername: "Ram",
      mothername: "lakshmi",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    harish: {
      name: "harish",
      age: 78,
      wifename: "sangita",
      fathername: "kamal",
      mothername: "rajni",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    hariom: {
      name: "hariom",
      age: 78,
      wifename: "sheetal",
      fathername: "kamal",
      mothername: "tejaswini",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    tejas: {
      name: "tejas",
      age: 78,
      wifename: "amrita",
      fathername: "nandni",
      mothername: "Neha",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    koushal: {
      name: "koushal",
      age: 78,
      wifename: "akansha",
      fathername: "tejas",
      mothername: "akira",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    goutam: {
      name: "goutam",
      age: 78,
      wifename: "meena",
      fathername: "tejas",
      mothername: "chama",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },

    raman: {
      name: "raman",
      age: 78,
      wifename: "chanchu",
      fathername: "goutam",
      mothername: "minakshi",
      son: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    rinku: {
      name: "rinku",
      age: 78,
      wifename: "himani",
      fathername: "goutam",
      mothername: "himanshi",
      son: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughter: "Shila",
    },
    aman: {
      name: "aman",
      age: 78,
      wifename: "nitu",
      fathername: "goutam",
      mothername: "ranu",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughter: "Shila",
    },
    gagan: {
      name: "gagan",
      age: 78,
      wifename: "teena",
      fathername: "goutam",
      mothername: "sangita",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    rahul: {
      name: "rahul",
      age: 78,
      wifename: "reena",
      fathername: "gagan",
      mothername: "heena",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    shyam: {
      name: "shyam",
      age: 78,
      wifename: "Narayani",
      fathername: "gagan",
      mothername: "bhuri",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    rajesh: {
      name: "rajesh",
      age: 78,
      wifename: "meenu",
      fathername: "tejas",
      mothername: "manisha",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
    rahul: {
      name: "rahul",
      age: 78,
      wifename: "rashmi",
      fathername: "Phoolchand",
      mothername: "rishika",
      sonname: "Jay Prakash",
      daughterInLaw: "Aasha Janki",
      daughtername: "Shila",
    },
  };

  const [data, setdata] = useState("");

  const classes = useStyles();
  if (familyDetail[data]) {
    console.log("got it");
  }

  return (
    <div>   
    <Nav/> 
    {/* <h1 style={{textAlign: "center"}}> Family Tree</h1> */}
    {/* button for redirecting */}   
    <div id="bot">
        {/* <Link to="/sort" id="om" className="btn btn-primary">
          {" "}
          ACENDING ORDER
        </Link> */}
        {/* <Link className="btn btn-primary"> DECENDING ORDER </Link> */}
      </div>
      <div>
        <div className="search">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="searc"
              value={data}
              onChange={(e) => {
                setdata(e.target.value);
              }}
              id="filled-basic"
              label="Filled"
              variant="filled"
            />

            {familyDetail[data] ? (
              <div>
                <h5 className="mt-4"></h5>

                <div class="card text-center">
                  <div class="card-header">Featured</div>
                  <div class="card-body">
                    <h5 class="card-title">parent Name </h5>
                    <p class="card-text">
                      {data} fathers name is {familyDetail[data].fathername}
                    </p>
                    <a href="#" class="btn btn-primary" onClick={detail}>
                      more details{" "}
                    </a>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            ) : (
              "not found"
            )}
            {/* sandhya */}
          </form>
        </div>
      </div>

      <div className="tree">
        {/* <ul class="trees">
     
                      <li>{/* <span>{familyDetail.m.name}</span> */}
        <div className="parent">
          <div class="tree">
            <ul>
              <li>
                <a href="#">{familyDetail.Nandkishor.name}</a>
                <ul>
                  <li>
                    <a href="#">{familyDetail.munna.name}</a>
                    <ul>
                      <li>
                        <a href="#">{familyDetail.Ram.name}</a>
                      </li>

                      <li>
                        <a href="#">{familyDetail.mohan.name}</a>
                      </li>
                      <li>
                        <a href="#"> {familyDetail.kamal.name}</a>
                        <ul>
                          <li>
                            <a href="#"> {familyDetail.harish.name}</a>
                          </li>

                          <li>
                            <a href="#"> {familyDetail.hariom.name}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#"> {familyDetail.tejas.name} </a>
                    <ul>
                      <li>
                        <a href="#">{familyDetail.koushal.name} </a>
                      </li>
                      <li>
                        <a href="#">{familyDetail.goutam.name} </a>
                        <ul>
                          <li>
                            <a href="#">{familyDetail.raman.name} </a>
                          </li>
                          <li>
                            <a href="#">{familyDetail.rinku.name} </a>
                          </li>
                          <li>
                            <a href="#">{familyDetail.aman.name} </a>
                          </li>
                          <li>
                            <a href="#">{familyDetail.gagan.name} </a>
                            <ul>
                              <li>
                                <a href="#">{familyDetail.rahul.name}</a>
                              </li>

                              <li>
                                <a href="#">{familyDetail.shyam.name}</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#"> {familyDetail.rajesh.name} </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Main;

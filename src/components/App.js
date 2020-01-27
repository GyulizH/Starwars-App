import React from "react";
import InputField from './InputField'
import Login from "./Login";
import SearchBar from "./SearchBar";
import axios from 'axios';
import ListItems from "./ListItems";

class App extends React.Component{
    state = {
        username:'',
        password:'',
        data:[]
    }
     listItems=this.state.data

    onInputSubmit=(input) => {
        console.log(this.state.username,input)
    }


    async componentDidMount() {
       const response = await this.fetchPeople()

    }

    //WItH FETCH, I could not find a way to add query params

     fetchPeople =  async () =>{
         await fetch("https://swapi.co/api/people")
            .then(response => {return response.json()})
            .then(data => {this.setState({data:data.results},() => {
                this.listItems=this.state.data
                }
            )
            })
      console.log(this.state.data)
    }

    onSearchSubmit = (term) => {
        let result = this.state.data.filter(person => person.name === term)
        console.log("hey",result)
        return result
    }

    //adding query params did not work
    // onSearchSubmit = async (term) => {
    //    await axios.get('https://swapi.co/api/people',{
    //         params: {query: term},
    //     })
    // }



    render(){
        return(
            <div>
              <Login/>
              <div>
                  <SearchBar onSubmit={this.onSearchSubmit}/>
              </div>
               <ListItems listItems={this.listItems}/>
            </div>

        )
    }
}

export default App
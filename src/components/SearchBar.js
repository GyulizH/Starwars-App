import React from "react";

class SearchBar extends React.Component{
   state = { term: ''}

    onFormSubmit =  event => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
       return(
           <div>
               <form onSubmit={this.onFormSubmit}>
                   <div>
                       <label>Starwars search</label>
                       <input type="text" value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}/>
                   </div>

               </form>
           </div>
       )
    }
}



export default SearchBar
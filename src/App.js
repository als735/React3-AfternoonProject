import React, { Component } from 'react';
import './App.css';
import data from './data'; 
import Header from './Header'; 
import Card from './Card'; 

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      data: data,  
      index: 0,
      addNew: false,
      edit: false,
      firstNameInput: '',
      lastNameInput: '',
      cityInput: '',
      countryInput: '',
      employerInput: '',
      titleInput: '',
      movieOneInput: '',
      movieTwoInput: '',
      movieThreeInput: '',
    }; 

    this.handleNext = this.handleNext.bind(this); 
    this.handlePrevious = this.handlePrevious.bind(this); 
    this.handleDelete = this.handleDelete.bind(this); 
    this.handleAdd = this.handleAdd.bind(this); 
    this.addData = this.addData.bind(this); 
    this.handleEdit = this.handleEdit.bind(this); 

  }

handleNext() {
  if(this.state.index < this.state.data.length-1){
    this.setState({
      index : this.state.index+1 
    })
  }

}

handlePrevious() {
  if(this.state.index > 0) {
    this.setState({
      index : this.state.index-1  
    })
  }
} 

handleEdit(){
  if (!this.state.edit) {
      this.setState({
          edit: true
      })
  } else {
      this.setState({
          edit: false
      })
  }
}

handleDelete(index) {
  let newArray = this.state.data.filter((e, i) => i != index) 
  if(index != this.state.data.length -1) {
    this.setState({
      data: newArray, 
    })
  } else {
    this.setState({
      data: newArray, 
      index: this.state.index-1 
    })
  }
}

handleAdd() {
  if (this.state.addNew === false) {
    this.setState({
      addNew: true 
    })
  } else {
    this.setState({
      addNew: false 
    })
  }
}

handleChange(e){
  this.setState({
      [e.target.name]: e.target.value,
  })
}

editData(index){

  let newData = this.state.data.map((e, i) => {if (i === index){return {
      id: this.state.index + 1,
      name: {first: this.state.firstNameInput, last: this.state.lastNameInput},
      city: this.state.cityInput,
      country: this.state.countryInput,
      employer: this.state.employerInput,
      title: this.state.titleInput,
      favoriteMovies: [this.state.movieOneInput, this.state.movieTwoInput, this.state.movieThreeInput],
  }} else {return data[i]}})
  this.setState({
      data: newData
  })
}


addData(){
debugger 
  this.setState({
      data: [...this.state.data, {
          id: this.state.data.length + 1,
          name: {first: this.state.firstNameInput, last: this.state.lastNameInput},
          city: this.state.cityInput,
          country: this.state.countryInput,
          employer: this.state.employerInput,
          title: this.state.titleInput,
          favoriteMovies: [this.state.movieOneInput, this.state.movieTwoInput, this.state.movieThreeInput],
      }]
  })
}

  render() {
     

  const addNewData = 
    this.state.addNew ?
    <div>
    <div>
        <input name='firstNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='First Name' />
        <input name='lastNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='Last Name' />
    </div>
    <div>
        <input name='cityInput' onChange={ (e) => this.handleChange( e ) } placeholder='City' />
        <input name='countryInput' onChange={ (e) => this.handleChange( e ) } placeholder='Country' />
    </div>
    <div>
        <input name='employerInput' onChange={ (e) => this.handleChange( e ) } placeholder='Employer' />
        <input name='titleInput' onChange={ (e) => this.handleChange( e ) } placeholder='Title' />
    </div>
    <div>
        <input name='movieOneInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 1' />
        <input name='movieTwoInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 2' />
        <input name='movieThreeInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 3' />
    </div>
    <button onClick={ this.addData }> Confirm </button>
</div>
  : <div></div>


  const editData = 
  this.state.edit ? 
  <div>
  <div>
      <input name='firstNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='First Name' />
      <input name='lastNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='Last Name' />
  </div>
  <div>
      <input name='cityInput' onChange={ (e) => this.handleChange( e ) } placeholder='City' />
      <input name='countryInput' onChange={ (e) => this.handleChange( e ) } placeholder='Country' />
      
  </div>
  <div>
      <input name='employerInput' onChange={ (e) => this.handleChange( e ) } placeholder='Employer' />
      <input name='titleInput' onChange={ (e) => this.handleChange( e ) } placeholder='Title' />
  </div>
  <div>
      <input name='movieOneInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 1' />
      <input name='movieTwoInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 2' />
      <input name='movieThreeInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 3' />
  </div>
  <button onClick={ this.editData }> Confirm </button>
  </div>

  : <div></div>

console.log(this.state.data)
    return (
      <div className="App">
        <Header/>
        <Card person={this.state.data[this.state.index]}datalength={this.state.data.length}/> 
      <div className="button-div">  
        <button className="previous" onClick={this.handlePrevious}>Previous</button>
        <button className="blue-button" onClick={this.handleEdit}>Edit</button>
        <button className="blue-button" onClick={ ()=> this.handleDelete(this.state.index)}> Delete </button>
        <button className="blue-button" onClick={this.handleAdd}>Add</button>
        <button className="next" onClick={this.handleNext}>Next</button>

     </div> 
     <div className='addDiv'>{ addNewData } </div>
     <div className='addDiv'> {editData}</div>

      </div>
    );
  }
}

export default App;

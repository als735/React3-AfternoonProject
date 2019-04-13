import React, {Component} from "react"; 

class Card extends Component {
    render() {
        return(
            <div className="card-box">
            <p className="num"> <b>{this.props.person.id}/{this.props.datalength} </b></p>
            <h1>{this.props.person.name.first} {this.props.person.name.last}</h1>
            <p> <b>From:</b> {this.props.person.city} {this.props.person.country}</p>
            <p><b>Job Title:</b> {this.props.person.title}</p>
            <p><b>Employer:</b> {this.props.person.employer}</p> 
            <br/>
            <p><b>Favorite Movies:</b> 
                <ol type="1">
                    <li>{this.props.person.favoriteMovies[0]} </li>
                    <li>{this.props.person.favoriteMovies[1]}  </li>
                    <li>{this.props.person.favoriteMovies[2]} </li>
                </ol>
            </p>
            </div>
           
        ) 
    }
}

export default Card 
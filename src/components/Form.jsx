import { Component } from "react";
import { nanoid } from "nanoid";


class Form extends Component{
    state = {
        lastname: "",
        surname: "",
        email: "",
        // cources: "",
        // agree: false,
    }

namID = nanoid(5)
surnameId = nanoid(5)
formID = nanoid(5)

handleSubmit = (evt) => {
    evt.preventDefault()
    const {lastname, surname, email, cources, agree} = this.state

    const data = {
        id:  String(Date.now()),
        lastname,
        surname,
        email,
        // cources,
    }

    this.props.onApp(data)
    // const data = {
    //     name: evt.currentTarget.elements.name.value,
    //     surname: evt.currentTarget.elements.surname.value,
    //     email: evt.currentTarget.elements.email.value,
    // }
    
    this.setState({
        lastname: "",
        surname: "",
        email: "",
        // cources: "",
        // agree: false,
    })
    // evt.currentTarget.reset()

    // console.log(evt.currentTarget.elements.name.value);
    // console.log(evt.currentTarget.elements.surname.value);
    // console.log(evt.currentTarget.elements.email.value);   
}

// handleName = (evt) => {
//     this.setState({
//         lastname: evt.target.value
//     })
// }

// handleSurname = (evt) => {
//     this.setState({
//         surname: evt.target.value
//     })
// }

// handleEmail = (evt) => {
//     this.setState({
//         email: evt.target.value
//     })
// }

handleChange = (evt) => {
    const {name, value} = evt.target

    this.setState({
        [name]: value,
    })
    
}

// handleCheck = (evt) => {
//     const {agree} = this.state

//     this.setState({
//         agree: !agree,
//     })
// }


    render(){
        const {lastname, surname, email, cources, agree} = this.state
        

        return(
            <>
                <form id={this.formID} onSubmit={this.handleSubmit}>
                    <label htmlFor={this.namID}> Введдіть імя </label>
                    <input id={this.namID} onChange={this.handleChange} value={lastname} type="text" name="lastname" placeholder="enter name"/>
                    <label htmlFor={this.surnameId}> Введдіть прізвище </label>
                    <input id={this.surnameId}  onChange={this.handleChange} value={surname} type="text" name="surname" placeholder="enter surname"/>
                    <input onChange={this.handleChange} value={email} type="email" name="email" placeholder="enter email"/>

                    {/* <label> HTML
                        <input onChange={this.handleChange} checked={cources === "html"} value="html" type="radio" name="cources" />
                    </label>

                    <label> CSS
                        <input onChange={this.handleChange} checked={cources === "css"} value="css" type="radio" name="cources" />
                    </label>

                    <label> REACT
                        <input onChange={this.handleChange} checked={cources === "react"} value="react" type="radio" name="cources" />
                    </label> */}

                    <input onChange={this.handleCheck} type="checkbox" name="" checked={agree}/>
                    <button type="submit">Відправити</button> {/* disabled={!agree}*/}
                </form>
            </>
        )
    }
}

export default Form
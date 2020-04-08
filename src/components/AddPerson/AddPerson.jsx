import React, {Component} from 'react';

class AddPerson extends Component {
    state = { 
        name: "",
    }

    handleChange = e => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.name, this.props.role);  {/*handleAdd is writen on app.js so need to pass handleAdd as a prop */}
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    required
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
 
export default AddPerson;
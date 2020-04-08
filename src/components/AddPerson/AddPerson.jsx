import React, {Component} from 'react';

class AddPerson extends Component {
    state = { 
        teacherName: "" 
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
 
export default AddPerson;
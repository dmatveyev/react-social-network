import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    };

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div onDoubleClick={this.changeEditMode.bind(this)}>
                        <span>{this.props.status}</span>
                    </div> :
                    <div onBlur={this.changeEditMode.bind(this)} >
                        <input autoFocus={true} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }

    changeEditMode () {
        const mode = this.state.editMode;
        console.log(this.state.editMode);
        this.state.editMode = !mode;
        this.setState({
            editMode: !mode
            }
        );
        console.log(this.state.editMode);
    }
}

export default ProfileStatus;


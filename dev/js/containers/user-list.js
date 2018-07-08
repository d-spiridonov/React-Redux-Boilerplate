import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'

class UserList extends Component {

    createListItems() {
         return this.props.users.map((user) => {
             return (
                 <li
                  key={user.id}
                  onClick={() => this.props.selectUser(user)}
                  >
                  {user.first} {user.last}</li>
             )
         })
    }

    render() {
        return (
            <ul>
                 {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    selectUser: (user) => dispatch(selectUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
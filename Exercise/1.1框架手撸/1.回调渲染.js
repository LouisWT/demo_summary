// 组件如此使用
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>

import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser take in a username returns a promise
// which will resolve with that username's data.
class Twitter extends Component {
  // finish this
}

class Twitter extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }
  constructor() {
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    fetchUser(username).then((user) => {
      this.setState(user)
    })
  }
  render() {
    // children 可以是子组件也可以是函数也是可以是列表
    this.props.children(this.state.user);
  }
}
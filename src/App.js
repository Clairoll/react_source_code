import * as React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 123,
    }
  }

  cahnge = () => {
    this.setState({ num: 32 })
  }

  render() {
    const { num } = this.state
    return (
      <div>
        <div onClick={()=> this.cahnge()}>点击</div>
        {num}
      </div>
    )
  }
}
export default App;

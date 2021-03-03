import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMugs} from '../store/mug'
import {Link} from 'react-router-dom'

class AllMugs extends Component {
  componentDidMount() {
    this.props.loadMugs()
  }
  render() {
    console.log(this.props)
    if (this.props.mugs === undefined) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    return (
      <div>
        {this.props.mugs.map(mug => (
          <div key={mug.id}>
            <Link to={`/mugs/${mug.id}`}>
              <img alt={mug.name} src={mug.imageUrl} />
              <h2>{mug.name}</h2>
            </Link>
            <h2>${mug.price}</h2>
            <button type="button">Add To Cart</button>
            <form>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" />
            </form>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mugs: state.mugs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMugs: () => dispatch(fetchMugs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMugs)

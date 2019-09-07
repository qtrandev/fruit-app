import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'

const ItemList = ({ fruits, toggleItem }) => (
  <ul>
    {fruits.map(fruit =>
      <li key={fruit.desc}>{fruit.name}<br/><img src={fruit.image} alt=""/><br/>{fruit.desc}</li>
    )}
  </ul>
)

ItemList.propTypes = {
  fruits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  fruits: state.fruits
})

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(null)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
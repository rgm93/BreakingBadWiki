import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
    return <h2 className="card-paragrah">{props.title}</h2>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

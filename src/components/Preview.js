import React from 'react'
import { string } from 'prop-types'
import './Preview.css'
const Preview = ({ id, value }) => {
    return <div id={id} className="Preview full-size markdown-body box" dangerouslySetInnerHTML={{__html: value}}></div>
}

Preview.propTypes = {
    id: string,
    value: string
}

Preview.defaultProps = {
    value: ''
}

export default Preview
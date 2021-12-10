import React from 'react'

import { Form } from './styles'

const index = ({ query, handleChange, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={query} placeholder='search anime...'/>
            <button type="submit"><i className="fas fa-search"></i></button>
        </Form>
    )
}

export default index

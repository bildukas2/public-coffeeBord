import axios from 'axios'
import React, { Component } from 'react'

class AddCoffee extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            price: 0.00,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleAddCoffee = this.handleAddCoffee.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleAddCoffee (event) {
        event.preventDefault()

        const { history } = this.props

        const data = {
            title: this.state.title,
            image: this.state.image,
            price: this.state.price
        }
        //console.log(data)
        axios.post('/api/addCoffee', data)
            .then(response => {
                history.push('/')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    hasErrorFor (field) {
        return !!this.state.errors[field]
    }

    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
              <strong>{this.state.errors[field]}</strong>
            </span>
            )
        }
    }

    render () {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Add new Coffee</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleAddCoffee}>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Title</label>
                                        <input
                                            id='title'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
                                            name='title'
                                            value={this.state.title}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('title')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='image'>Image url</label>
                                        <input
                                            id='image'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('image') ? 'is-invalid' : ''}`}
                                            name='image'
                                            value={this.state.image}
                                            onChange={this.handleFieldChange}
                                        />
                                        <img src={this.state.image}  alt='demo image' width='50'/>

                                        {this.renderErrorFor('image')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='price'>Price</label>
                                        <input
                                            id='price'
                                            type='numeric'
                                            className={`form-control ${this.hasErrorFor('price') ? 'is-invalid' : ''}`}
                                            name='price'
                                            value={this.state.price}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('price')}
                                    </div>
                                    <button className='btn btn-primary'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCoffee

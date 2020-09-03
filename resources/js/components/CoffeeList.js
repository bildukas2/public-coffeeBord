import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CoffeeList extends Component {
    constructor () {
        super()
        this.state = {
            coffees: []
        }
    }


    handleMarkAsDeleted (id) {
        axios.delete(`/api/coffee/${id}`).then(response => {
            this.setState(prevState => ({
                // even if we fail to remove item we dont show in the list using filter
                coffees: prevState.coffees.filter(coffee => {
                    return coffee.id !== id
                })
            }))
        })
    }


    componentDidMount () {
        axios.get('/api/coffees').then(response => {
            this.setState({
                coffees: response.data
            })
        })
    }

    render () {
        const { coffees } = this.state
        let columns=[];

        coffees.forEach((item,idx) => {


            columns.push(
                <div className="col-md py-3" key={idx}>
                    <div className="card" >
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> {item.title} </h5>
                            <p className="card-text">Price: {item.price}</p>
                            <button
                                className='btn btn-primary btn-sm'
                                onClick={this.handleMarkAsDeleted.bind(this, item.id)}
                            >
                               Remove
                            </button>
                        </div>
                    </div>
                </div>
            )

            if ((idx+1)%4===0) {columns.push(<div className="w-100" key={null}></div>)}
        })

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Coffee List</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/add'>
                                    Create new Coffee
                                </Link>
                                <div className="row">
                                    {columns}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoffeeList

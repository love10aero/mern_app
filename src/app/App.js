import React, { Component } from 'react';

class App extends Component{

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.addSubject = this.addSubject.bind(this);
    }


    addSubject(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
        <div>
            {/* NAVIGATION */}
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <a className='brand-logo' href='/'>Love App</a>
                </div>
            </nav>
            <div className='container'>
                <div className='row'>
                    <div className='col s5'>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={this.addSubject}>
                                    <div className='row'>
                                        <div className="input-field">
                                            <input name='title' type="text" placeholder='Subject Title' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-field">
                                            <textarea name='description' placeholder='Subject Description' className='materialize-textarea' />
                                        </div>
                                    </div>
                                    <button type='submit' className='btn light-blue'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col s7'>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
import React, { useState } from 'react';
import { post } from './../../helper/HttpClient';
import './Home.css';


export function HomeComponent() {
    const [text, setText] = useState(process.env.REACT_APP_DEFAULT_TEXT);

    const users = ['Rahul','Sharma','Goku','Vegeta','Freeza','Dholakpur','Dhoom3'];
    const onSave = () => {
        post('/api/home/savetext', {
            text,
        }).then(success => {
            alert(`Hello ${success.message}`);
        }, error => {
            console.log("error",error);
        })
        
    };

    return (
        <div>
            <textarea className="form-control mb-3" value={text} onChange={(e) => { setText(e.target.value); } } />
            <button className="btn btn-primary" onClick={onSave}>Click</button>
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-3">
                        <img className="card-img-top fit-img" alt="image1" src="/images/image1.jpg" />
                        <div>
                            {
                                users.length > 4 &&
                                <ul className="list-group list-group-flush">
                                    {
                                        users.map((name, index) => {
                                            return <li className="list-group-item">{name}</li>
                                        })
                                    }
                                </ul>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mt-3">
                        <img className="card-img-top fit-img" alt="image1" src="https://dl.fujifilm-x.com/global/products/cameras/gfx100s/sample-images/gfx100s_sample_01_xegi.jpg?_ga=2.19750968.1486362449.1696144583-484510882.1696144583" />
                        <div>
                            {
                                users.length > 4 &&
                                <ul className="list-group list-group-flush">
                                    {
                                        users.map((name, index) => {
                                            return <li className="list-group-item">{name}</li>
                                        })
                                    }
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
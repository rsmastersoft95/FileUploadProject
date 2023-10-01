import React, { useState } from 'react';
import { post } from './../../helper/HttpClient';


export function HomeComponent() {
    const [text, setText] = useState(process.env.REACT_APP_DEFAULT_TEXT);

    const users = ['Rahul','Sharma','Goku','Vegeta','Freeza'];
    const onSave = () => {
        post('/api/home/savetext', {
            text,
        }).then(success => {
            alert(success.message);
        }, error => {
            console.log("error",error);
        })
        
    };

    return (
        <div>
            <textarea className="form-control mb-3" value={text} onChange={(e) => { setText(e.target.value); } } />
            <button className="btn btn-primary" onClick={onSave}>Click</button>
            
            
            
        </div>
    );
}
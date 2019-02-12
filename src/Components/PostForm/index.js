import React from 'react';
import './PostForm.css';
import Button from '../Button';

const PostForm = (props) => {
    return (
            <form className = "Form-content">
            <span>
                <label>
                    Date 
                </label>
                <input type = "date" />
            </span>
            <span>
                <label>
                    Reading time (in minutes)
                </label>
                <input type = "number"/>
            </span>
            <span className = "title">
                <label>
                    Title 
                </label>
                <input type = "text" maxLength = {70}/>
            </span>
            <span className = "description">
                <label>
                    Description 
                </label>
                <textarea maxLength = {130}/>
            </span>
            <span>
                <label> 
                    Image
                </label>
                <input type="file" name="pic" accept="image/*"></input>
            </span>
            <span>
                <Button type = "submit" caption = "UPLOAD POST" />
            </span>
            </form>
    )
}
export default PostForm;
import React, { Component } from 'react';
import './PostForm.Component.css';
import Button from '../Button/Button.Component';
import Axios from 'axios';

class PostForm extends Component  {
    state = {
        date: '',
        readingTime: '',
        title: '',
        description: ''
    }
    handleInput = (changedField) => {
        this.setState({ [changedField.target.className]: changedField.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(this.state).forEach((key) => form.append(key, this.state[key]));
        return Axios.post('/post', form).then((payload) => {
            console.log(payload.data);
            return payload.data;
        });
    }
    render() {
    return (
            <form className = "Form-content" encType = "multipart/form-data" onSubmit={this.handleSubmit}> 
            <span>
                <label>
                    Date 
                </label>
                <input type = "date" onChange = {this.handleInput} value = {this.state.date} className = "date" />
            </span>
            <span>
                <label>
                    Reading time (in minutes)
                </label>
                <input type = "number" onChange = {this.handleInput} className = "readingTime" />
            </span>
            <span className = "titleEntry">
                <label>
                    Title (Characters: {70-this.state.title.length})
                </label>
                <input type = "text" maxLength = {70} onChange = {this.handleInput} value = {this.state.title} className = "title"/>
            </span>
            <span className = "descriptionEntry">
                <label>
                    Description (Characters: {130-this.state.description.length})
                </label>
                <textarea maxLength = {130} onChange = {this.handleInput} value = {this.state.description} className = "description"/>
            </span>
            <span>
                <label> 
                    Image
                </label>
                <input type="file" name="image" accept="image/*"></input>
            </span>
            <span>
                <Button type = "submit" caption = "UPLOAD POST" /> 
            </span>
            </form>
    )}
}
export default PostForm;
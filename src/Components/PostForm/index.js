import React, { Component } from 'react';
import './PostForm.css';
import Button from '../Button';

class PostForm extends Component  {
    state = {
        titleCharacters: 70,
        descriptionCharacters: 130
    }
    handleTitleEntry = () => {
        this.setState((state) => ({
            titleCharacters: 70-document.getElementsByClassName("titleEntry")[0].value.length
        }));
    }
    handleDescriptionEntry = () => {
        this.setState((state) => ({
            descriptionCharacters: 130-document.getElementsByClassName("descriptionEntry")[0].value.length
        }));
    }
    render() {
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
                    Title (Characters: {this.state.titleCharacters})
                </label>
                <input type = "text" maxLength = {70} onChange = {this.handleTitleEntry} className = "titleEntry"/>
            </span>
            <span className = "description">
                <label>
                    Description (Characters: {this.state.descriptionCharacters})
                </label>
                <textarea maxLength = {130} onChange = {this.handleDescriptionEntry} className = "descriptionEntry"/>
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
    )}
}
export default PostForm;
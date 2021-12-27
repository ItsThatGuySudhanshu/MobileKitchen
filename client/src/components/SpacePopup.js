import { Button, Container, Form} from "react-bootstrap";
import { useState } from "react";
import '../styles/spacepopup.css'
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TryOutlined } from "@mui/icons-material";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


const SpacePopup = ({setSpacePopup, setSpaceNameChanged}) => {

    const user = useAuth0();
    const spaceNameValidator = (nameOfSpace) => {
        //empty name
        if (nameOfSpace === '') {
            return false;
        }

        //name has a number
        if ( /\d/.test(nameOfSpace)) {
            return false;
        }

        //name too long
        if (nameOfSpace.length > 15) {
            return false;
        }

        return true;
    }
    //validate forms
    const handleSubmit = async (e) => {

        e.preventDefault();
        const spacename = e.target[0].value;
        console.log(spacename);
        let email = JSON.stringify(user.user.email);
        email = email.substring(1, email.length - 1);
        //add all code to send this form to the server
        if (spaceNameValidator(spacename)) {
            await axios.post(`http://localhost:3001/api/inventory/${email}/add-space`, {
                "space": {
                    "name": spacename,
                    "ingredients": []
                }
            });


        }
        else {
            alert("Please provide a valid space name");
        }
    }

    return (

        <Container className="popupContainer" style={{padding: "5px"}}>
            <form onSubmit={async (e) => {
                                await handleSubmit(e);
                                setSpacePopup(false);
                                setSpaceNameChanged(prevState => !prevState)}}>
                <label htmlFor="spacename"> Enter space </label>
                <br></br>
                <input type="text" name="spacename"/>
                <button type="submit">Submit</button>
            </form>

        </Container>
    )
}

export default SpacePopup;
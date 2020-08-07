import React from 'react';

import { 
    SignInContainer,
    SignInTitle,
    ButtonsContainer
} from './sign-in.styles';

import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
        <SignInContainer>
            <SignInTitle>I am a member here</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label='email'
                    required
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    password='password'
                    label='password'
                    required
                />
                <ButtonsContainer>
                <CustomButton type='submit' value='Submit Form' > Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
        );
    }
}

export default SignIn;
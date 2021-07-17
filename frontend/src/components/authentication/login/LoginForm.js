import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';
import baseURL from '../../../utils/baseURL';
import { AppContext } from '../../../utils/Store';
import React from 'react';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = React.useContext(AppContext).user;
  const setUser = React.useContext(AppContext).setUser;
  
  const loginUser = async () => {
    if (email === '' || password === '') {
        // TODO fancy error
        alert('A field below is empty!');
        return;
    }
    
    try {
        const response = await axios.post(`${baseURL()}/login`,
        {
            password: password,
            email: email,
        },
        );
        const data = response.data;
        let tempUser = {...user};
        tempUser.user_id = data.id;
        tempUser.username = data.email;
        tempUser.first_name = data.first_name;
        tempUser.last_name = data.last_name;
        tempUser.email = data.email;
        tempUser.token = data.token;
        tempUser.role = (data.is_mentor ? 'Industry Mentor' : 'Mentee (High-school student)');
        tempUser.industry = data.industry;
        tempUser.company = data.company;
        setUser(tempUser);
        console.log(response);
        console.log(user);
        alert('Successful login! Redirecting you to the home page...');
        navigate('/');
    } catch (e) {
        alert(e);
        alert(e.reponse);
    }
  };


const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
      <Stack spacing={3}>
        <TextField
          fullWidth
          autoComplete="username"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
  
        <TextField
          fullWidth
          autoComplete="current-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={() => {loginUser()}}
        >
          Login
        </LoadingButton>
      </Stack>
  );
}

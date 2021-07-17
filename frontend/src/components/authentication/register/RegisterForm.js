import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Switch, FormControlLabel } from '@material-ui/core';
import { LoadingButton, Autocomplete } from '@material-ui/lab';
import React from 'react';
import companies from '../../../utils/companies';
import industries from '../../../utils/industries';
import baseURL from '../../../utils/baseURL';
import axios from 'axios';
import { AppContext } from '../../../utils/Store';
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const user = React.useContext(AppContext).user;
  
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mentee, setMentee] = React.useState(true);
  const [industry, setIndustry] = React.useState('');
  const [company, setCompany] = React.useState('');
  
  const registerUser = async () => {
    if (email === '' || password === '' || firstName === '' || lastName === '' || phone === '') {
        // TODO fancy error
        alert('A field below is empty!');
        return;
    }
    
    try {
        const type = (mentee ? "/mentee" : "/mentor");
        const response = await axios.post(`${baseURL()}/register${type}`,
        {
            first_name: firstName,
            last_name: lastName,
            password: password,
            email: email,
            industry_id: industries()[industry],
            phone: phone,
            company: company,
            role: 'deezNutz',
        },
        );
        alert('Successful registration! Redirecting you to login...');
        navigate('/login');
    } catch (e) {
        alert(e);
        alert(e.reponse);
        console.log(e.response.data);
        // alert(e.response.data.errors[0].title);
    }
  };

  return (
    <Stack spacing={3}>
      <FormControlLabel
        control={<Switch checked={mentee} onChange={() => {setMentee(!mentee)}} name="mentee" />}
        label={mentee ? "Mentee (High-school student)" : "Industry Mentor"}
      />          
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>              
        <TextField
          fullWidth
          label="First name"
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}
        />
  
        <TextField
          fullWidth
          label="Last name"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}
        />
      </Stack>
  
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
        autoComplete="phone"
        type="phone"
        label="Phone number"
        value={phone}
        onChange={(e) => {setPhone(e.target.value)}}
    />
      
      <TextField
        fullWidth
        autoComplete="current-password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                <Icon icon={showPassword ? eyeFill : eyeOffFill} />
              </IconButton>
            </InputAdornment>
          )
        }}
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
    />
      
      <Autocomplete 
        options={Object.keys(industries())}
        fullWidth
        onChange={ (event, value, reason) => {setIndustry(value)} }
        value={industry}
        renderInput={(params) => <TextField {...params} label={mentee ? "Industry you're interested in (optional)" : "Industry you work in"} />}
      />
      
      <Autocomplete 
        options={companies()}
        fullWidth
        onChange={ (event, value, reason) => {setCompany(value)} }
        value={company}
        renderInput={(params) => <TextField {...params} label={mentee ? "Company you're interested in (optional)" : "Company you work at"} />}
      />
  
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => registerUser()}
      >
        Register
      </LoadingButton>
    </Stack>
  );
}

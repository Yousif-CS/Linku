import { Typography } from "@material-ui/core";
import Page from '../components/Page';
import { AppContext } from '../utils/Store';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const user = React.useContext(AppContext).user;
    console.log(user);
    if (user.token === '')  {
      return (
        <Page title="Home">
        <Typography>Not logged in home</Typography>
        </Page>
      );
    } else {
      return (
        <Navigate to="/dashboard/app" />
      );
    }
}
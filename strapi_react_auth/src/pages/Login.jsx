import React from 'react';
import { Grid } from '@mantine/core';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import LoginCom from '../components/Login';

const Login = () => {

    const { isAuth, user } = useSelector((state) => state.auth);

    if (isAuth && user) return <Navigate to={'/'} />;


    return (
        <Layout>
            <div style={{ marginTop: "150px" }}>
                <Grid>
                    <Grid.Col xs={0} sm={0} md={3}></Grid.Col>
                    <Grid.Col sm={12} md={6}> <LoginCom /></Grid.Col>
                    <Grid.Col xs={0} sm={0} md={3} ></Grid.Col>
                </Grid>
            </div>
        </Layout>
    )
}

export default Login;

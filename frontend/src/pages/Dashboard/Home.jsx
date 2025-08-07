import React from 'react'
import DashboardLayout from '../../components/Layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth';
import { Container } from '@mui/material';
import ItemList from '../../components/Items/ItemList';

const Home = () => {
  useUserAuth();
  return (
    <DashboardLayout activeMenu="Dashboard">
      <Container maxWidth="xl">
       <ItemList />
     </Container>
    </DashboardLayout>
  )
}

export default Home
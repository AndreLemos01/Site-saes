import React from 'react';
import { Admin, Resource } from 'react-admin';
import { List, Datagrid, TextField } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); // API exemplo

// Componente de Listagem de Posts
const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

// Componente AdminPage
const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default AdminPage;




// src/pages/AdminPage.js
import React from 'react';
import { 
  Admin, 
  Resource, 
  List, 
  Datagrid, 
  TextField, 
  Edit, 
  Create, 
  SimpleForm, 
  TextInput, // AGORA USADO PARA CAMPOS DE TEXTO E TEXTO LONGO
  required,
  EmailField,
  UrlField,
  ImageInput,
  ImageField,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'; 

// 🚨🚨🚨 ATENÇÃO: SUBSTITUA PELA URL REAL DA SUA API DE BACKEND 🚨🚨🚨
// Esta API precisa retornar dados em um formato que o React-Admin entenda (ex: JSONServer, Strapi, etc.)
const API_URL = 'https://SUA_API_DE_BACKEND_AQUI'; 

// Use o provider real do seu backend. 
// O jsonServerProvider é um placeholder que funciona com a estrutura básica do React-Admin.
const dataProvider = jsonServerProvider(API_URL); 

/* -------------------- RECURSO DE NOTÍCIAS/ARTIGOS -------------------- */

// Componente de Listagem de Notícias
const NoticiaList = (props) => (
  <List {...props} title="Lista de Notícias e Artigos">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="titulo" label="Título" />
      <TextField source="autor" label="Autor" />
      <TextField source="dataPublicacao" label="Data de Publicação" />
    </Datagrid>
  </List>
);

// Componente de Edição de Notícias
const NoticiaEdit = (props) => (
  <Edit {...props} title="Editar Notícia/Artigo">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="titulo" label="Título" validate={required()} />
      {/* CORRIGIDO: Usando TextInput com multiline para conteúdo longo */}
      <TextInput 
        source="conteudo" 
        label="Conteúdo (Markdown/HTML)" 
        validate={required()} 
        multiline
        rows={5}
      />
      <TextInput source="autor" label="Autor" validate={required()} />
      <TextInput source="dataPublicacao" label="Data (e.g., AAAA-MM-DD)" validate={required()} />
      {/* Para imagens, você precisará de um backend que aceite upload. 
        O ImageInput abaixo é um placeholder. 
      */}
      <ImageInput source="imagemCapa" label="Imagem de Capa" accept="image/*" multiple={false}>
          <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

// Componente de Criação de Notícias
const NoticiaCreate = (props) => (
  <Create {...props} title="Criar Nova Notícia/Artigo">
    <SimpleForm>
      <TextInput source="titulo" label="Título" validate={required()} />
      {/* CORRIGIDO: Usando TextInput com multiline para conteúdo longo */}
      <TextInput 
        source="conteudo" 
        label="Conteúdo (Markdown/HTML)" 
        validate={required()} 
        multiline
        rows={5}
      />
      <TextInput source="autor" label="Autor" validate={required()} />
      <TextInput source="dataPublicacao" label="Data (e.g., AAAA-MM-DD)" validate={required()} />
      <ImageInput source="imagemCapa" label="Imagem de Capa" accept="image/*" multiple={false}>
          <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

/* -------------------- RECURSO DE MEMBROS DA EQUIPE -------------------- */

// Componente de Listagem de Membros
const MembroList = (props) => (
  <List {...props} title="Lista de Membros da Equipe">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" label="Nome" />
      <TextField source="cargo" label="Cargo" />
      <EmailField source="email" label="Email" />
      <UrlField source="linkedin_url" label="LinkedIn" />
    </Datagrid>
  </List>
);

// Componente de Edição de Membros
const MembroEdit = (props) => (
  <Edit {...props} title="Editar Membro da Equipe">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="nome" label="Nome" validate={required()} />
      <TextInput source="cargo" label="Cargo" validate={required()} />
      <TextInput source="email" label="Email" validate={required()} />
      <TextInput source="linkedin_url" label="URL LinkedIn" />
      {/* CORRIGIDO: Usando TextInput com multiline para currículo longo */}
      <TextInput 
        source="curriculo" 
        label="Currículo Completo" 
        validate={required()} 
        multiline
        rows={10}
      />
      {/* Campo para a imagem: você deve adaptar isso à sua API de armazenamento de imagens */}
      <TextInput source="imagem" label="URL da Imagem do Perfil" /> 
    </SimpleForm>
  </Edit>
);

// Componente AdminPage principal
const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    {/* Endpoint para gerenciar notícias/artigos. Mude 'noticias' para 'posts' se for o nome do seu endpoint */}
    <Resource 
        name="noticias" 
        list={NoticiaList} 
        edit={NoticiaEdit} 
        create={NoticiaCreate} 
        options={{ label: 'Notícias/Artigos' }}
    />

    {/* Endpoint para gerenciar os membros da equipe */}
    <Resource 
        name="membros" 
        list={MembroList} 
        edit={MembroEdit} 
        options={{ label: 'Membros da Equipe' }}
    />
    
    {/* Adicione outros recursos conforme necessário (e.g., publicacoes, newsletters, etc.) */}
  </Admin>
);

export default AdminPage;
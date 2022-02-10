import React from 'react';

import './Posts.css';
import {Container, Grid} from '@mui/material'

import PostTemplate from '../PostTemplate/postTemplate'

function Posts() {
  return (
    <div className='post-container'>

        <Container>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item={true} xs={6}>
              <PostTemplate title='1st Title' content="hello"/>
            </Grid>
            <Grid item={true} xs={6}>
              <PostTemplate title='2nd Title' content="this is a content"/>
            </Grid>

          </Grid>
        </Container>

    </div>
  )
};

export default Posts;

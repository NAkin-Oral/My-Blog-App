import { Container, List, ListItem, Paper, Typography } from '@mui/material';
import React from 'react';
import NewPost from '../components/NewPost';
import { FaReact } from 'react-icons/fa';
import { SiFirebase, SiReactrouter, SiMaterialui } from 'react-icons/si';
import { Box } from '@mui/system';

const About = () => {
  return (
    <div>
      <Container
        sx={{ paddingTop: '6rem', textAlign: 'center', height: '100vh' }}
      >
        <Paper
          variant="outlined"
          sx={{
            padding: '1rem',
            margin: 'auto',
            maxWidth: '800px',
            width: '80%',
          }}
        >
          <div className="about">
            <Typography variant="h3" sx={{ color: '#240046' }}>
              About Me
            </Typography>
            <hr />
            <Typography variant="h5" component="p">
              A beginner full-stack web developer who is eager to join a
              creative, problem-solving team. Ability to learn and implement new
              technologies quickly. My skills include HTML5, CSS3, Javascript,
              React.js, Python, Linux, AutoCAD, Agile, Jira, Fortran, and SQL.
              These skills were learned at the Clarusway IT Bootcamp program and
              Gazi University Energy Systems Engineering bachelor's degree. Can
              speak fluently in English, Italian and Turkish.
            </Typography>
          </div>
          <div className="tools-title">
            <Typography variant="h3" sx={{ color: '#d8315b' }}>
              Tools Used In This Site
            </Typography>
          </div>
          <hr />
          <List>
            <ListItem sx={{ maxWidth: '350', width: '100%', margin: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '2rem',
                  fontWeight: '500',
                }}
              >
                <FaReact style={{ color: '#7B2CBF' }} size={30} />
                <Typography variant="h5">React</Typography>
              </Box>
            </ListItem>
            <ListItem sx={{ maxWidth: '350', width: '100%', margin: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  fontWeight: '500',
                }}
              >
                <SiReactrouter style={{ color: '#7B2CBF' }} size={30} />
                <Typography variant="h5">React Router DOM</Typography>
              </Box>
            </ListItem>
            <ListItem sx={{ maxWidth: '350', width: '100%', margin: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  fontWeight: '500',
                }}
              >
                <SiMaterialui style={{ color: '#7B2CBF' }} size={30} />
                <Typography variant="h5">Material UI</Typography>
              </Box>
            </ListItem>
            <ListItem sx={{ maxWidth: '350', width: '100%', margin: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  fontWeight: '500',
                }}
              >
                <SiFirebase style={{ color: '#7B2CBF' }} size={30} />
                <Typography variant="h5">Firebase</Typography>
              </Box>
            </ListItem>
          </List>
        </Paper>
      </Container>
      <NewPost />
    </div>
  );
};

export default About;

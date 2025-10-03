import { Box, Typography, Container, Paper, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
              }}
            >
              <Typography variant="h3" component="h1" gutterBottom>
                Hi, I'm Dhanashree
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                Full Stack Developer
              </Typography>
              <Typography variant="body1" paragraph>
                I am a driven software developer dedicated to crafting modern web applications that are not only efficient and scalable but also deliver exceptional user experiences. With a passion for harnessing cutting-edge technologies, I create innovative solutions that drive business growth and exceed user expectations
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
              }}
            >
              <Typography variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                With over 5 years of experience in software development, I specialize in:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body1">Node.Js and Java Proficieny</Typography>
                <Typography component="li" variant="body1">React.js and Angular </Typography>
                <Typography component="li" variant="body1">Database Design & Management</Typography>
                <Typography component="li" variant="body1">Cloud Technologies</Typography>
                <Typography component="li" variant="body1">E-Commerce Solution</Typography>
                <Typography component="li" variant="body1">API Development</Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
              }}
            >
              <Typography variant="h5" gutterBottom>
                What I Do
              </Typography>
              <Typography variant="body1" paragraph>
                {/* I create modern web applications that solve real-world problems. My approach combines
                technical expertise with a strong focus on user experience and business needs. */}
                I design and develop modern web applications that address real-world challenges with innovative, 
                scalable solutions. By blending technical expertise with a deep understanding of user experience 
                and business goals,
              </Typography>
              <Typography variant="body1">
                Currently seeking opportunities to contribute to innovative projects and collaborate
                with forward-thinking teams.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Core Competencies
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          {['Full Stack Development', 'E-commerce Solutions', 'System Architecture',
            'AI Integration', 'Scalable Systems', 'Agile Development'].map((skill) => (
              <Paper key={skill} elevation={1} sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                <Typography>{skill}</Typography>
              </Paper>
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
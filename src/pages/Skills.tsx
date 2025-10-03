import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon fontSize="large" />,
      skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI', 'Redux', 'Angular'],
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon fontSize="large" />,
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Database & Cloud',
      icon: <CloudIcon fontSize="large" />,
      skills: ['MongoDB', 'MySQL', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
    },
    {
      title: 'Tools & Others',
      icon: <BuildIcon fontSize="large" />,
      skills: ['Git', 'Jenkins', 'Jira', 'Agile', 'Unit Testing', 'CI/CD'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 4 }}
        >
          Technical Skills
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    height: '100%',
                    bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'primary.main' }}>
                    {category.icon}
                    <Typography variant="h5" sx={{ ml: 1 }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {category.skills.map((skill, skillIndex) => (
                      <Grid item xs={6} key={skillIndex}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        >
                          <Typography variant="body1">
                            • {skill}
                          </Typography>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills; 
import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const theme = useTheme();

  const educationData = [
    {
      school: 'International Technological University',
      degree: 'Master of Science in Software Engineering',
      location: 'San Jose, CA',
      year: '2012 - 2013',
      courses: [
        'Advanced Software Engineering',
        'Web Technologies',
        'Database Management Systems',
        'Cloud Computing',
        'Software Testing and Quality Assurance'
      ]
    },
    {
      school: 'Pune University',
      degree: 'Bachelor of Engineering in Electronics and Telecommunication',
      location: 'Pune, India',
      year: '2005 - 2009',
      courses: [
        'Data Structures and Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Object-Oriented Programming'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
          <SchoolIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1">
            Education
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 4 },
                    bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {edu.school}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {edu.location} | {edu.year}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Key Courses:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                        {edu.courses.map((course, courseIndex) => (
                          <motion.li
                            key={courseIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + courseIndex * 0.05 }}
                          >
                            <Typography variant="body1">
                              {course}
                            </Typography>
                          </motion.li>
                        ))}
                      </Box>
                    </Grid>
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

export default Education; 
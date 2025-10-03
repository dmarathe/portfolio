import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const theme = useTheme();

  const experiences = [
    {
      company: 'Weee!',
      position: 'Software Engineer',
      duration: 'Oct 2021 - Present',
      location: 'Fremont, CA',
      achievements: [
        'Developed a scalable restaurant delivery zone configuration system, reducing onboarding time by 50% using AWS SQS automation.',
        'Created an AI-powered image generation platform for enhanced food visual content, boosting user engagement.',
        'Built a real-time inventory management system, reducing out-of-stock incidents by 25%.',
        'Integrated Shopify services, resulting in a 15% revenue increase and expanded product offerings.',
        'Implemented a Java-based automated reporting system for real-time merchant performance insights.',
        'Collaborated on a Node.js and MongoDB application to gather and cross-reference restaurant and product listings from competitor sources.'
      ]
    },
    {
      company: 'Ricepo',
      position: 'Software Developer',
      duration: 'Jun 2017 - Oct 2021',
      location: 'Milpitas, CA',
      achievements: [
        'Developed a real-time order fulfillment system using Routific API, Node.js, and Angular, optimizing routes for 100+ daily deliveries.',
        'Implemented referral and loyalty programs, increasing customer base by 15%.t',
        'Created a smart restaurant recommendation system using customer history and ratings data for personalized suggestions.',
        'Introduced batched delivery functionality, reducing delivery costs for customers.',
        'Designed a fraud detection pipeline with Twilio phone verification and custom risk scoring for proactive prevention.',
        'Deployed Sentry logging system, significantly reducing debugging time and improving error management.'
      ]
    },
    {
      company: 'Internet Brands',
      position: 'Web Development Intern',
      duration: 'Oct 2012 - Aug 2013',
      location: 'Pleasanton, CA',
      achievements: [
        'Implemented robust user authentication and automated password recovery for Nolo research platform, enhancing user experience and data accessibility.',
        'Conducted cross-browser compatibility tests and implemented accessibility features, improving application usability across platforms.',
        'Developed responsive product grid view using Bootstrap and jQuery plugins, enhancing product discovery for Nolo\'s e-commerce platform.',
        'Gained experience in Agile methodologies, including sprint planning and project management tools, while collaborating with cross-functional teams.'
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
          <WorkIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1">
            Professional Experience
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
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
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {exp.position}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {exp.location}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {exp.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Key Achievements:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                          >
                            <Typography variant="body1" paragraph>
                              {achievement}
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

export default Experience; 
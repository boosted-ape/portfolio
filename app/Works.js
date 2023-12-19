import { Card, CardActionArea, CardContent, Grid, IconButton, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Works() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingLeft: '5vh',
        paddingRight: '5vh',
        minHeight: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scrollSnapAlign: 'start'
      }}
    >
      <Grid item xs={3}>
        <Card sx={{ minHeight: 200 }}>
          <CardActionArea href="https://github.com/boosted-ape/sa-chinese" target="_blank" sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sentiment Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bidirectional LSTM trained on labelled Chinese Weibo Comments, predictive accuracy of 88%.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ minHeight: 200 }}>
          <CardActionArea href="https://github.com/boosted-ape/8080-emulator" target="_blank" sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                8080 Disassembler
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Outputs 8080 assembly instructions from executables, by reading opcodes and mapping to the related instructions.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ minHeight: 200 }}>
          <CardActionArea href="https://github.com/orgs/cs203-bluetix/repositories" target="_blank"sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Full Stack Web Application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                SMU-X Project. Full Stack Web Application with blockchain integration, designed to mint and process event tickets.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ minHeight: 200 }}>
          <CardActionArea href="https://github.com/boosted-ape/SVMClassifier" target="_blank" sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Face Recognition Project
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Toy Project to learn about computer vision. Use OpenCV libraries to detect face, then find the nearest match using nearest neighbours.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid item xs={1}>
          <IconButton href="https://github.com/boosted-ape" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton href="https://www.linkedin.com/in/wong-boon-jhee-996b3b1b5/" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton href="bjwong.2022@scis.smu.edu.sg" target="_blank">
            <EmailIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
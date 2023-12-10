import { Box, Link, Typography } from '@mui/material'
import { useStyles } from './config'

function Footer() {
  const classes = useStyles()
  return (
    <Box className={classes.FooterSection}>
        <Box className={classes.Container}>
          <Typography component={'span'}>
          Coded with 💙 by{" "}
          <Link
            href="https://github.com/master-ajay"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Link}
          >
            @AJ
          </Link>
          </Typography>
        </Box>
    </Box>
  )
}

export default Footer

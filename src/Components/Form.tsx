import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    width: '50%'
  },
  form: {

  }
})

const Form = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box className={classes.form}>

      </Box>
    </Box>
  )
}

export default Form

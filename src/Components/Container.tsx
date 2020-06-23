import React from 'react'
import Box from '@material-ui/core/Box'
import Landing from './Landing'
import Form from './Form'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    width: '90vw',
    border: 'solid 1px #ddd',
    margin: 'auto',
    marginTop: '5vh',
    boxShadow: '0 0 2px 2px #ddd',
    borderRadius: 4,
    display: 'flex'
  }
})

const Container = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Landing />
      <Form />
    </Box>
  )
}

export default Container

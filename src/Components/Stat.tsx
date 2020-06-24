import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    width: 400,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    boxSizing: 'border-box'
  },
  icon: {
    margin: 10
  },
  info: {
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  description: {
    fontSize: 20,
    fontWeight: 500
  }
})

interface StatProps {
  icon: string;
  title: string;
  description: string;
}

const Stat = (props: StatProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box className={classes.icon}>
        <img src={props.icon} alt={props.title} width={50} height={50}/>
      </Box>
      <Box className={classes.info}>
        <Box className={classes.title}>{props.title}</Box>
        <Box className={classes.description}>{props.description}</Box>
      </Box>
    </Box>
  )
}

export default Stat

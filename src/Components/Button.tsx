import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  button: {
    width: 140,
    height: 40,
    backgroundColor: '#222',
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#eee',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 3,
    cursor: 'pointer',
    border: 'solid 4px #222',
    '&:hover': {
      backgroundColor: 'white',
      color: '#222'
    }
  }
})

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  text?: String;
}

const Button = (props: ButtonProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.button} onClick={props.onClick}>
      {props.text ?? 'empty'}
    </Box>
  )
}

export default Button

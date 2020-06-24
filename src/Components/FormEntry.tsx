import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'
import Button from './Button'

const useStyles = makeStyles({
  form: {

  },
  field: {

  }
})

const FormEntry = (): JSX.Element => {
  const classes = useStyles()
  const [pesel, setPesel] = useState('')

  return (
    <Box className={classes.form}>
      <TextField
        className={classes.field}
        label='Twój pesel'
        autoComplete='email'
        variant='outlined'
        type='email'
        value={pesel}
        onChange={(e) => setPesel(e.target.value)}
      />
    </Box>
  )
}

export default FormEntry

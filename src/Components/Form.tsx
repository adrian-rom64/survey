import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Button from './Button'

const data = {
  title: 'Konsultacje społeczne w sprawie zmiany granic gminy miasta Kalisz',
  selectOptions: [
    { value: 0, title: 'Konsultacja 1' },
    { value: 1, title: 'Konsultacja 2' },
    { value: 2, title: 'Konsultacja 3' },
    { value: 3, title: 'Konsultacja 4' }
  ]
}

const useStyles = makeStyles({
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '60%',
    height: '60%'
  },
  field: {
    width: '100%',
    marginTop: 8,
    marginBottom: 8
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1.5,
    marginBottom: 20
  },
  gender: {
    display: 'flex',
    height: 50
  },
  genderLabel: {
    fontSize: 20,
    lineHeight: 2.5,
    marginRight: 20,
    cursor: 'pointer'
  },
  agreement: {
    display: 'flex',
    marginTop: 20
  },
  agreementText: {
    lineHeight: 1.5,
    marginTop: 25
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150
  }
})

const Form = (): JSX.Element => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [consultation, setConsultation] = useState('')
  const [gender, setGender] = useState('')
  const [agreement, setAgreement] = useState(false)

  const changeSelectValue = (event: React.ChangeEvent<{ value: unknown }>) => {
    setConsultation(event.target.value as string)
  }

  const options = data.selectOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>
  ))

  return (
    <Box className={classes.container}>
      <Box className={classes.form}>
        <Box className={classes.title}>{data.title}</Box>
        <TextField
          className={classes.field}
          label='Twój email'
          autoComplete='email'
          variant='outlined'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.field}
          label='Twoje imię'
          autoComplete='given-name'
          variant='outlined'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          className={classes.field}
          label='Twoje nazwisko'
          autoComplete='family-name'
          variant='outlined'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormControl variant="outlined" className={classes.field}>
          <InputLabel>Wybierz konsultacje</InputLabel>
          <Select
            value={consultation}
            onChange={changeSelectValue}
            label='Wybierz konsultacje'
          >
            {options}
          </Select>
        </FormControl>
        <Box className={classes.gender}>
          <Radio
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value) }
            value='male'
            color='default'
          />
          <Box className={classes.genderLabel} onClick={() => setGender('male')}>Mężczyzna</Box>
          <Radio
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            value='female'
            color='default'
          />
          <Box className={classes.genderLabel} onClick={() => setGender('female')}>Kobieta</Box>
        </Box>
        <Box className={classes.agreement}>
          <Checkbox
            color='default'
            value={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <Box className={classes.agreementText}>
            Wyrażam zgodę na przetwarzanie moich
            <Link href='https://google.com'>{' danych osobowych '}</Link>
            przez prezydenta miasta w tych celach co tam wymyślił
          </Box>
        </Box>
        <Box className={classes.buttonBox}>
          <Button text='Zapisz' onClick={() => console.log('submit')}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Form

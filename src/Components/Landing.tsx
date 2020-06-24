import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Stat from './Stat'
import Time from '../Assets/icons/time.svg'
import Opinion from '../Assets/icons/opinion.svg'

const image = 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

const data = {
  city: 'Kalisz',
  startDate: '01.01.2020',
  endDate: '01.02.2020',
  voteCount: 276,
  title: 'Konsultacje społeczne w sprawie zmiany granic gminy miasta Kalisz',
  description: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children.'
}

const useStyles = makeStyles({
  container: {
    width: '50%'
  },
  imageBackground: {
    backgroundColor: 'black',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 2
  },
  text: {
    fontSize: 45,
    color: '#222',
    fontWeight: 700,
    backgroundColor: '#ebd8d4',
    height: 45,
    padding: 10,
    marginLeft: 30,
    width: 'max-content'
  },
  header: {
    backgroundColor: '#e8e9eb',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  descriptionBox: {
    backgroundColor: '#efefef',
    height: 290,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 1.8,
    textAlign: 'justify'
  },
  more: {
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer'
  }
})

const Landing = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box className={classes.imageBackground}>
        <span className={classes.text}>Konsultacje</span>
        <span className={classes.text}>społeczne</span>
        <span className={classes.text}>miasta {data.city}</span>
      </Box>
      <Box className={classes.header}>
        <Stat
          icon={Time}
          title='Konsultacja trwa'
          description={`${data.startDate} - ${data.endDate}`}
        />
        <Stat
          icon={Opinion}
          title='Ilość opinii'
          description={data.voteCount.toString()}
        />
      </Box>
      <Box className={classes.descriptionBox}>
        <Box className={classes.title}>{data.title}</Box>
        <Box className={classes.description}>{data.description}</Box>
        <Box className={classes.more}>Więcej</Box>
      </Box>
    </Box>
  )
}

export default Landing

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import { colors } from '../styles/colors'

const useStyles = makeStyles({
  root: {
    width: 'calc(25% - 2em)',
    minWidth: 300,
    height: '25%',
    margin: '1em',
    boxShadow: 'none',
    border: `1px solid ${colors.backgroundLight}`,
    transition: 'all .4s ease',
    '&:hover': {
      transform: 'translate3D(0,-1px,0) scale(1.15)',
      transition: 'all .4s ease',
    },
  },
  media: {
    height: 300,
    width: 300,
    margin: 'auto',
  },
  content: {
    height: 100,
  },
})

export const ProductItem = ({ name, img, web_url }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        href={web_url}
        target="_blank"
        rel="noopener"
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={name} />
          <CardContent className={classes.content}>
            <p>{name}</p>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

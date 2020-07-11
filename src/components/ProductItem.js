import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: {
    width: 'calc(25% - 2em)',
    minWidth: 300,
    height: '25%',
    margin: '1em',
  },
  media: {
    height: 300,
    width: 300,
    margin: 'auto',
  },
})

export const ProductItem = ({ name, img }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent>
          <h3>{name}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

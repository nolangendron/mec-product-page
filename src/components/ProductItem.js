import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'

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

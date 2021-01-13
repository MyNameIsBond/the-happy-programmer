import { React, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { boxShadow } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: theme.shadows[0],
    flexGrow: 1,
  },
}))

const loggedIN = () => {
  const menu = ["Home", "SwiftUI", "Flutter", "Web", "React Native"]
  const e = menu.map((e) => (
    <Typography style={{ flexGrow: 1 }}>{e}</Typography>
  ))
  return e
}

const NotloggedIn = () => {
  const menu = ["Sign In"]
  const e = menu.map((e) => (
    <Typography style={{ flexGrow: 1 }}>{e}</Typography>
  ))
  return e
}

export const AppMenu = (props) => {
  const classes = useStyles()
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent' className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          {loggedIn ? loggedIN() : NotloggedIn()}
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

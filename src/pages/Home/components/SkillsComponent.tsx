import React, { useState } from "react";
import {
  Grid,
  Popover,
  makeStyles,
  createStyles,
  Typography,
  Theme,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faReact,
  faNodeJs,
  faLaravel,
  faVuejs,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none",
    },
    paper: {
        padding: theme.spacing(1),
    },
  })
);

const SkillsComponent = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverText, setPopoverText] = useState<string | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>, text: string) => {
    setPopoverText(text);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverText(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ textAlign: "center" }}
      >
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'ReactJS')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faReact} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'Angular')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faAngular} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'VueJS')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faVuejs} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'NodeJS')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faNodeJs} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'Laravel')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faLaravel} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'JavaScript')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faJs} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'HTML 5')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faHtml5} color="#2c3e50" size="3x" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginBottom: "50px", cursor: "pointer" }}
          onMouseEnter={(e) => {handlePopoverOpen(e, 'CSS 3')}}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faCss3} color="#2c3e50" size="3x" />
        </Grid>
      </Grid>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
            paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{popoverText}</Typography>
      </Popover>
    </>
  );
};

export default SkillsComponent;

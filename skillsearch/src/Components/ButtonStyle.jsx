import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/179922938_10225039656843652_3307976832041878089_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=D9bvx5AfHSQAX-yMzgB&_nc_ht=scontent.flhr3-3.fna&oh=97d862faa03039888e86adbd95328a66&oe=60B2BC2E',
    path:'/editSkills',
    title: 'Añadir Habilidad',
    width: '40%',
  },
  {
    url: 'https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/179996484_10225039658003681_1965413554120739355_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=KXTOUya1kpQAX86kfjf&_nc_ht=scontent.flhr3-3.fna&oh=c426c307f442d918ec678df9595bbe80&oe=60B335AD',
    path:'/showSkills',
    title: 'Visualizar Habilidades',
    width: '30%',
  },
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent:"center"
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  const history = useHistory()
  return (
    <div className={classes.root}>
      {images.map((image) => (
      
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={()=>{
              history.push(image.path)
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
       
      ))}
    </div>
  );
}
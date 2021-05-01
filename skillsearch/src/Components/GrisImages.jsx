import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img:
      "https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/179863055_10225039532840552_5269906250517645872_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=rW4S4BIQ7wwAX-w_DbE&_nc_ht=scontent.flhr3-3.fna&oh=bbe54a1893bee06d923339e4a1f54b76&oe=60B0E731",
    title: "Image",
    author: "author",
  },
  {
    img:
      "https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/180069826_10225039533920579_1660169892433130650_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=nCEIrSRbns8AX8y65DK&_nc_ht=scontent.flhr3-3.fna&oh=f0a0884452953533ea75d14ead3ad38f&oe=60B2FFC4",
    title: "Image",
    author: "author",
  },
  {
    img: "https://www.fundses.org.ar/sites/default/files/nota_fp.jpg",
    title: "Image",
    author: "author",
  },
  {
    img:
      "https://www.fundses.org.ar/sites/default/files/nota_practicas_educativas.jpg",
    title: "Image",
    author: "author",
  },
];
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

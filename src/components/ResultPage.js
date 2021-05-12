import React, { useEffect, useState, useRef } from "react";
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    CardMedia,
    Container,
    Image,
    Grid,
    Link,
    Paper,
    Snackbar,
    TextField,
    Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root:{
	maxWidth: 600,
			paddingTop: 10,
			display: 'flex',
			margin: 'auto',
			flexWrap: 'wrap',
	},
	card: {
		display: 'flex',
		margin: 'auto',
		flexWrap: 'wrap',
		padding: 10,
	},
	questionnaire:{
		paddingLeft: 10,
		paddingRight: 40
	},
	slider: {
			width: 200
	},
	media: {
		height: 200,
	},
});

export default function ResultPage(props){
    const classes = useStyles();
    const {
		user, criteria,
		val1, setVal1,
		val2, setVal2,
		val3, setVal3,
		val4, setVal4,
		val5, setVal5,
		val6, setVal6,
		val7, setVal7,
		val8, setVal8, } = props;
		alert(val1);
    return(
        <Grid>
            <Typography>{user} Side - {criteria}</Typography>
						<Typography>{val1} {val2} {val3} {val4} {val5} {val6} {val7} {val8}</Typography>
        </Grid>
    );
}
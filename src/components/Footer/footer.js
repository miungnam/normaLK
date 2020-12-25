import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Grid} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxwidth: 2000,
    disableRipple: true,
    background: 'cadetblue',
  },
  typo: {
    color: 'white',
  },
})


export default function Footer(props) {
  const classes = useStyles();

  return (

    <Card className={classes.root} >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
          >
            <Grid item xs={12} sm={6} xl={3} lg={3} md={3}>
              <Typography className={classes.typo}   component="p" align="center"  >
                <h1>Новая Норма</h1>
                <p >Компания является интегратором и провайдером облачных сервисов для
                   автоматизации процессов управления цепочками поставок и взаиморасчетов.
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} xl={3} lg={3} md={3}>
              <Typography className={classes.typo}  component="p" align="center" >
                <h3>Драйвера</h3>
                <p>Шртих-Light</p>
                <p>Атол</p>
                <p>Альфа АЗС 2.8</p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} xl={3} lg={3} md={3}>
              <Typography className={classes.typo}  component="p" align="center"  >
                  <h3>Документы</h3>
                  <p>Руководство пользователя</p>
                  <p>Описание процессов</p>
                  <p>Условия поставки</p>
                  <p>Условия гарантии</p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} xl={3} lg={3} md={3}>
              <Typography className={classes.typo}  component="p" align="center" >
                  <h3>Контакты</h3>
                  <p>Адрес:</p>
                  <p>+996 (312) 888-882</p>
                  <p>+996 (501) 588-882</p>
                  <p>+996 (550) 830-532</p>
                  <p>+996 (708) 700-700</p>
              </Typography>
            </Grid>
          </Grid>
    </Card>
  );
}

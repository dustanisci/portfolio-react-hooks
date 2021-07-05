import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    '&  .MuiGrid-container': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse'
      },

      '& .MuiGrid-item': {
        [theme.breakpoints.down('sm')]: {
          '&:first-child': {
            marginTop: '40px'
          },

          '&:last-child': {
            marginTop: 0
          }
        },

        '& img': {
          maxWidth: '400px',
          width: '100%',
          display: 'block',
          margin: '0 auto',

          [theme.breakpoints.up('xl')]: {
            maxWidth: '550px',
          }
        }
      }
    }
  }
}));

export default useStyle;
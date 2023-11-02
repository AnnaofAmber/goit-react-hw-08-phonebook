import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { registerThunk } from "redux/auth/operations"


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const RegisterPage = () =>{
  const {
      register,
      handleSubmit,
      reset,
      // formState: { errors },
    } = useForm()

const dispatch = useDispatch()

    const onSubmit = (data) => {
      dispatch(registerThunk(data)) 
      reset()}
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                {...register("name", { required: true })} 
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("email", { required: true })} 
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("password", { required: true , minLength:7})}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}


    //   return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <label>
    //             <span>Name:</span>
    //         <input {...register("name", { required: true })} type="text"/>
    //         {errors.name && <span>This field is required</span>}
    //         </label>
    //         <label>
    //             <span>Email:</span>
    //         <input {...register("email", { required: true })} type="email"/>
    //         {errors.email && <span>This field is required</span>}
    //         </label>
    //         <label>
    //             <span>Password:</span>
    //         <input {...register("password", { required: true , minLength:7})} type="password" />
    //         {errors.password && <span>This field is required</span>}
    //         </label>
          
    //         <button type="submit">Sing up</button>
    //     </form>
    //   )
    // }


export default RegisterPage
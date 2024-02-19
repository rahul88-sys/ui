import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setLoginStatus] = useState(false);

  let storedLoginStatus = localStorage.getItem("isLoggedIn") || "false";
  useEffect(() => {
    // Check if credentials are stored in localStorage

    // if (rememberMe) {
    if (storedLoginStatus === "true") {
      setLoginStatus(true);

      console.log(
        "Before setting items in local storage:",
        email,
        password,
        rememberMe
      );

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      console.log(
        "After setting items in local storage:",
        localStorage.getItem("isLoggedIn")
      );
    }
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        history("/");
      }, 2000);

      // Clear the timeout if the component is unmounted
      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn]);

  console.log("isLoggedIn1", storedLoginStatus);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // For demo purposes, hardcoded credentials
    const demoEmail = "user@gmail.com";
    const demoPassword = "1234";

    if (email === demoEmail && password === demoPassword) {
      // Successful login
      setIsLoggedIn(true);
      setLoginStatus(true);
      setRememberMe(true);

      // Save credentials in localStorage if "Remember me" is checked

      console.log("Login successful!");
    } else {
      // Failed login
      setIsLoggedIn(false);
      console.log("Invalid credentials");
    }
  };
  console.log("Remember Me State:", rememberMe);

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isLoggedIn ? "Logged In" : "Login"}
            </Typography>
            {isLoggedIn ? (
              <Typography variant="body1" sx={{ mt: 3 }}>
                Welcome, {email}!<br />
                <CircularProgress />
              </Typography>
            ) : (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={
                    <Checkbox value="remember" color="primary" defaultChecked />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

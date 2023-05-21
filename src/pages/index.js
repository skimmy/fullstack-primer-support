import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Admin from '../components/Admin';
import FileList from '@/components/FileList';

const menuItems = [
  {
      name: "First",
      url: "/"
  },
  {
      name: "Second",
      url: "/"
  },
  {
      name: "Third",
      url: "/"
  },
  {
    name: "About",
    url: "/about"
  }
]

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function mainContent() {
  return(
    <FileList />
  );
}

function sideContent() {
  return(
    <FileList />
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme: lightTheme}>
    <CssBaseline />
      <Admin 
        darkMode={setDark}
        menuItems={menuItems}
        main={mainContent()}
        side={sideContent()}
      >
      </Admin>
    </ThemeProvider>
  );
}
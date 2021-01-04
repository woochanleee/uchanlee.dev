import React from 'react';

const defaultState = {
  dark: false,
  toggleTheme: (isDark: boolean) => {},
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
  state = {
    dark: false,
  };

  toggleTheme = (dark) => {
    const bodyClassList = document.querySelector('body').classList;

    if (dark) {
      bodyClassList.add('dark');
      bodyClassList.remove('light');
    } else {
      bodyClassList.add('light');
      bodyClassList.remove('dark');
    }

    localStorage.setItem('dark', String(dark));
    this.setState({ dark });
  };

  componentDidMount() {
    const isDark = localStorage.getItem('dark') === 'true' ? true : false;
    this.setState({ dark: isDark });
    this.toggleTheme(isDark);
  }

  render() {
    const { children } = this.props;
    const { dark } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleTheme: this.toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;
export { ThemeProvider };

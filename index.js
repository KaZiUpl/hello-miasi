const hello = (text = 'MiASI') => {
  if (text && text == 'MiASI') {
    console.log('Hello MiASI');
  } else {
    console.log(`Hello MiASI and hello ${text}`);
  }
};

export default hello;

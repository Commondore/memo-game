// const DATA = ['ball', 'drupal', 'firefox', 'freebsd', 'google', 'hot'];
const DATA = ['ball', 'drupal'];
const shuffle = [...DATA, ...DATA].sort(() => Math.random() - 0.5);

export default shuffle;

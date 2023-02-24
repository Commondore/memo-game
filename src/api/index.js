import ky from 'ky';

const scoresApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API });

export const fetchScores = () => {
  return scoresApi.get('scores.json').json();
};

export const postScoresApi = (data) => {
  return scoresApi.post('scores.json', { json: data }).json();
};

export const upadateScoresApi = (score, id) => {
  return scoresApi.put(`scores.json/${id}`, { json: score });
};

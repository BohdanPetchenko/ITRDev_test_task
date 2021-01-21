export default function actionGetAbout(token) {

  return dispatch => {
    fetch('/about', {
      method: 'GET',
      headers: new Headers({'Authorization': `Bearer ${token}`})
    }).then(res => res.json())
      .then(data => dispatch({ type: 'GET_ABOUT', state: { about: data } }))
  }
}


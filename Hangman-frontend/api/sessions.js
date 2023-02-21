const BASE_URL = "http://127.0.0.1:8000/api/sessions";

async function createSession(name) {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
  const session = response.json();
  return session;
}
async function playInSession(id, letter) {
  const response = await fetch(`${BASE_URL}/${id}/play`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      letter,
    }),
  });
  const session = response.json();
  return session;
}
async function playNewWord(id) {
  const response = await fetch(`${BASE_URL}/${id}/play`, {
    method: "POST",
    body: JSON.stringify({}),
  });
  const session = response.json();
  return session;
}
module.exports = {
  createSession,
  playInSession,
  playNewWord,
};

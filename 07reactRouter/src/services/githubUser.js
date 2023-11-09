export async function fetchGithubUser() {
  const url = "https://api.github.com/users/mehar005";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
}

export const jwtApi = (currentUser, navigate, from) => {
    fetch("https://genius-car-server-one-beta.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("genius-token", data.token);
        navigate(from, { replace: true });
      });
}
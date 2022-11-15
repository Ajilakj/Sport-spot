const profileUser = document.querySelector("#profile-username");
const profileName = document.querySelector("profile-name");
const profileBio = document.querySelector("profile-bio");
const profileEmail = document.querySelector("profile-email");
const profilePhone = document.querySelector("profile-phone");

const response = await fetch (`/users/profile`, {
    moethod: "GET",
    body: JSON.stringify({
        username,
        firstName,
        lastName,
        bio,
        email,
        phone_number,
    }),
    headers: {
        "Content-Type": "application/json",
    },
});
if (response.ok) {
    document.location.replace("/users/profile");
} else {
    alert("Failed to load profile");
}
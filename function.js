// connection to Supabase
// Change the strings after Supabase project is made and api key is accessed
const SUPABASE_URL = "https://supabase.co";
const SUPABASE_ANON_KEY = "placeholder-key-until-friend-gives-it-to-me";

// Initialize Supabase (Site connecting with backend) get key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Wait until the HTML page is completely loaded in the browser
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const registerBtn = document.getElementById("register-btn");
  const loginBtn = document.getElementById("login-btn");
  const UserName = document.getElementById("username");

  // ==========================================
  // 3. HANDLING THE SIGN-UP BUTTON CLICK
  // ==========================================
  if (registerBtn) {
    registerBtn.addEventListener("click", async (event) => {
      // Prevent the standard HTML form from refreshing the browser page
      event.preventDefault();

      // Grab whatever text the user typed into the input boxes
      const email = emailInput.value;
      const password = passwordInput.value;

      // Send the sign-up request to Supabase API
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        username: UserName,
      });

      if (error) {
        // If something goes wrong (e.g. invalid email), alert the user
        alert("Sign Up Error: " + error.message);
      } else {
        // Success! Prompt them to check their inbox
        alert(
          "Sign Up Success! Please check your email for a confirmation link.",
        );
        console.log("Registered User Data:", data);
      }
    });
  }

  // ==========================================
  // 4. HANDLING THE LOGIN BUTTON CLICK
  // ==========================================
  if (loginBtn) {
    loginBtn.addEventListener("click", async (event) => {
      // Prevent the standard HTML form from refreshing the browser page
      event.preventDefault();

      // Grab whatever text the user typed into the input boxes
      const email = emailInput.value;
      const password = passwordInput.value;

      // Send the login request to Supabase API
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        // If password or email is incorrect, alert the user
        alert("Login Error: " + error.message);
      } else {
        alert("Login Success! Welcome back.");
        console.log("Logged-In User Data:", data);

        // 🚨 OPTIONAL REPLACE_THIS: Change "dashboard.html" to the name of your actual 3D model viewer page
        // window.location.href = "dashboard.html";
      }
    });
  }
});

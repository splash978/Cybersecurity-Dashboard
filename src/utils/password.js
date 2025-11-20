export const analyzePassword = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];

  return {
    strength: levels[score],
    feedback:
      score < 2
        ? "Your password is too weak. Add numbers, symbols, and uppercase letters."
        : "Good password. Consider making it longer for extra security.",
  };
};
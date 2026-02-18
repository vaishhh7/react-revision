export default function MoodSuggestion({ weather }) {
  if (!weather) return null;
  const main = weather.weather[0].main.toLowerCase();
  let message = "hello";

  switch (main) {
    case "rain":
      message = "rainy day ";
      break;
    case "clear":
      message = "clear day ";
      break;
    case "clouds":
      message = "cloudy day ";
      break;
    default:
      message = "meow";
  }
  return (
    <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md text-center font-medium">
      {message}
    </div>
  );
}

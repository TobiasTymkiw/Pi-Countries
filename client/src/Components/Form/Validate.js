export default function validate(activity) {
  let errors = {};

  if (!activity.name.trim() || activity.name.length < 3)
    errors.name = "Please put a valid name to the activity*";
  

  if (!activity.difficulty)
    errors.difficulty = "Please put a difficulty to the activity*";

  if (activity.difficulty > 5 || activity.difficulty < 1)
    errors.difficulty = "Please put a valid difficulty (1 to 5)*";

  if (!activity.duration)
    errors.duration = "Please put a duration to the activity*";

  if (activity.duration > 24 || activity.duration < 1)
    errors.duration = "Maximum duration from 1 to 24 hours*";

  if (activity.season.length < 1) errors.season = "Select a season please*";

  if (!activity.countries.length)
    errors.countries = "Select at least one country*";

  return errors;
}

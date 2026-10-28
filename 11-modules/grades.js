// "export" makes these usable in other files
export const PASS_MARK = 40;

export function getGrade(percentage) {
  if (percentage >= 90) return "A";
  if (percentage >= 75) return "B";
  if (percentage >= PASS_MARK) return "C";
  return "F";
}

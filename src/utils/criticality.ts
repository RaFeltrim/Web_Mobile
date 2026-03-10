export function calculateCriticalityScore(estimatedHours: number, dueDate: Date | null): number {
  if (estimatedHours <= 0) return 0;
  
  const baseScore = estimatedHours * 1.5;
  
  if (!dueDate) return baseScore + 1.0;
  
  const now = new Date();
  const isLate = dueDate < now;
  
  return isLate ? baseScore + 5.0 : baseScore + 1.0;
}

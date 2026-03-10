import { describe, it, expect } from 'vitest';
import { calculateCriticalityScore } from '../src/utils/criticality';

describe('Criticality Score Logic', () => {
    it('should return 0 for 0 estimated hours', () => {
        expect(calculateCriticalityScore(0, null)).toBe(0);
    });

    it('should calculate base score for tasks without due_date', () => {
        // 5 hours * 1.5 + 1.0 = 8.5
        expect(calculateCriticalityScore(5, null)).toBe(8.5);
    });

    it('should calculate high score for late tasks', () => {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        
        // 5 hours * 1.5 + 5.0 = 12.5
        expect(calculateCriticalityScore(5, pastDate)).toBe(12.5);
    });

    it('should calculate normal score for tasks not yet late', () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        
        // 5 hours * 1.5 + 1.0 = 8.5
        expect(calculateCriticalityScore(5, futureDate)).toBe(8.5);
    });
});

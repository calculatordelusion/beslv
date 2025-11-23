// Answers endpoint - reuses the hints logic since answers = hints for custom puzzles
import { GET as getHints } from '../hints/+server.js';

export async function GET(event) {
  // Reuse the hints endpoint logic
  return await getHints(event);
}

